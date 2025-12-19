import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { FeaturedProperties, PropertyCategories, NewProjects, Gallery } from './components/PropertySections';
import { AboutUs, WhyChooseUs, Testimonials, FAQ, GalleryOfEvents, OurPartners } from './components/ContentSections';
import { ContactForm } from './components/ContactForm';
import { AboutPage } from './components/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero />
            <FeaturedProperties />
            <PropertyCategories />
            <NewProjects />
            <AboutUs />
            <WhyChooseUs />
            <Testimonials />
            <Gallery />
            <GalleryOfEvents />
            <OurPartners />
            <FAQ />
            <ContactForm />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <div className="pt-24 animate-in fade-in duration-500">
            <div className="text-center py-10 bg-slate-50">
              <h1 className="text-4xl font-serif font-bold text-slate-800">Contact Us</h1>
              <p className="text-slate-500 mt-2">We are here to help you.</p>
            </div>
            <ContactForm />
            <GalleryOfEvents />
            <OurPartners />
            <FAQ />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;