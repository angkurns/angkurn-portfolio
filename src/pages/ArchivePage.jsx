import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ImagePreviewModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-full max-h-full flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 text-gray-500 hover:text-orange-accent p-2 transition-colors flex items-center gap-2 group"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
          <X className="w-6 h-6" />
        </button>
        <div className="rounded-xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-100">
          <img
            src={src}
            alt="Preview"
            className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain bg-gray-50"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const ArchivePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Archive Section */}
      <section id="archive" className="container mx-auto px-6 py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative pl-6 md:pl-12 border-l border-gray-100">
            <div className="mb-16 md:mb-24">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                Archive
              </h1>
              <p className="text-orange-accent font-mono text-sm tracking-widest uppercase opacity-80">
                Early Experience & Design Foundations
              </p>
            </div>

            <div className="space-y-24 md:space-y-40">
              {/* Item 1: GMF AeroAsia */}
              <div className="relative">
                <div className="absolute -left-[30.5px] md:-left-[54.5px] top-2 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.2)]" />
                <div className="space-y-8">
                  <div>
                    <span className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                      Sep 2018
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      3 Canteen System Design – GMF AeroAsia
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                      Led end-to-end execution across design, engineering, budgeting, and production for 3 operational facilities. Before focusing on digital products, I led physical system design projects where I learned how to think in flows, constraints, and real-world operations.
                    </p>
                  </div>
                  
                  {/* GMF Images */}
                  <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-4 md:gap-4 custom-scrollbar">
                    {[
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/GMF%201.webp",
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/GMF%202.webp",
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/GMF%203.webp",
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/GMF%204.webp"
                    ].map((src, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImage(src)}
                        className="cursor-zoom-in min-w-[240px] md:min-w-0 aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 group"
                      >
                        <img 
                          src={src} 
                          alt="Retrospective item" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-50" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Item 2: Visual Foundations */}
              <div className="relative">
                <div className="absolute -left-[30.5px] md:-left-[54.5px] top-2 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.2)]" />
                <div className="space-y-8">
                  <div>
                    <span className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                      Sep 2016–2018
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      Visual Design Foundations
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                      Before focusing on systems and product design, I developed a strong foundation in visual composition, storytelling, and creative exploration.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
                    {[
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Superimpose.webp",
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Cinematic.webp"
                    ].map((src, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImage(src)}
                        className="cursor-zoom-in aspect-video rounded-xl overflow-hidden border border-gray-100 group"
                      >
                        <img 
                          src={src} 
                          alt="Visual Design" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-50" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Item 3: Early Product Design */}
              <div className="relative">
                <div className="absolute -left-[30.5px] md:-left-[54.5px] top-2 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.2)]" />
                <div className="space-y-8">
                  <div>
                    <span className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                      Sep 2015–2021
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                      Early Product Design Experience
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                      Early in my career, I designed and shipped mobile products across travel, loyalty, and commerce. This shaped my understanding of product flows, user behavior, and real-world constraints that still guide my work today.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {[
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Exp%20porto%201.webp",
                      "https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Exp%20porto%202.webp"
                    ].map((src, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImage(src)}
                        className="cursor-zoom-in aspect-[16/10] rounded-xl overflow-hidden border border-gray-100 group"
                      >
                        <img 
                          src={src} 
                          alt="Early Product Design" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-50" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <ImagePreviewModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchivePage;
