
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchAllBrainGardenArticles } from '@/lib/api';

const TheBrainGarden = () => {
  const [articles, setArticles] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchAllBrainGardenArticles();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Thinking Lab';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredArticles = selectedTag
    ? articles.filter(article => article.tags?.includes(selectedTag))
    : articles;

  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Helmet>
        <title>Brain Garden - Angkurn</title>
        <meta name="description" content="A public notebook where I refine systems, document AI workflows, and break down product thinking." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-8">
            Brain Garden
          </h1>
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-warm-white/70 leading-relaxed italic border-l-4 border-orange-accent/30 pl-8">
              A public notebook where I think through systems, document AI workflows, and break down product logic.
            </p>
            <p className="text-sm md:text-base text-warm-white/30 pl-9">
              Working notes on logic, systems, and collaboration.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-3 pl-9 mb-8">
            {['All', 'AI', 'Systems', 'Collaboration'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === 'All' ? null : tag)}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 ${(selectedTag === tag || (tag === 'All' && !selectedTag))
                    ? 'bg-orange-accent text-charcoal-dark border-orange-accent'
                    : 'border-warm-white/10 text-warm-white/40 hover:border-warm-white/30 hover:text-warm-white/60'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="text-sm text-warm-white/30 tracking-wide pl-9">
            {articles.length} notes so far.
          </div>
        </motion.div>
      </section>

      {/* Archive Section */}
      <section className="container mx-auto px-6 pb-24">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="text-orange-accent animate-spin w-10 h-10" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`block h-full bg-[#2a2a2a] border rounded-3xl p-10 md:p-12 hover:bg-[#2f2f2f] transition-all duration-300 ${index === 0 && !selectedTag ? 'border-orange-accent/20' : 'border-warm-white/[0.03]'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-warm-white/40">
                          {formatDate(article.published_date)} · 3 min read
                        </div>
                      </div>

                      {index === 0 && !selectedTag && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-accent/60">
                          Latest
                        </span>
                      )}
                    </div>

                    <Link to={`/brain-garden/${article.slug}`}>
                      <h2 className={`text-2xl md:text-4xl font-bold mb-4 group-hover:text-orange-accent transition-colors leading-tight ${index === 0 && !selectedTag ? 'text-white' : 'text-warm-white'}`}>
                        {article.title}
                      </h2>
                    </Link>

                    <p className="text-warm-white/60 text-lg md:text-xl mb-8 line-clamp-3 leading-relaxed">
                      {article.summary || article.short_description}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={`/brain-garden/${article.slug}`}
                        className="text-orange-accent font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Read note <span className="text-xl">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <p className="text-warm-white/60">No notes found matching this tag.</p>
            )}
          </div>
        )}
      </section>

      {/* Closing Section */}
      <section className="container mx-auto px-6 pb-32 border-t border-warm-white/5 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-warm-white mb-6">Structured thinking, publicly documented.</h2>
          <div className="space-y-6 text-warm-white/50 text-lg leading-relaxed">
            <p>
              These are not polished case studies.<br />
              They are how I think in public.
            </p>
            <p>
              If you would like to build something thoughtful, <a href="mailto:angkurns@gmail.com" className="text-orange-accent hover:underline">let’s connect</a>.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TheBrainGarden;
