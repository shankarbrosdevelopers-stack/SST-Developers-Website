import React, { useState } from 'react';
import { Search, MapPin, Home, IndianRupee, Bed } from 'lucide-react';

interface HeroProps {
  onSearch?: (criteria: { location?: string; type?: string; budget?: string; bhk?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [bhk, setBhk] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        location: location || undefined,
        type: propertyType || undefined,
        budget: budget || undefined,
        bhk: bhk || undefined,
      });
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />
        <img
          src="https://picsum.photos/id/1031/1920/1080"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in-up">
          Exclusive Luxury Living
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl shadow-sm">
          Find Your Dream <br /><span className="text-secondary">Home Today</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-light">
          Premium Duplex, Villa & Mansion in Bhubaneswar
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-5xl bg-white rounded-2xl p-4 shadow-2xl animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative group">
              <div className="flex items-center px-4 py-3 bg-slate-50 rounded-xl border border-transparent group-hover:border-slate-200 transition-all">
                <MapPin className="text-secondary mr-3" size={20} />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</span>
                  <select
                    className="bg-transparent text-slate-800 font-semibold focus:outline-none w-full cursor-pointer mt-0.5 appearance-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    <option value="pahala">Pahala</option>
                    <option value="gohala">Gohala</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center px-4 py-3 bg-slate-50 rounded-xl border border-transparent group-hover:border-slate-200 transition-all">
                <Home className="text-secondary mr-3" size={20} />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Type</span>
                  <select
                    className="bg-transparent text-slate-800 font-semibold focus:outline-none w-full cursor-pointer mt-0.5 appearance-none"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="">Property Type</option>
                    <option value="duplex">Duplex</option>
                    <option value="villa">Villa</option>
                    <option value="mansion">Mansion</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center px-4 py-3 bg-slate-50 rounded-xl border border-transparent group-hover:border-slate-200 transition-all">
                <Bed className="text-secondary mr-3" size={20} />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">BHK</span>
                  <select
                    className="bg-transparent text-slate-800 font-semibold focus:outline-none w-full cursor-pointer mt-0.5 appearance-none"
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value)}
                  >
                    <option value="">Any BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5">5+ BHK</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center px-4 py-3 bg-slate-50 rounded-xl border border-transparent group-hover:border-slate-200 transition-all">
                <IndianRupee className="text-secondary mr-3" size={20} />
                <div className="flex flex-col text-left w-full">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Budget</span>
                  <select
                    className="bg-transparent text-slate-800 font-semibold focus:outline-none w-full cursor-pointer mt-0.5 appearance-none"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Budget Range</option>
                    <option value="under-75l">Under ₹75 Lakhs</option>
                    <option value="under-1cr">Under ₹1 Cr</option>
                    <option value="under-2cr">Under ₹2 Cr</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-slate-800 text-white font-bold rounded-xl py-3 px-6 flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg"
            >
              <Search size={20} />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 py-3.5 bg-secondary hover:bg-yellow-600 text-white font-bold rounded-full shadow-lg hover:shadow-secondary/30 transition-all">
            View Properties
          </button>
          <button className="px-8 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold rounded-full transition-all">
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};