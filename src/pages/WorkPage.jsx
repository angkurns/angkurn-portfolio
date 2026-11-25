
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { fetchAllCaseStudies } from '@/lib/api';
import { useContactModal } from '@/context/ContactModalContext';
import CaseStudyCard from '@/components/CaseStudyCard';

const WorkPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const { openModal } = useContactModal();

  useEffect(() => {
    const loadContent = async () => {
      try {
        const caseStudiesData = await fetchAllCaseStudies();
        setProjects(caseStudiesData);
      } catch (error) {
        console.error("Failed to load content:", error);
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  const filters = ['All', 'Product Design', 'Systems'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.category && project.category.includes(filter);
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Work
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-[0.2em] font-mono">
            The Evidence of Logic
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-8 md:mb-10 border-b border-gray-100 pb-6"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm md:text-base font-mono uppercase tracking-widest transition-all duration-300 ${filter === f ? 'text-gray-900 font-bold border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-900'
                }`}
            >
              [{f}]
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="text-orange-accent animate-spin w-10 h-10" />
          </div>
        ) : (
          filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <CaseStudyCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center font-mono">No projects found in this category.</p>
          )
        )}

        <p className="text-sm text-gray-400 italic text-center mt-16 mb-12">More case studies in production.</p>
      </div>

      {/* global-cta replacement section */}
      <section className="container mx-auto px-6 pt-24 pb-24 md:pb-32 border-t border-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto mb-10 leading-[1.1] tracking-tight">
            If your product doesn’t hold up in real use, let’s fix that.
          </h2>
          <button
            onClick={openModal}
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Let’s Talk
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default WorkPage;
