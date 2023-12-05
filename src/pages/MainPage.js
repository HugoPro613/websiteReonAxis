import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentMain from '../components/ContentMain';

function MainPage() {
    return (
        <div>
            <Header />
            <Hero />
            <ContentMain />
            <Footer />
        </div>
    );
}

export default MainPage;