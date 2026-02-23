import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative flex flex-col h-full bg-[#161616] rounded-[32px] overflow-hidden border border-white/[0.05] cursor-pointer"
      variants={{
        initial: { y: 0, shadow: "0 10px 30px -15px rgba(0,0,0,0.3)" },
        hover: { y: -8, shadow: "0 32px 64px -16px rgba(0,0,0,0.5)" }
      }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Thumbnail Container - Sharp Cut */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-[#121212] isolate">
        <motion.div
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full will-change-transform"
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#121212]">
              <span className="text-warm-white/10 text-6xl font-bold font-montserrat tracking-tighter">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Area - Premium Editorial Spacing */}
      <div className="p-8 md:p-10 flex flex-col flex-1">
        <motion.h3
          variants={{
            initial: { color: "#f5f1e8" },
            hover: { color: "#FF8C42" }
          }}
          className="text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 leading-tight"
        >
          {title}
        </motion.h3>

        <p className="text-warm-white/40 text-base md:text-lg leading-relaxed mb-8 flex-1 font-medium">
          {description}
        </p>

        {/* Action Link */}
        <div className="flex items-center gap-1 text-orange-accent font-bold text-sm tracking-wide transition-all group-hover:gap-2">
          <span>Read case</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
