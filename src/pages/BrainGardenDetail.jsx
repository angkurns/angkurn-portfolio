
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { fetchBrainGardenBySlug } from '@/lib/api';

const BrainGardenDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchBrainGardenBySlug(slug);
        if (!data) {
          setError("Article not found");
        } else {
          setArticle(data);
        }
      } catch (err) {
        setError("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  const calculateReadingTime = (htmlContent) => {
    if (!htmlContent) return 0;
    const text = htmlContent.replace(/<[^>]*>/g, '');
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s+/).length;
    return Math.ceil(noOfWords / wordsPerMinute);
  };

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
      <div className="bg-charcoal-dark min-h-screen flex flex-col items-center justify-center text-warm-white">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <p className="text-warm-white/60 mb-8">{error || "This thought seems to have withered."}</p>
        <Link
          to="/the-brain-garden"
          className="text-orange-accent hover:text-orange-accent/80 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Brain Garden
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Helmet>
        <title>{article.title} - The Brain Garden</title>
        <meta name="description" content={article.summary || article.short_description} />
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="max-w-[760px] mx-auto pt-8 md:pt-16 px-6">
          <Link
            to="/the-brain-garden"
            className="inline-flex items-center gap-2 text-warm-white/40 hover:text-orange-accent transition-colors mb-6 md:mb-10"
          >
            <ArrowLeft size={16} />
            <span className="text-sm tracking-wide">Back to Garden</span>
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-32"
        >
          <header className="article-header max-w-[760px] mx-auto px-6">
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-warm-white/30 font-bold mb-4">
              {article.note_type || 'SYSTEM NOTE'}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-warm-white leading-tight mb-4 md:mb-6">
              {article.title}
            </h1>

            <p className="article-subtitle !text-lg md:!text-2xl !mb-8 md:!mb-10">
              {article.summary || article.short_description}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-warm-white/30 border-t border-warm-white/5 pt-6 md:pt-8">
              <span>{formatDate(article.published_date)}</span>
              <span>·</span>
              <span>{calculateReadingTime(article.content)} min read</span>
              {article.tags && article.tags.length > 0 && (
                <>
                  <span>·</span>
                  <div className="flex gap-3">
                    {article.tags.map(tag => (
                      <span key={tag} className="hover:text-orange-accent transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Optional System Breakdown Block */}
          {article.system_breakdown && (
            <div className="max-w-[760px] mx-auto px-6 mb-16">
              <div className="bg-white/[0.02] border border-warm-white/5 rounded-2xl p-6 md:p-8">
                <span className="block text-[10px] uppercase tracking-widest text-warm-white/20 mb-4">System Flow Overview</span>
                <div className="font-mono text-sm md:text-base text-orange-accent/80 leading-relaxed">
                  {article.system_breakdown}
                </div>
              </div>
            </div>
          )}

          <div className="article-content">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Why This Matters Section */}
            {article.why_matters && article.why_matters.length > 0 && (
              <div className="mt-20 pt-12 border-t border-warm-white/5">
                <h2 className="!mt-0 !mb-8">Why This Matters</h2>
                <ul className="space-y-4">
                  {article.why_matters.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-orange-accent font-bold">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="max-w-[760px] mx-auto px-6 mt-20">
            <div className="h-px w-full bg-warm-white/5"></div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BrainGardenDetail;
