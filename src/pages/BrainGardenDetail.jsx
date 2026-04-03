
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2, Link as LinkIcon, Share2 } from 'lucide-react';
import { fetchNoteBySlug } from '@/lib/api';
import { calculateReadingTime } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const BrainGardenDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      duration: 2000,
    });
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
    if (!dateString) return 'Recent';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <Loader2 className="text-orange-accent animate-spin w-12 h-12" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-900 p-6">
        <div className="text-xl font-medium mb-4">{error || "Note not found"}</div>
        <p className="text-gray-500 mb-8 max-w-sm text-center">The logic for this thought seems to be missing or the link is broken.</p>
        <Link
          to="/notes"
          className="text-orange-accent hover:text-orange-accent/80 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-gray-900 font-inter">

      {/* Header Container */}
      <header className="container mx-auto px-6 pt-32 pb-12 max-w-3xl">
        <div className="mb-6">
          <Link
            to="/notes"
            className="text-[12px] text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest font-bold"
          >
            ← Notes
          </Link>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
              <span className="text-orange-accent/80">{article.tags?.[0] || 'Note'}</span>
              <span className="opacity-20">/</span>
              <span>{formatDate(article.published_date)}</span>
              <span className="opacity-20">/</span>
              <span>{calculateReadingTime(article.content)} MIN READ</span>
            </div>

            <button
              onClick={handleShare}
              className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-gray-900"
              title="Copy Link"
            >
              <LinkIcon size={18} />
            </button>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {article.title}
          </h1>

          {article.summary && (
            <div className="mb-2">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium italic border-l-2 border-orange-accent/30 pl-8">
                {article.summary}
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 max-w-3xl">
        <article
          className="article-content !m-0 !p-0 !max-w-none 
            [&_p]:!text-[15px] [&_p]:md:!text-[16px] [&_p]:!text-gray-700 [&_p]:!leading-[1.65] [&_p]:!mb-5
            [&_h2]:!text-lg [&_h2]:md:!text-xl [&_h2]:!text-gray-900 [&_h2]:!mt-10 [&_h2]:!mb-4
            [&_blockquote]:!border-l-2 [&_blockquote]:!border-orange-accent/40 [&_blockquote]:!pl-6 [&_blockquote]:!italic [&_blockquote]:!text-gray-500 [&_blockquote]:!my-8 [&_blockquote]:!bg-transparent
            [&_ul]:!text-gray-700 [&_li]:!mb-3 [&_li]:!text-[15px]
            [&_a]:!text-orange-accent [&_a]:!no-underline hover:[&_a]:!underline
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-[12px] text-gray-400 tracking-wider">
            Angga ⚉ System Notes
          </p>
        </footer>
      </main>
    </div>
  );
};

export default BrainGardenDetail;
