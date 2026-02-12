
import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const ProjectCard = ({ category, title, description, image }) => {
  const { toast } = useToast();

  const handleViewLogic = () => {
    toast({
      title: "🚧 Project Details Coming Soon",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-[#2a2a2a] rounded-3xl overflow-hidden border border-warm-white/[0.03] hover:border-orange-accent/30 hover:shadow-[0_20px_40px_-15px_rgba(255,140,66,0.15)] transition-all duration-300 group"
    >
      {/* Thumbnail Image Placeholder */}
      <div className="relative h-56 md:h-64 bg-gradient-to-br from-charcoal-dark to-charcoal-light/50 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-warm-white/30 text-6xl font-bold">
            {title.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {category.split(',').map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-orange-accent/25 text-orange-accent px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-warm-white mb-3 group-hover:text-orange-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-warm-white/80 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* View Logic Button */}
        <button
          onClick={handleViewLogic}
          className="text-orange-accent font-semibold hover:text-orange-accent/80 transition-colors flex items-center gap-2"
        >
          View Logic
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
