#1 - Construire l'application React
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install

#2 - Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]