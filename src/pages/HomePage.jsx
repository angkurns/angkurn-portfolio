
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2, FileText, Download, X } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import { fetchFeaturedCaseStudies, fetchFeaturedNotes } from '@/lib/api';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSneakPeekOpen, setIsSneakPeekOpen] = useState(false);

  useEffect(() => {
    if (isSneakPeekOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSneakPeekOpen]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const [caseStudiesData, postsData] = await Promise.all([
          fetchFeaturedCaseStudies(),
          fetchFeaturedNotes()
        ]);
        setProjects(caseStudiesData);
        setPosts(postsData);
      } catch (error) {
        console.error("Failed to load content:", error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const operatingSystem = [
    {
      number: "01",
      title: "Logic Before Canvas",
      description: "I map out states, flows, and brutal edge cases before opening Figma. Engineers get exact logic, not guessing games."
    },
    {
      number: "02",
      title: "AI as a Sparring Partner",
      description: "I do not use AI to generate UI. I use it to break my logic, find hidden edge cases, and challenge assumptions before development starts."
    },
    {
      number: "03",
      title: "Clear Documentation",
      description: "I document flows, states, and decisions clearly so engineers can build without ambiguity. No guessing, no rework."
    }
  ];

  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Helmet>
        <title>Angkurn — Product Designer</title>
        <meta name="description" content="I build clarity inside complex products. Designing systems, flows, and scalable interfaces." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="mb-6">
            <p className="text-base md:text-lg font-medium text-white mb-1">
              Angga Kurnia Aryantika ⚉ Product Designer
            </p>
            <p className="text-sm md:text-base text-neutral-400">
              Autobahn Security | Reduce Hackability
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-extrabold text-warm-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tight">
            I design logic first,<br />
            then I build the interface.
          </h1>
          <p className="text-xl md:text-2xl text-warm-white/80 max-w-3xl leading-snug">
            I define states, flows, and edge cases before opening Figma.
          </p>

        </motion.div>
      </section>

      {/* Featured Book Section */}
      <section className="container mx-auto px-6 pt-12 md:pt-24 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto h-full"
        >
          {/* Vertical Timeline Container */}
          <div className="relative pl-6 md:pl-12 border-l border-white/10 h-full pb-12 md:pb-24">
            {/* Timeline Dot */}
            <div className="absolute -left-[6.5px] top-6 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.4)]" />

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] xl:grid-cols-[35%_65%] gap-10 lg:gap-16 items-start">
              
              {/* Image Column */}
              <div className="relative w-full flex justify-start">
                <div className="w-full max-w-[320px] rounded-r-xl overflow-hidden shadow-[15px_15px_40px_-10px_rgba(0,0,0,0.8)] border border-white/[0.05] transition-transform duration-500 hover:scale-[1.02] bg-charcoal-dark">
                  <img 
                    src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Books%20The%20lost%20designer.webp" 
                    alt="The Lost Designer Book Mockup" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="flex flex-col justify-center space-y-6 pt-2 lg:pt-6">
                <div>
                  <span className="text-white/40 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                    Sep 2026
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white leading-tight mb-4">
                    The Lost Designer
                  </h2>
                  <p className="text-warm-white/70 text-base md:text-lg leading-[1.8] max-w-xl font-medium">
                    Over ten years of design lessons and mistakes, currently in the real world of cybersecurity. A survival guide for designers tired of just 'making things look good' and ready to back their work with solid logic.
                  </p>
                  <p className="text-warm-white/40 text-sm mt-3 font-medium tracking-wide">
                    Available in ID & EN.
                  </p>
                </div>

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button 
                    onClick={() => setIsSneakPeekOpen(true)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-orange-accent hover:text-charcoal-dark border border-orange-accent hover:bg-orange-accent px-6 py-3 rounded-full font-bold text-base transition-all duration-300"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Sneak peek</span>
                  </button>
                  
                  <button 
                    disabled
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white/[0.03] border border-white/10 text-white/30 px-6 py-3 rounded-full font-bold text-base cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="container mx-auto px-6 pt-0 pb-12 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto h-full"
        >
          <div className="relative pl-6 md:pl-12 border-l border-white/10 h-full pt-12 md:pt-24">
            <div className="mb-6 md:mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6">
              Work
            </h2>
            <p className="text-warm-white/40 text-lg md:text-2xl max-w-2xl leading-relaxed">
              Selected case studies focused on system architecture, scalable UI, and cross-functional execution.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="text-orange-accent animate-spin w-10 h-10" />
            </div>
          ) : (
            <div className="space-y-6 md:space-y-10">
              {/* Flagship Case Study */}
              {projects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Link to={`/systems/${projects[0].slug}`} className="block">
                    <FeaturedProjectCard project={projects[0]} index={0} isFlagship={true} />
                  </Link>
                </motion.div>
              )}

              {/* Supporting Case Studies (2-Column Grid) */}
              {projects.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {projects.slice(1, 3).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link to={`/systems/${project.slug}`}>
                        <ProjectCard
                          title={project.title}
                          description={project.short_description}
                          image={project.thumbnail_url}
                          year={project.year}
                          role={project.role}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Remaining Archive (3-Column Grid) */}
              {projects.length > 3 && (
                <div className="space-y-10 pt-8 border-t border-white/[0.03]">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-warm-white/10">
                    Archive
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {projects.slice(3).map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link to={`/systems/${project.slug}`}>
                          <ProjectCard
                            title={project.title}
                            description={project.short_description}
                            image={project.thumbnail_url}
                            year={project.year}
                            role={project.role}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {projects.length === 0 && (
                <p className="text-warm-white/60">No systems found at the moment.</p>
              )}
            </div>
          )}
          </div>
        </motion.div>
      </section>

      {/* How I Execute Section */}
      <section className="container mx-auto px-6 py-12 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-tight">
              How I<br />Execute
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {operatingSystem.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-6 -top-6 text-8xl md:text-[10rem] font-bold text-warm-white/[0.03] select-none">
                  {item.number}
                </div>
                <div className="relative z-10">
                  <div className="flex items-baseline gap-8 mb-4">
                    <span className="text-orange-accent/80 font-bold text-2xl md:text-3xl">{item.number}</span>
                    <h3 className="text-2xl md:text-4xl font-bold text-warm-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Preview of "Notes" Section */}
      <section className="container mx-auto px-6 py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white">
              Notes
            </h2>
            <p className="text-warm-white/60 mt-4 text-lg md:text-xl max-w-2xl">
              Where I document systems, AI experiments, and design thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/notes/${post.slug}`}
                    className="block group bg-charcoal-light/30 border border-warm-white/5 p-8 rounded-3xl hover:bg-charcoal-light/50 transition-all duration-300 h-full"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-warm-white/70 mb-6 text-base line-clamp-2">
                      {post.summary || post.short_description}
                    </p>
                    <span className="text-orange-accent font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read note <span className="text-xl">→</span>
                    </span>
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="text-warm-white/60">No notes in the lab yet.</p>
            )}
          </div>

          <div className="flex justify-start">
            <Link
              to="/notes"
              className="text-warm-white/60 font-semibold hover:text-orange-accent transition-colors flex items-center gap-2"
            >
              View all notes
              <span className="text-xl">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Sneak Peek Modal */}
      <AnimatePresence>
        {isSneakPeekOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSneakPeekOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[6px] cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[720px] max-h-[90vh] bg-[#121212] border border-warm-white/[0.08] rounded-2xl shadow-3xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-[#121212]/80 backdrop-blur-xl border-b border-warm-white/[0.05]">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-accent/80 px-2 py-0.5 rounded bg-orange-accent/5 border border-orange-accent/20">
                    SNEAK PEEK | EST. 2 MIN READ
                  </span>
                </div>
                <button 
                  onClick={() => setIsSneakPeekOpen(false)}
                  className="p-2 hover:bg-warm-white/5 rounded-full transition-all text-warm-white/40 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="pt-10 pb-10 px-8 md:px-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-warm-white mb-4 leading-tight tracking-tight">
                    Stop Chasing Perfect Screens
                  </h2>

                  <div className="mb-6">
                    <p className="text-base md:text-lg text-warm-white/70 opacity-80 leading-[1.5] italic border-l-2 border-orange-accent/30 pl-8">
                      "This book is not about making pretty visuals. It is an honest field note from when design crashes into complex systems and highly critical engineers."
                    </p>
                  </div>

                  <div className="article-content !m-0 !p-0 !max-w-none 
                    [&_p]:!text-[15px] [&_p]:md:!text-[16px] [&_p]:!text-warm-white/70 [&_p]:!leading-[1.6] [&_p]:!mb-4
                    [&_h4]:!text-lg [&_h4]:md:!text-xl [&_h4]:!text-warm-white [&_h4]:!mt-7 [&_h4]:!mb-3
                    [&_blockquote]:!border-l-2 [&_blockquote]:!border-orange-accent/40 [&_blockquote]:!pl-6 [&_blockquote]:!italic [&_blockquote]:!text-warm-white/50 [&_blockquote]:!my-8 [&_blockquote]:!bg-transparent
                    [&_ul]:!text-warm-white/70 [&_ul]:!mb-4 [&_li]:!mb-0 [&_li]:!text-[15px] [&_li]:!leading-[1.6]
                    [&_a]:!text-orange-accent [&_a]:!no-underline hover:[&_a]:!underline
                  ">
                    <p>
                      We have all been there. Stressed out because our work does not look like those glossy internet posts. Exhausted because our ideals keep hitting a brick wall of business realities that refuse to compromise. Or panicking because we feel machines will soon take our jobs.
                    </p>
                    <p>
                      I wrote this book to tear down the illusions we have been swallowing whole.
                    </p>

                    <h4 className="font-bold pt-6 pb-2">
                      What You Will Find Inside
                    </h4>

                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <span className="text-orange-accent shrink-0 mt-1.5">•</span>
                        <span><strong className="text-warm-white font-bold">Stop taking orders:</strong> Stop waiting for instructions and start acting as a strategic partner.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-orange-accent shrink-0 mt-1.5">•</span>
                        <span><strong className="text-warm-white font-bold">Control AI:</strong> Kill the repetitive tasks so your brain has room to solve actual hard problems.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-orange-accent shrink-0 mt-1.5">•</span>
                        <span><strong className="text-warm-white font-bold">Build authority:</strong> Create a solid working system to earn respect instead of just relying on your job title.</span>
                      </li>
                    </ul>

                    <div className="pt-6 border-t border-white/5 mt-8">
                      <p className="font-medium text-warm-white">
                        It is time to evolve. Stop being a replaceable designer and become the person they always look for when big decisions need to be made. Are you ready to level up together?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 bg-[#161616] border-t border-warm-white/[0.05] flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-warm-white/20 font-bold">
                  Angga ⚉ System Notes
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default HomePage;
