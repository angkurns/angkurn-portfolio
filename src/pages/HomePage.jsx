
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { fetchFeaturedCaseStudies, fetchFeaturedNotes } from '@/lib/api';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      title: "Logic-First Architecture",
      description: "I define flows, states, and edge cases before opening Figma so engineers know exactly what to build."
    },
    {
      number: "02",
      title: "AI-Augmented Workflow",
      description: "I use AI to test ideas, find edge cases, and challenge assumptions early."
    },
    {
      number: "03",
      title: "Sync-Driven Collaboration",
      description: "I write things down clearly so engineers do not have to interpret. They implement."
    }
  ];

  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Helmet>
        <title>Angkurn - Logic-First Designer</title>
        <meta name="description" content="I design logic first, then I build the interface. Translating deep technical logic into intuitive, high-impact systems." />
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
              Angga Kurnia Aryantika — Product Designer
            </p>
            <p className="text-sm md:text-base text-neutral-400">
              Autobahn Security GmbH
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

      {/* Work Section */}
      <section id="work" className="container mx-auto px-6 py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-warm-white mb-10 md:mb-16">
            Work
          </h2>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="text-orange-accent animate-spin w-10 h-10" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/systems/${project.slug}`}>
                      <ProjectCard
                        category={project.category || "General"}
                        title={project.title}
                        description={project.short_description || "No description available."}
                        image={project.thumbnail_url}
                      />
                    </Link>
                  </motion.div>
                ))
              ) : (
                <p className="text-warm-white/60">No systems found at the moment.</p>
              )}
            </div>
          )}
        </motion.div>
      </section>

      {/* My Operating System Section */}
      <section className="container mx-auto px-6 py-12 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-tight">
              My Operating<br />System
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
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-warm-white">
              Notes
            </h2>
            <p className="text-warm-white/60 mt-2 text-base md:text-lg max-w-xl">
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
    </div>
  );
};

export default HomePage;
