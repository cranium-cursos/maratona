import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import ScheduleSection from '../components/ScheduleSection';
import OfferSection from '../components/OfferSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';

const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <main id="main-content">
                <Hero />
                <FeatureSection />
                <ScheduleSection />
                <OfferSection />
                <AboutSection />
            </main>
            <Footer />
            <MobileCTA />
        </>
    );
};

export default LandingPage;
