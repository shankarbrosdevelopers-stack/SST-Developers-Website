import React from 'react';
import { ShieldCheck, Users, Target, Clock, Trophy, Phone, CheckCircle2, Home, UserCheck, HardHat, FileText, Key, Award } from 'lucide-react';

export const AboutPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* 1. Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Corporate Office"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Building Homes, <br /><span className="text-secondary">Building Trust</span></h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            For over 10 years, we’ve helped families find their perfect home with transparency, quality, and trust.
          </p>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
              <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">A Legacy of Excellence</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2014, SSTDevelopers began with a simple mission: to simplify the home-buying process while delivering world-class quality. What started as a small boutique agency has grown into one of the region's most respected real estate developers and consultancies.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We specialize in premium apartments, luxury villas, and sustainable gated communities. Our core philosophy is built on three pillars: <strong className="text-slate-800">Trust, Transparency, and Timely Delivery</strong>. We don't just build structures; we build ecosystems where families thrive.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-4 bg-slate-50 rounded-xl border-l-4 border-secondary">
                  <p className="font-bold text-slate-800 text-lg">Our Mission</p>
                  <p className="text-slate-600">Solving housing needs with future-ready homes.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team Meeting"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-slate-100 rounded-full -z-10"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 border-secondary">
              <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To create well-designed, affordable, and future-ready homes for families seeking comfort and security, ensuring a seamless ownership experience.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 border-primary">
              <div className="w-14 h-14 bg-slate-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted real estate brand known for quality, innovation, and timely delivery, setting new benchmarks in the industry.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 border-slate-400">
              <div className="w-14 h-14 bg-gray-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Our Values</h3>
              <ul className="space-y-3">
                {[
                  "Integrity & Transparency",
                  "Customer Satisfaction",
                  "Quality Construction",
                  "Future-Focused Development"
                ].map((val, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <CheckCircle2 size={18} className="text-secondary mr-2 shrink-0" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Achievements & Milestones */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Journey So Far</h2>
            <p className="text-slate-400 text-lg">Milestones that define our legacy.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { num: "10+", label: "Years Experience", icon: Clock },
              { num: "1200+", label: "Families Served", icon: Users },
              { num: "20+", label: "Projects Done", icon: Home },
              { num: "15", label: "Ongoing Projects", icon: HardHat },
              { num: "100%", label: "RERA Compliant", icon: ShieldCheck },
              { num: "12", label: "Industry Awards", icon: Trophy },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon className="text-secondary mb-4" size={28} />
                  <span className="text-3xl font-bold mb-1">{stat.num}</span>
                  <span className="text-sm text-slate-400">{stat.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Meet Our Leadership</h2>
            <p className="text-slate-500 text-lg">The visionaries behind SSTDevelopers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Subrat Kumar Raj", role: "Founder & Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", quote: "Quality is not an act, it is a habit." },
              { name: "Suchismita Parida", role: "Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", quote: "We build homes, not just houses." },
              { name: "Arjun Mehta", role: "Chief Architect", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", quote: "Design is intelligence made visible." },
              { name: "Sarah Connor", role: "Head of Sales", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", quote: "Customer trust is our biggest asset." },
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img src={member.img} alt={member.name} className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-slate-300 text-xs italic opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Why Trust SSTDevelopers?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "On-Time Delivery", desc: "We respect your time. Our track record of timely possession sets us apart.", icon: Clock },
              { title: "Premium Quality", desc: "We use only top-tier materials and construction practices.", icon: Award },
              { title: "Transparent Pricing", desc: "No hidden costs. Detailed breakdown of every penny you spend.", icon: FileText },
              { title: "RERA Registered", desc: "100% legal compliance for complete peace of mind.", icon: ShieldCheck },
              { title: "24/7 Support", desc: "Dedicated relationship managers for every client.", icon: Phone },
              { title: "Zero Brokerage", desc: "Direct sales means no middleman commissions.", icon: UserCheck },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. Our Approach (Process) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">How We Work</h2>
            <p className="text-slate-500 text-lg">A simple, transparent journey to your dream home.</p>
          </div>

          <div className="hidden md:flex justify-between items-center relative max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>
            {[
              { step: "01", title: "Consultation", icon: Users },
              { step: "02", title: "Shortlisting", icon: Home },
              { step: "03", title: "Site Visit", icon: Map },
              { step: "04", title: "Paperwork", icon: FileText },
              { step: "05", title: "Handover", icon: Key },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center bg-white p-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg border-4 border-white">
                    <Icon size={24} />
                  </div>
                  <span className="text-secondary font-bold text-sm mb-1">Step {item.step}</span>
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                </div>
              )
            })}
          </div>

          {/* Mobile Process View */}
          <div className="md:hidden space-y-6">
            {[
              { step: "01", title: "Consultation", desc: "We understand your needs and budget." },
              { step: "02", title: "Shortlisting", desc: "We present the best matching properties." },
              { step: "03", title: "Site Visit", desc: "Guided tour of your potential future home." },
              { step: "04", title: "Documentation", desc: "Transparent legal paperwork and loan assist." },
              { step: "05", title: "Handover", desc: "Keys to your new dream home." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Awards */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Awards & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            <div className="flex flex-col items-center">
              <Trophy size={48} className="text-yellow-500 mb-4" />
              <p className="font-bold">Best Developer 2023</p>
              <p className="text-xs text-slate-400">Real Estate Awards</p>
            </div>
            <div className="flex flex-col items-center">
              <Award size={48} className="text-yellow-500 mb-4" />
              <p className="font-bold">Excellence in Design</p>
              <p className="text-xs text-slate-400">Architecture Digest</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={48} className="text-yellow-500 mb-4" />
              <p className="font-bold">Customer Choice</p>
              <p className="text-xs text-slate-400">Trust Index</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials (Reused logic, different display if needed, but let's keep it simple) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-8">Words of Trust</h2>
          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            <p className="text-xl md:text-2xl text-slate-600 italic mb-6">"Smooth experience from booking to handover. The team guided us clearly through every step. Very trustworthy builder with zero hidden charges."</p>
            <div className="flex items-center justify-center gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Rajesh" className="w-14 h-14 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-bold text-slate-900">Rajesh Kumar</p>
                <p className="text-xs text-secondary font-bold uppercase">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Help You Find Your Dream Home</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Start your journey with a partner you can trust. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-secondary font-bold rounded-full shadow-lg hover:bg-slate-100 transition-colors">
              Request a Callback
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper for map icon
function Map({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  );
}