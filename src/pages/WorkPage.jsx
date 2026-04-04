
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { fetchAllCaseStudies } from '@/lib/api';
import { useContactModal } from '@/context/ContactModalContext';

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
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Work
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl max-w-2xl leading-relaxed uppercase tracking-[0.2em] font-mono">
            The Evidence of Logic
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12 md:mb-16 border-b border-gray-100 pb-8"
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
          <div className="space-y-16 md:space-y-32">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden group min-h-[560px]"
                >
                  {/* Left Column (Visual Evidence) */}
                  <div className="relative w-full md:w-[60%] bg-[#f4f5f5] min-h-[360px] md:min-h-0">
                    <img
                      src={project.thumbnail_url}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Right Column (Text & Context) */}
                  <div className="w-full md:w-[40%] flex flex-col justify-center p-8 md:p-12 lg:p-16 shrink-0 text-left">
                    {/* Row 1: Logo & Company & Meta */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 shrink-0 rounded-full bg-[#ff4d4f] flex items-center justify-center shadow-sm">
                        <svg viewBox="0 0 24 24" fill="white" className="w-[14px] h-[14px]">
                          <path d="M12 2L4 20h3.5l1.5-3.5h6L16.5 20H20L12 2zm-1.5 10.5L12 7l1.5 4.5h-3z" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-gray-900 tracking-tight">Autobahn Security</span>
                      <span className="text-xs text-gray-300 mx-1">|</span>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                        {project.read_time || '4 MIN'} {project.year && `• ${project.year}`}
                      </span>
                    </div>

                    {/* Row 2: Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.category && project.category.split(',').map((cat, i) => (
                        <div key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-[11px] font-bold uppercase tracking-wider rounded-md border border-gray-100">
                          {cat.trim()}
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-md">
                      {project.short_description}
                    </p>

                    <div>
                      <Link
                        to={`/systems/${project.slug}`}
                        className="text-gray-900 font-medium hover:underline inline-flex items-center gap-1 text-base transition-all"
                      >
                        <span>See how it works →</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center font-mono">No projects found in this category.</p>
            )}
          </div>
        )}

        <p className="text-sm text-gray-400 italic text-center mt-32 mb-20">More case studies in production.</p>
      </div>

      {/* global-cta replacement section */}
      <section className="container mx-auto px-6 pt-32 pb-24 md:pb-32 border-t border-gray-50">
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
