#1 - Construire l'application React
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

#2 - Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

#3 - Copie des certificats SSL
COPY ./config/fullchain.pem /etc/ssl/fullchain.pem
COPY ./config/privkey.pem /etc/ssl/privkey.pem

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]