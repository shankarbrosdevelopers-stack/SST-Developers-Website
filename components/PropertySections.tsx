import React from 'react';
import { Bed, Bath, Move, ArrowRight, Building, Trees, Store, LandPlot, MapPin, Calendar, CheckCircle, Home, Castle } from 'lucide-react';
import { Property, Project } from '../types';

// Mock Data
const FEATURED_PROPERTIES: Property[] = [
  { id: 1, title: 'Luxury 3BHK Duplex', price: '₹1.05 Cr', location: 'Pahala', type: 'Bungalow', beds: 3, baths: 3, sqft: 1800, image: 'https://picsum.photos/id/12/600/400' },
  { id: 2, title: 'Grand Royal Mansion', price: '₹85 Lakhs', location: 'Pahala', type: 'Duplex', beds: 5, baths: 5, sqft: 4500, image: 'https://picsum.photos/id/28/600/400' },
  { id: 3, title: 'Premium 4BHK Villa', price: '₹60 Lakhs', location: 'Pahala', type: 'Duplex', beds: 4, baths: 4, sqft: 2400, image: 'https://picsum.photos/id/188/600/400' },
  { id: 4, title: 'Modern Duplex Home', price: '₹1.89 Cr', location: 'Gohala', type: 'Mansion', beds: 3, baths: 3, sqft: 2000, image: 'https://picsum.photos/id/164/600/400' },
  { id: 5, title: 'Elite 4BHK Estate', price: '₹85 Lakhs', location: 'Pahala', type: 'Villa', beds: 4, baths: 4, sqft: 2800, image: 'https://picsum.photos/id/221/600/400' },
  { id: 6, title: 'Signature Mansion', price: '₹75 Lakhs', location: 'Gohala', type: 'Duplex', beds: 6, baths: 6, sqft: 5000, image: 'https://picsum.photos/id/235/600/400' },
];

const CATEGORIES = [
  { icon: Building, name: 'Duplex', count: '40+ Listings' },
  { icon: Home, name: 'Villas', count: '50+ Listings' },
  { icon: Castle, name: 'Mansions', count: '15+ Exclusive' },
  { icon: Trees, name: 'Gated Communities', count: '15+ Projects' },
  { icon: LandPlot, name: 'Plots & Land', count: '40+ Acres' },
];

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Skyline Towers",
    priceRange: "₹60L - ₹90L",
    possession: "Dec 2025",
    reraId: "RERA-12345",
    location: "Bhubaneswar",
    amenities: ["Infinity Pool", "Sky Lounge", "Smart Home"],
    image: "https://picsum.photos/id/48/800/500"
  },
  {
    id: 2,
    name: "Green Meadows",
    priceRange: "₹1.05 Cr - ₹1.89 Cr",
    possession: "Ready to Move",
    reraId: "RERA-67890",
    location: "Bhubaneswar",
    amenities: ["Golf Course", "Clubhouse", "Private Parks"],
    image: "https://picsum.photos/id/56/800/500"
  },
  {
    id: 3,
    name: "The Onyx Plaza",
    priceRange: "₹85L+",
    possession: "Jun 2026",
    reraId: "RERA-11223",
    location: "Bhubaneswar",
    amenities: ["24/7 Security", "Valet Parking", "Concierge"],
    image: "https://picsum.photos/id/89/800/500"
  }
];

interface FeaturedPropertiesProps {
  activeFilters?: { location?: string; type?: string; budget?: string; bhk?: string } | null;
  onClearFilters?: () => void;
  propertyMatchesCriteria?: (property: Property, criteria: { location?: string; type?: string; budget?: string; bhk?: string }) => boolean;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  activeFilters,
  onClearFilters,
  propertyMatchesCriteria
}) => {
  // Calculate matching properties count
  const matchingCount = activeFilters && propertyMatchesCriteria
    ? FEATURED_PROPERTIES.filter(prop => propertyMatchesCriteria(prop, activeFilters)).length
    : FEATURED_PROPERTIES.length;

  // Helper to format filter criteria text
  const getFilterText = () => {
    if (!activeFilters) return '';
    const parts = [];
    if (activeFilters.location) parts.push(`Location: ${activeFilters.location.charAt(0).toUpperCase() + activeFilters.location.slice(1)}`);
    if (activeFilters.type) parts.push(`Type: ${activeFilters.type.charAt(0).toUpperCase() + activeFilters.type.slice(1)}`);
    if (activeFilters.bhk) parts.push(`BHK: ${activeFilters.bhk}${activeFilters.bhk === '5' ? '+' : ''}`);
    if (activeFilters.budget) {
      const budgetText = activeFilters.budget.replace('under-', 'Under ₹').replace('l', ' Lakhs').replace('cr', ' Cr');
      parts.push(`Budget: ${budgetText}`);
    }
    return parts.join(' • ');
  };

  return (
    <section id="trending-properties" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Filter Banner */}
        {activeFilters && (
          <div className="mb-8 p-6 bg-gradient-to-r from-secondary/10 to-yellow-500/10 border-2 border-secondary/30 rounded-2xl animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {matchingCount} {matchingCount === 1 ? 'Property' : 'Properties'} Found
                </h3>
                <p className="text-sm text-slate-600">
                  {getFilterText() || 'Showing all properties'}
                </p>
              </div>
              <button
                onClick={onClearFilters}
                className="px-6 py-2.5 bg-white hover:bg-slate-100 border-2 border-slate-300 text-slate-700 font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-3">Trending Properties Near You</h2>
            <p className="text-slate-500 text-lg">Handpicked selection of premium real estate.</p>
          </div>
          <button className="hidden md:flex items-center text-secondary font-bold hover:text-yellow-600 transition-colors">
            View All Properties <ArrowRight size={20} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((prop) => {
            const isMatch = !activeFilters || !propertyMatchesCriteria || propertyMatchesCriteria(prop, activeFilters);
            const cardClass = activeFilters
              ? (isMatch ? 'property-card-highlighted' : 'property-card-dimmed')
              : '';

            return (
              <div
                key={prop.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${cardClass}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    For Sale
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                    <span className="font-bold text-lg">{prop.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-secondary font-bold uppercase mb-2 tracking-wide">{prop.type}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-secondary transition-colors">{prop.title}</h3>
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin size={16} className="mr-1" />
                    {prop.location}
                  </div>
                  <div className="flex justify-between py-4 border-t border-slate-100 text-slate-600 text-sm">
                    <div className="flex items-center gap-1"><Bed size={18} /> {prop.beds} Beds</div>
                    <div className="flex items-center gap-1"><Bath size={18} /> {prop.baths} Baths</div>
                    <div className="flex items-center gap-1"><Move size={18} /> {prop.sqft} sqft</div>
                  </div>
                  <button className="w-full mt-4 py-3 border border-slate-200 rounded-xl text-slate-700 font-bold hover:bg-primary hover:text-white hover:border-primary transition-all">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-800 font-bold shadow-sm">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export const PropertyCategories: React.FC = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-12">Our Completed Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-slate-50 border border-slate-100 hover:border-secondary hover:shadow-xl hover:bg-white transition-all cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-secondary">{cat.name}</h3>
                <span className="text-xs text-slate-500 mt-1">{cat.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const NewProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">New Launch</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Featured Projects</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Explore our newly launched premium developments designed for the future.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:border-secondary transition-all group">
              <div className="relative h-60">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
                  New Launch
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{project.name}</h3>
                <div className="flex items-center text-slate-400 text-sm mb-6">
                  <MapPin size={16} className="mr-1 text-secondary" />
                  {project.location}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Price Range</span>
                    <span className="font-bold text-secondary">{project.priceRange}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">Possession</span>
                    <span className="font-medium">{project.possession}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-700 pb-2">
                    <span className="text-slate-400">RERA ID</span>
                    <span className="font-mono text-xs bg-slate-700 px-2 py-0.5 rounded">{project.reraId}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.amenities.map((amenity, i) => (
                    <span key={i} className="text-xs font-medium bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-secondary hover:text-white transition-colors">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">Immersive Experience</h2>
          <p className="text-slate-500 mt-2">Take a virtual tour of our premium properties.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/id/40/800/800" alt="Main" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <a
                href="https://shankarbrosdevelopers-stack.github.io/VirtualHomeTour/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white text-white rounded-full font-bold hover:bg-white hover:text-primary transition-all flex items-center gap-2"
              >
                <Move size={20} /> 360° Virtual Tour
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/id/58/400/400" alt="Detail 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium">Drone View</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/id/69/400/400" alt="Detail 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium">Interiors</span>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden group">
            <img src="https://picsum.photos/id/88/800/400" alt="Detail 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white font-medium">Floor Plans & Layouts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};