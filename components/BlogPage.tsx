import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, Clock, ArrowRight, Heart, X, Send } from 'lucide-react';
import { BlogPost } from '../types';

export const BlogPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const openBlog = (blog: BlogPost) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="contact-hero">
        <div className="container mx-auto px-4">
          <div className="contact-hero-content">
            <span className="contact-badge animate-in fade-in slide-in-from-bottom-2">Our Insights</span>
            <h1 className="font-serif animate-in fade-in slide-in-from-bottom-4">SST <span className="text-secondary">Blog</span></h1>
            <p className="animate-in fade-in slide-in-from-bottom-6">
              We answer four essential questions about real estate in Bhubaneswar, helping you make informed decisions for your future home.
            </p>
          </div>
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
                    <button 
                      onClick={() => openBlog(post)}
                      className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
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

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-8 duration-500">
            {/* Modal Header */}
            <div className="relative p-8 md:p-12 pb-6 flex justify-between items-start bg-slate-50/50">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                  {selectedBlog.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 leading-tight">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-6 mt-6 text-slate-500 text-sm font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary" />
                    {selectedBlog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-secondary" />
                    {selectedBlog.readTime}
                  </span>
                </div>
              </div>
              <button 
                onClick={closeBlog}
                className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-primary shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 pt-0">
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg aspect-video">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div 
                className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content || '' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/30">
              <button 
                onClick={closeBlog}
                className="px-8 py-3 text-slate-600 font-bold hover:text-primary transition-colors order-2 md:order-1"
              >
                Close Article
              </button>
              <button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20 order-1 md:order-2">
                Contact For Details <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
