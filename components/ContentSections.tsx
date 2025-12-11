
import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, IndianRupee, Headset, FileCheck, Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { Testimonial, FaqItem } from '../types';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <div className="relative">
               <img src="https://picsum.photos/id/101/600/700" alt="About Us" className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
               <div className="absolute -bottom-10 -right-10 bg-secondary text-white p-8 rounded-2xl shadow-xl hidden md:block">
                 <p className="text-4xl font-bold mb-1">10+</p>
                 <p className="font-medium text-sm opacity-90">Years of Experience</p>
               </div>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-100 rounded-full -z-10"></div>
             </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight">10 Years of Building <br/>Trusted Homes</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At SSTDevelopers, we believe home is more than just a place to live—it's where memories are made. With a decade of experience, we have successfully delivered trusted, high-quality, and legally verified properties to thousands of families. We pride ourselves on transparency, integrity, and unwavering commitment to quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-primary mb-1">1200+</p>
                <p className="text-sm text-slate-500">Happy Families</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-primary mb-1">20+</p>
                <p className="text-sm text-slate-500">Completed Projects</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-slate-500">RERA Approved</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: ShieldCheck, title: "RERA Registered", desc: "All projects are RERA compliant for your peace of mind." },
    { icon: CheckCircle2, title: "100% Verified", desc: "Thorough legal checks on every property listing." },
    { icon: IndianRupee, title: "Zero Brokerage", desc: "Direct from developers, no hidden charges." },
    { icon: Headset, title: "24/7 Support", desc: "Dedicated relationship managers for every query." },
    { icon: FileCheck, title: "Transparent Pricing", desc: "No hidden costs, what you see is what you pay." },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Why Choose SSTDevelopers?</h2>
          <p className="text-slate-500 text-lg">We simplify the home buying journey with trust and transparency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    { id: 1, name: "Sarah Jenkins", location: "New York, NY", text: "Finding our dream villa was seamless with SSTDevelopers. The transparency and professionalism were unmatched.", image: "https://picsum.photos/id/64/100/100" },
    { id: 2, name: "Michael Chang", location: "San Francisco, CA", text: "They helped me find the perfect commercial space for my startup. Excellent support throughout the legal process.", image: "https://picsum.photos/id/91/100/100" },
    { id: 3, name: "Priya Patel", location: "Austin, TX", text: "I loved the virtual tour features. It saved us so much time. Highly recommend their verified listings.", image: "https://picsum.photos/id/129/100/100" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-16">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative mt-8 hover:bg-white hover:shadow-xl transition-all border border-slate-100">
              <Quote className="absolute top-8 right-8 text-slate-200" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-slate-800">{t.name}</h4>
                  <span className="text-xs text-secondary font-medium uppercase">{t.location}</span>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
              <div className="flex gap-1 mt-6 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GalleryOfEvents: React.FC = () => {
  const events = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Client Consultation and Handshake" 
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Annual Strategy Meeting" 
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Awards Ceremony Celebration" 
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Property Site Visit" 
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      alt: "Community Event" 
    },
  ];

  // Duplicate the array to create the seamless looping effect
  const marqueeEvents = [...events, ...events];

  return (
    <section className="py-24 bg-white border-t border-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-2">Our Gallery of Events</h2>
        <p className="text-slate-500 text-lg mb-12">A glimpse of our bond with trust</p>
      </div>
        
      <div className="w-full overflow-hidden relative">
        {/* Gradient Fade Effects on Edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track - Standard marquee (Right to Left) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-4">
          {marqueeEvents.map((event, index) => (
            <div 
              key={`${event.id}-${index}`} 
              className="relative group overflow-hidden rounded-2xl h-64 w-96 flex-shrink-0 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={event.src} 
                alt={event.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-sm font-medium drop-shadow-md">{event.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OurPartners: React.FC = () => {
  const partners = [
    "ICICI Bank",
    "Indian Bank",
    "Indian Overseas Bank",
    "LIC Housing Finance Ltd",
    "Punjab & Sind Bank"
  ];

  // Duplicate the list 4 times to ensure seamless scrolling on large screens
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-white border-t border-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-2 relative inline-block">
          Our Partners
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto my-4 rounded-full"></div>
        <p className="text-slate-500 text-lg mb-12">Collaborating with industry leaders to deliver excellence</p>
      </div>
      
      <div className="w-full overflow-hidden relative">
        {/* Gradient Fade Effects */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Animate Reverse Marquee (Left to Right) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] items-center">
          {marqueePartners.map((partner, index) => (
            <div 
              key={index} 
              className="w-52 h-24 flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img 
                src={`https://placehold.co/300x120/white/0f172a?text=${encodeURIComponent(partner)}&font=playfair`} 
                alt={partner} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FaqItem[] = [
    { question: "Do you provide home loan assistance?", answer: "Yes, we have tie-ups with all major banks to help you get the best interest rates and quick approvals." },
    { question: "How does the registration process work?", answer: "Our legal team handles all documentation, verification, and registration procedures to ensure a hassle-free experience." },
    { question: "Can I schedule a site visit on weekends?", answer: "Absolutely! We arrange site visits 7 days a week. You can also opt for our cab pick-up service." },
    { question: "What is the booking amount?", answer: "The booking amount varies by project but is typically 5-10% of the property value. It is fully refundable within the cooling-off period." },
    { question: "Are the documents legally verified?", answer: "Yes, every property listed with us undergoes a strict 50-point legal verification process by our expert legal team." },
    { question: "Do you charge brokerage from buyers?", answer: "No, for most of our new project listings, we charge zero brokerage from the buyers." },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-slate-800">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-slate-400" />}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
