import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, image, year, role }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="block group bg-charcoal-light/30 border border-warm-white/5 p-8 rounded-3xl hover:bg-charcoal-light/50 transition-all duration-300 h-full relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Dedicated Thumbnail Container */}
        <div className="mb-6 aspect-[16/10] rounded-2xl overflow-hidden bg-charcoal-light/20 border border-white/[0.03] flex items-center justify-center relative group/img">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 opacity-10">
              <div className="w-24 h-[1.5px] bg-warm-white rounded-full" />
              <div className="w-16 h-[1.5px] bg-warm-white rounded-full" />
              <div className="w-28 h-[1.5px] bg-orange-accent/50 rounded-full" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mb-6 flex-1">
          <h3 className="text-2xl font-bold text-warm-white mb-2 group-hover:text-orange-accent transition-colors leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-warm-white/40 text-sm md:text-base leading-relaxed line-clamp-1 font-medium">
              {description}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-warm-white/5 mb-6" />

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-warm-white/25 text-[10px] font-mono font-bold uppercase tracking-widest">
            <span>{year || "2025"}</span>
            <span className="opacity-10">•</span>
            <span>{role || "System Design"}</span>
          </div>

          <div className="flex items-center gap-1.5 text-orange-accent font-bold text-[10px] uppercase tracking-widest transition-all duration-300">
            <span>View Case Study</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
