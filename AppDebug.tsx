import React from 'react';
import { Header, Footer } from './components/Layout';
// import { Hero } from './components/Hero';
// import { FeaturedProperties, PropertyCategories, NewProjects, Gallery, ProjectModal, filterProperties } from './components/PropertySections';
// import { AboutUs, WhyChooseUs, Testimonials, FAQ, GalleryOfEvents, OurPartners } from './components/ContentSections';
// import { ContactForm } from './components/ContactForm';
// import { AboutPage } from './components/AboutPage';
// import { PropertySearchModal } from './components/PropertySearchModal';

const AppDebug: React.FC = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1>Testing Layout Components</h1>
            <p>If you see Header and Footer below, Layout is OK!</p>
            <Header currentPage="home" onNavigate={() => { }} />
            <Footer />
        </div>
    );
};

export default AppDebug;
