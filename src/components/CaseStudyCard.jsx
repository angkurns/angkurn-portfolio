import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Vertical case study card, used on the Home page and the Work page.
const CaseStudyCard = ({ project, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link
      to={`/systems/${project.slug}`}
      className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-[#f4f5f5] overflow-hidden">
        <img
          src={project.thumbnail_url}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {project.reading_time || project.read_time} · {project.year}
        </span>

        <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="text-base text-gray-600 leading-relaxed">
          {project.short_description}
        </p>

        {project.category && (
          <div className="flex flex-wrap gap-2 mt-5">
            {project.category.split(',').map((cat, i) => (
              <span key={i} className="px-2.5 py-1 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-md border border-gray-100">
                {cat.trim()}
              </span>
            ))}
          </div>
        )}

        <span className="mt-auto pt-6 text-gray-900 font-medium inline-flex items-center gap-1 group-hover:underline">
          See how it works →
        </span>
      </div>
    </Link>
  </motion.div>
);

export default CaseStudyCard;
