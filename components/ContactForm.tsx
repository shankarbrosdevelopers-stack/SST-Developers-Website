import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-12 bg-secondary text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Discuss Your Dream Home</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Fill out the form and our premium property consultants will get in touch with you shortly. 
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                   <span className="font-bold text-xl">1</span>
                 </div>
                 <p className="font-medium">Schedule a free consultation</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                   <span className="font-bold text-xl">2</span>
                 </div>
                 <p className="font-medium">Visit properties with our experts</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                   <span className="font-bold text-xl">3</span>
                 </div>
                 <p className="font-medium">Secure your home with zero hassle</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Request a Callback</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary transition-colors" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Property Interest</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary transition-colors">
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-secondary transition-colors h-24" placeholder="Tell us about your requirements..."></textarea>
              </div>
              
              <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg mt-2">
                Request Callback <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};