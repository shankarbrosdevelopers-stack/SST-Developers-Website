import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { FeaturedProperties, PropertyCategories, NewProjects, Gallery } from './components/PropertySections';
import { AboutUs, WhyChooseUs, Testimonials, FAQ, GalleryOfEvents, OurPartners } from './components/ContentSections';
import { ContactForm } from './components/ContactForm';
import { AboutPage } from './components/AboutPage';
import { Property } from './types';

// All available properties for search
const ALL_PROPERTIES: Property[] = [
  { id: 1, title: 'Luxury 3BHK Duplex', price: '₹1.05 Cr', location: 'Pahala', type: 'Duplex', beds: 3, baths: 3, sqft: 1800, image: 'https://picsum.photos/id/12/600/400' },
  { id: 2, title: 'Grand Royal Mansion', price: '₹85 Lakhs', location: 'Pahala', type: 'Mansion', beds: 5, baths: 5, sqft: 4500, image: 'https://picsum.photos/id/28/600/400' },
  { id: 3, title: 'Premium 4BHK Villa', price: '₹60 Lakhs', location: 'Pahala', type: 'Villa', beds: 4, baths: 4, sqft: 2400, image: 'https://picsum.photos/id/188/600/400' },
  { id: 4, title: 'Modern Duplex Home', price: '₹1.89 Cr', location: 'Gohala', type: 'Duplex', beds: 3, baths: 3, sqft: 2000, image: 'https://picsum.photos/id/164/600/400' },
  { id: 5, title: 'Elite 4BHK Estate', price: '₹85 Lakhs', location: 'Pahala', type: 'Villa', beds: 4, baths: 4, sqft: 2800, image: 'https://picsum.photos/id/221/600/400' },
  { id: 6, title: 'Signature Mansion', price: '₹75 Lakhs', location: 'Gohala', type: 'Mansion', beds: 6, baths: 6, sqft: 5000, image: 'https://picsum.photos/id/235/600/400' },
  { id: 7, title: 'Elegant Villa', price: '₹95 Lakhs', location: 'Pahala', type: 'Villa', beds: 4, baths: 3, sqft: 2200, image: 'https://picsum.photos/id/106/600/400' },
  { id: 8, title: 'Luxury Duplex', price: '₹1.2 Cr', location: 'Gohala', type: 'Duplex', beds: 4, baths: 4, sqft: 2600, image: 'https://picsum.photos/id/112/600/400' },
];

// Check if a property matches the search criteria
const propertyMatchesCriteria = (property: Property, criteria: { location?: string; type?: string; budget?: string; bhk?: string }): boolean => {
  // Location filter
  if (criteria.location && criteria.location !== '') {
    const locationMatch = property.location.toLowerCase() === criteria.location.toLowerCase();
    if (!locationMatch) return false;
  }

  // Type filter
  if (criteria.type && criteria.type !== '') {
    const typeMatch = property.type.toLowerCase() === criteria.type.toLowerCase();
    if (!typeMatch) return false;
  }

  // BHK filter
  if (criteria.bhk && criteria.bhk !== '') {
    const bhkValue = parseInt(criteria.bhk);
    if (bhkValue === 5) {
      // 5+ BHK
      if (property.beds < 5) return false;
    } else {
      if (property.beds !== bhkValue) return false;
    }
  }

  // Budget filter
  if (criteria.budget && criteria.budget !== '') {
    const priceValue = parseFloat(property.price.replace(/[₹,\sLakhsCr]/g, ''));
    const isCr = property.price.includes('Cr');
    const priceInLakhs = isCr ? priceValue * 100 : priceValue;

    switch (criteria.budget) {
      case 'under-75l':
        if (priceInLakhs >= 75) return false;
        break;
      case 'under-1cr':
        if (priceInLakhs >= 100) return false;
        break;
      case 'under-2cr':
        if (priceInLakhs >= 200) return false;
        break;
    }
  }

  return true;
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeFilters, setActiveFilters] = useState<{ location?: string; type?: string; budget?: string; bhk?: string } | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (criteria: { location?: string; type?: string; budget?: string; bhk?: string }) => {
    // Set active filters
    setActiveFilters(criteria);

    // Scroll to trending properties section
    setTimeout(() => {
      const trendingSection = document.getElementById('trending-properties');
      if (trendingSection) {
        trendingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleClearFilters = () => {
    setActiveFilters(null);
  };



  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero onSearch={handleSearch} />
            <FeaturedProperties
              activeFilters={activeFilters}
              onClearFilters={handleClearFilters}
              propertyMatchesCriteria={propertyMatchesCriteria}
            />
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