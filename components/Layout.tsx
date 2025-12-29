import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Home } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', action: () => onNavigate('home') },
    { name: 'Projects', id: 'projects', action: () => onNavigate('home') },
    { name: 'Agents', id: 'agents', action: () => onNavigate('home') },
    { name: 'About Us', id: 'about', action: () => onNavigate('about') },
    { name: 'Contact', id: 'contact', action: () => onNavigate('contact') },
    {
      name: '360° Virtual Tour',
      id: 'tour',
      action: () => window.open('https://shankarbrosdevelopers-stack.github.io/VirtualHomeTour/', '_blank')
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white">
            <Home size={24} />
          </div>
          <span className={`text-2xl font-serif font-bold ${isScrolled || currentPage !== 'home' ? 'text-primary' : 'text-white'}`}>
            SST<span className="text-secondary">Developers</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className={`text-sm font-medium hover:text-secondary transition-colors ${currentPage === link.id ? 'text-secondary font-bold' :
                (isScrolled || currentPage !== 'home' ? 'text-slate-700' : 'text-white/90')
                }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 bg-secondary hover:bg-yellow-600 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg">
            Schedule Visit
          </button>

          <button
            className="lg:hidden text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled || currentPage !== 'home' ? 'text-primary' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 lg:hidden flex flex-col p-6 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                setIsMobileMenuOpen(false);
              }}
              className={`py-3 text-left font-medium border-b border-slate-100 last:border-0 hover:text-secondary ${currentPage === link.id ? 'text-secondary' : 'text-slate-700'
                }`}
            >
              {link.name}
            </button>
          ))}
          <button className="mt-4 w-full py-3 bg-secondary text-white font-bold rounded-lg shadow-md">
            Schedule Visit
          </button>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white">
                <Home size={18} />
              </div>
              <span className="text-xl font-serif font-bold">
                SST<span className="text-secondary">Developers</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Experience the pinnacle of luxury living. We help you find the perfect home that suits your lifestyle and budget with transparency and trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-secondary transition-colors">Properties</a></li>
              <li><a href="#" className="text-slate-400 hover:text-secondary transition-colors">New Projects</a></li>
              <li><a href="#" className="text-slate-400 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span>2001, Laxmi Priya Twin City Tower, Pahala, Bhubaneswar</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>+91 9861113075</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-secondary shrink-0" size={18} />
                <span>shiridisait@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Location</h3>
            <a
              href="https://maps.app.goo.gl/sizUKhK4UD62tTWV8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-40 bg-slate-800 rounded-lg overflow-hidden relative group"
            >
              <img
                src="https://picsum.photos/400/300?grayscale"
                alt="Map Location"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-bold border border-white/20 group-hover:bg-white/20 transition-colors">View on Google Maps</span>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2024 SSTDevelopers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Design Guidelines</a>
          </div>
        </div>
    </footer>
  );
};