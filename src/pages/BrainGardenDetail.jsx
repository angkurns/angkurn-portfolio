
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2, Link as LinkIcon } from 'lucide-react';
import { fetchNoteBySlug } from '@/lib/api';
import { calculateReadingTime } from '@/lib/utils';

const BrainGardenDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
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
      if (!slug) return;
      try {
        setLoading(true);
        const data = await fetchNoteBySlug(slug);
        if (!data) {
          setError("Note not found");
        } else {
          setArticle(data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load note");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-charcoal-dark min-h-screen flex items-center justify-center">
        <Loader2 className="text-orange-accent animate-spin w-12 h-12" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="bg-charcoal-dark min-h-screen flex flex-col items-center justify-center text-warm-white p-6">
        <div className="text-xl font-medium mb-4">{error || "Note not found"}</div>
        <p className="text-neutral-400 mb-8 max-w-sm text-center">The logic for this thought seems to be missing or the link is broken.</p>
        <Link
          to="/notes"
          className="text-orange-accent hover:text-orange-accent/80 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Notes Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-charcoal-dark min-h-screen text-warm-white font-dm-sans">
      <Helmet>
        <title>{article.title} — Notes</title>
        <meta name="description" content={article.summary || article.short_description} />
      </Helmet>

      <main className="container mx-auto px-6 py-12 md:py-20 max-w-4xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/notes"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Notes
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-neutral-400 flex items-center gap-2">
              <span>{formatDate(article.published_date)}</span>
              <span>·</span>
              <span>{calculateReadingTime(article.content)} min read</span>
              <span>·</span>
              <span className="uppercase tracking-widest text-[10px] font-bold text-orange-accent/60">
                {article.note_type || 'System Note'}
              </span>
            </div>

            <div className="relative">
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-neutral-800 border border-neutral-700 rounded text-[10px] text-white whitespace-nowrap pointer-events-none"
                  >
                    Link copied
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleCopy}
                className="text-neutral-500 hover:text-white transition-colors p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-accent/50"
                aria-label="Copy link"
                title="Copy note link"
              >
                <LinkIcon size={16} />
              </button>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {article.title}
          </h1>

          {article.summary && (
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
              {article.summary}
            </p>
          )}
        </header>

        {/* Note Container */}
        <article className="bg-neutral-900/40 border border-neutral-800 border-l-2 border-l-orange-500/40 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-6 md:p-10">
            {/* Main Content */}
            <div
              className="prose prose-neutral prose-invert max-w-none 
                prose-p:text-base prose-p:leading-relaxed prose-p:text-neutral-300 prose-p:mb-6
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-blockquote:border-l-2 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-300 prose-blockquote:my-8 prose-blockquote:bg-transparent
                prose-ul:text-neutral-300 prose-li:mb-2
                prose-a:text-orange-accent prose-a:no-underline hover:prose-a:underline
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Why This Matters Section (Optional) */}
            {article.why_matters && article.why_matters.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-800">
                <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-[10px] opacity-40">Context & Logic</h2>
                <ul className="space-y-4">
                  {article.why_matters.map((point, i) => (
                    <li key={i} className="flex gap-4 text-base text-neutral-300">
                      <span className="text-orange-500/60 font-mono">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        <footer className="mt-24 text-xs text-neutral-500">
          <div>Refining systems since 2024.</div>
        </footer>
      </main>
    </div>
  );
};

export default BrainGardenDetail;
