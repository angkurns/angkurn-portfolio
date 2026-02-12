
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2, Link as LinkIcon } from 'lucide-react';
import { fetchCaseStudyBySlug } from '@/lib/api';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchCaseStudyBySlug(slug);
        if (!data) {
          setError("Case study not found");
        } else {
          setCaseStudy(data);
        }
      } catch (err) {
        setError("Failed to load case study");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-charcoal-dark min-h-screen flex items-center justify-center">
        <Loader2 className="text-orange-accent animate-spin w-12 h-12" />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="bg-charcoal-dark min-h-screen flex flex-col items-center justify-center text-warm-white">
        <h2 className="text-2xl font-bold mb-4">System Not Found</h2>
        <p className="text-warm-white/60 mb-8">{error || "The logic for this system seems to be missing."}</p>
        <Link to="/" className="text-orange-accent hover:text-orange-accent/80 flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-charcoal-dark min-h-screen text-warm-white font-dm-sans">
      <Helmet>
        <title>{caseStudy.title} — Angkurn</title>
        <meta name="description" content={caseStudy.short_description} />
      </Helmet>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-12 md:py-24 max-w-[1100px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-warm-white/40 hover:text-orange-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-sm uppercase tracking-widest">Back to Systems</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.category?.split(',').map((tag, i) => (
              <span key={i} className="bg-orange-accent/10 border border-orange-accent/20 text-orange-accent px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                {tag.trim()}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            {caseStudy.title}
          </h1>

          <p className="text-xl md:text-2xl text-warm-white/60 max-w-2xl leading-relaxed mb-12">
            {caseStudy.short_description}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-y border-warm-white/5 gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-2">Role</span>
                <span className="text-base font-medium">{caseStudy.role}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-2">Platform</span>
                <span className="text-base font-medium">{caseStudy.platform || caseStudy.environment || "Web & Mobile"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-2">Focus</span>
                <span className="text-base font-medium">{caseStudy.focus || "System Design"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-warm-white/30 mb-2">Year</span>
                <span className="text-base font-medium">{caseStudy.year}</span>
              </div>
            </div>

            <div className="relative self-end md:self-auto">
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-neutral-800 border border-neutral-700 rounded-md text-xs text-neutral-200 whitespace-nowrap pointer-events-none"
                  >
                    Link copied
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleCopy}
                className="text-neutral-500 hover:text-white transition-all duration-300 p-2 rounded-md focus-visible:ring-1 focus-visible:ring-orange-accent/50 hover:scale-105"
                aria-label="Copy case study link"
                title="Copy link"
              >
                <LinkIcon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content Area */}
      {caseStudy.sections && caseStudy.sections.length > 0 && (
        <main className="container mx-auto px-6 pb-32 max-w-[1100px]">
          <div className="md:grid md:grid-cols-[220px_1fr] md:gap-16 items-start">
            {/* Left Column: Sticky Navigation */}
            <aside className="hidden md:block sticky top-32 h-fit">
              <nav className="space-y-3">
                {caseStudy.sections.map((section, index) => {
                  const formattedNumber = String(index + 1).padStart(2, '0');
                  return (
                    <a
                      key={section.id}
                      href={`#section-${section.Order}`}
                      className="block text-sm text-neutral-500 hover:text-orange-400 transition-colors"
                    >
                      {formattedNumber} — {section.Title}
                    </a>
                  );
                })}
              </nav>
            </aside>

            {/* Right Column: Case Study Sections */}
            <div className="max-w-[720px] space-y-24">
              {caseStudy.sections.map((section, index) => {
                const formattedNumber = String(index + 1).padStart(2, '0');
                return (
                  <section
                    key={section.id}
                    id={`section-${section.Order}`}
                    className="space-y-4 scroll-mt-32"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm text-orange-400 font-mono">
                        {formattedNumber} —
                      </span>
                      <h2 className="text-2xl font-semibold text-white">
                        {section.Title}
                      </h2>
                    </div>

                    <div
                      className="text-zinc-400 leading-relaxed space-y-6"
                      dangerouslySetInnerHTML={{ __html: section.Description }}
                    />
                  </section>
                );
              })}
            </div>
          </div>
        </main>
      )}

      {/* Final Closing */}
      <footer className="container mx-auto px-6 py-24 border-t border-warm-white/5 text-center">
        <Link
          to="/"
          className="inline-block bg-orange-accent text-charcoal-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-accent/80 transition-all duration-300 transform hover:scale-105"
        >
          View More Systems
        </Link>
      </footer>
    </div>
  );
};

export default CaseStudyDetail;
