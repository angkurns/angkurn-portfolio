
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, X, Clock, Calendar, ArrowRight, Link as LinkIcon, Pin } from 'lucide-react';
import { fetchAllNotes } from '@/lib/api';
import { calculateReadingTime } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const CATEGORIES = [
  'All',
  'AI',
  'Product Design',
  'Design System',
  'UI/UX',
  'Collaboration',
  'Leadership',
  'Systems Thinking',
  'Security'
];

const TheBrainGarden = () => {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isTopicMenuOpen, setIsTopicMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchAllNotes();
        setArticles(data || []);
      } catch (error) {
        console.error("Failed to load articles:", error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryCount = (category) => {
    if (category === 'All') return articles.length;
    return articles.filter(article => article.category === category).length;
  };

  const filteredArticles = articles
    .filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        (article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.summary?.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      // Pinned notes always first (among those matching search/category)
      if (a.is_pinned && !b.is_pinned) return -1;
      if (!a.is_pinned && b.is_pinned) return 1;
      // Secondary sort: most recent first
      return new Date(b.published_date) - new Date(a.published_date);
    });

  const openModal = (article) => {
    setSelectedArticle(article);
    window.history.pushState(null, '', `/notes/${article.slug}`);
  };

  const closeModal = () => {
    setSelectedArticle(null);
    window.history.history.pushState(null, '', '/notes');
  };

  const handleShare = (e, article) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const url = `${window.location.origin}/notes/${article.slug}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        toast({
          title: "Link copied",
          duration: 2000,
        });
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    } else {
      toast({
        title: "Copy failed",
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedArticle]);

  return (
    <div className="bg-charcoal-dark min-h-screen text-warm-white font-inter">
      <Helmet>
        <title>Notes - Angkurn</title>
        <meta name="description" content="A public notebook where I refine systems, document AI workflows, and break down product thinking." />
      </Helmet>

      <div className="container mx-auto px-6 pt-24 md:pt-40 pb-24">
        {/* HERO SECTION */}
        <header className="mb-12 md:mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6 tracking-tight">
              Notes
            </h1>
            <p className="text-xl md:text-2xl text-warm-white/40 leading-relaxed font-medium">
              A public notebook where I think through systems and product logic.
            </p>
          </motion.div>
        </header>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* TOPICS SIDEBAR */}
          <aside className="w-full md:w-[240px] md:sticky md:top-32 self-start z-20">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-warm-white/20 font-bold mb-2 md:mb-8">
              Topics
            </h2>

            {/* Mobile Dropdown */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsTopicMenuOpen(!isTopicMenuOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-warm-white font-medium focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-orange-accent text-xs font-mono">[{getCategoryCount(selectedCategory)}]</span>
                  <span>{selectedCategory}</span>
                </div>
                <motion.div
                  animate={{ rotate: isTopicMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="w-4 h-4 text-warm-white/40 rotate-90" /> {/* Using Clock as a temporary technical icon placeholder or import Chevron */}
                </motion.div>
              </button>

              <AnimatePresence>
                {isTopicMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-30"
                  >
                    <div className="p-2 grid grid-cols-1 gap-1">
                      {CATEGORIES.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsTopicMenuOpen(false);
                          }}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all ${selectedCategory === category
                            ? 'bg-orange-accent text-charcoal-dark font-bold'
                            : 'text-warm-white/60 hover:bg-white/5'
                            }`}
                        >
                          <span>{category}</span>
                          <span className={`text-[10px] font-mono ${selectedCategory === category ? 'text-charcoal-dark' : 'text-warm-white/20'}`}>
                            {getCategoryCount(category).toString().padStart(2, '0')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop List */}
            <nav className="hidden md:flex flex-col gap-1">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count = getCategoryCount(category);
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group flex items-center justify-between px-3 py-2.5 rounded-[8px] overflow-hidden transition-all duration-200 text-sm ${isActive
                      ? 'bg-orange-accent/10 text-orange-accent font-semibold'
                      : 'text-warm-white/40 hover:text-warm-white hover:bg-warm-white/[0.03]'
                      }`}
                  >
                    <span className="relative z-10">{category}</span>
                    <span className={`relative z-10 text-[10px] font-bold px-1.5 py-0.5 rounded-md border transition-colors ${isActive
                      ? 'border-orange-accent/30 text-orange-accent bg-orange-accent/5'
                      : 'border-warm-white/5 text-warm-white/20 group-hover:border-warm-white/10 group-hover:text-warm-white/40'
                      }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT CONTENT GRID */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
              <div className="text-[11px] uppercase tracking-widest text-warm-white/30 font-bold">
                {articles.length} notes. Growing weekly.
              </div>

              {/* Search Feature */}
              <div className="relative w-full sm:w-[280px]">
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[42px] bg-transparent border border-white/[0.08] rounded-[10px] px-[14px] text-sm text-warm-white placeholder:text-white/35 focus:ring-2 focus:ring-orange-accent/15 focus:border-orange-accent outline-none transition-all"
                />
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-32">
                <Loader2 className="w-8 h-8 text-orange-accent/40 animate-spin" />
              </div>
            ) : (
              <>
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => openModal(article)}
                        className={`group relative flex flex-col bg-[#161616] border border-warm-white/[0.03] rounded-xl p-6 hover:border-warm-white/10 hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 ${article.is_pinned ? 'border-orange-accent/10 hover:border-orange-accent/30' : ''}`}
                      >
                        {article.is_pinned && (
                          <div className="absolute top-5 right-5 text-orange-accent group-hover:rotate-12 transition-all duration-300 opacity-40 group-hover:opacity-100">
                            <Pin size={16} fill="currentColor" strokeWidth={2.5} />
                          </div>
                        )}

                        <div className="mb-4">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-warm-white/30 font-bold group-hover:text-warm-white/50 transition-colors">
                            {article.category || 'Note'}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-warm-white mb-3 line-clamp-2 leading-snug group-hover:text-orange-accent transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-[13px] text-warm-white/40 line-clamp-2 mb-8 leading-relaxed">
                          {article.summary || article.short_description || "Click to read more about this system-thinking note."}
                        </p>

                        <div className="mt-auto pt-4 border-t border-warm-white/[0.03] flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[10px] text-warm-white/30 font-medium tracking-wide">
                            <span>{formatDate(article.published_date)}</span>
                            <span>·</span>
                            <span>{calculateReadingTime(article.content)} MIN</span>
                          </div>
                          <span className="text-[10px] font-bold text-orange-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 opacity-0 group-hover:opacity-100 uppercase tracking-wider">
                            Read more <ArrowRight size={10} />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-warm-white/20 text-sm font-medium mt-10">No notes found.</p>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
            />

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
                    {selectedArticle.category || 'Note'}
                  </span>
                  <div className="h-4 w-px bg-warm-white/10 hidden sm:block"></div>
                  <div className="text-[10px] text-warm-white/30 font-bold tracking-widest hidden sm:block">
                    {formatDate(selectedArticle.published_date)} · {calculateReadingTime(selectedArticle.content)} MIN READ
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleShare(e, selectedArticle)}
                    className="p-2 hover:bg-warm-white/5 rounded-full transition-all text-warm-white/40 hover:text-white relative z-20"
                    title="Copy Link"
                  >
                    <LinkIcon size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeModal();
                    }}
                    className="p-2 hover:bg-warm-white/5 rounded-full transition-all text-warm-white/40 hover:text-white relative z-20"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="pt-10 pb-10 px-8 md:px-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-warm-white mb-4 leading-tight tracking-tight">
                    {selectedArticle.title}
                  </h2>

                  {selectedArticle.summary && (
                    <div className="mb-6">
                      <p className="text-base md:text-lg text-warm-white/70 opacity-80 leading-[1.5] italic border-l-2 border-orange-accent/30 pl-8">
                        {selectedArticle.summary}
                      </p>
                    </div>
                  )}

                  <div
                    className="article-content !m-0 !p-0 !max-w-none 
                      [&_p]:!text-[15px] [&_p]:md:!text-[16px] [&_p]:!text-warm-white/70 [&_p]:!leading-[1.6] [&_p]:!mb-4
                      [&_h2]:!text-lg [&_h2]:md:!text-xl [&_h2]:!text-warm-white [&_h2]:!mt-7 [&_h2]:!mb-3
                      [&_blockquote]:!border-l-2 [&_blockquote]:!border-orange-accent/40 [&_blockquote]:!pl-6 [&_blockquote]:!italic [&_blockquote]:!text-warm-white/50 [&_blockquote]:!my-8 [&_blockquote]:!bg-transparent
                      [&_ul]:!text-warm-white/70 [&_ul]:!mb-4 [&_li]:!mb-0 [&_li]:!text-[15px] [&_li]:!leading-[1.6]
                      [&_a]:!text-orange-accent [&_a]:!no-underline hover:[&_a]:!underline
                    "
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 bg-[#161616] border-t border-warm-white/[0.05] flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-warm-white/20 font-bold">
                  Angga — System Notes
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TheBrainGarden;
