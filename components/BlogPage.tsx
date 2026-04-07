import React from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, Clock, ArrowRight, Heart } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="bg-slate-50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block animate-in fade-in slide-in-from-bottom-2">Our Insights</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6 animate-in fade-in slide-in-from-bottom-4">SST <span className="text-primary">Blog</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6">
            Everything you need to know about real estate in Bhubaneswar. We answer four essential questions about investment, locations, and property types.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {BLOG_POSTS.map((post, idx) => (
              <div 
                key={post.id} 
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar size={14} className="text-secondary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock size={14} className="text-secondary" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                    <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                      Read Article <ArrowRight size={18} />
                    </button>
                    <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors">
                      <Heart size={18} />
                      <span className="text-xs font-bold">12</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
