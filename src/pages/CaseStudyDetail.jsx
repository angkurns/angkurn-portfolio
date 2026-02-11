
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { fetchCaseStudyBySlug } from '@/lib/api';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <Link
          to="/"
          className="text-orange-accent hover:text-orange-accent/80 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Helmet>
        <title>{caseStudy.title} - Angkurn</title>
        <meta name="description" content={`Case Study: ${caseStudy.title}`} />
      </Helmet>

      <div className="container mx-auto px-6 py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-warm-white/60 hover:text-orange-accent transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="max-w-4xl">
            <span className="inline-block bg-orange-accent/20 text-orange-accent px-4 py-1 rounded-full text-sm font-medium mb-6">
              {caseStudy.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-warm-white mb-8 leading-tight">
              {caseStudy.title}
            </h1>
          </div>

          {/* Hero Image / Thumbnail Placeholder */}
          <div className="w-full h-64 md:h-96 bg-charcoal-light rounded-3xl mb-16 overflow-hidden flex items-center justify-center border border-warm-white/5">
            {caseStudy.thumbnail_url ? (
              <img
                src={caseStudy.thumbnail_url}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-warm-white/20 text-6xl md:text-8xl font-bold">
                {caseStudy.title.charAt(0)}
              </div>
            )}
          </div>

          {/* Executive Summary */}
          {caseStudy.summary && (
            <section className="max-w-3xl mx-auto mb-16 px-6 py-8 bg-warm-white/5 border-l-4 border-orange-accent rounded-r-2xl">
              <p className="text-xl md:text-2xl text-warm-white leading-relaxed font-medium italic">
                {caseStudy.summary}
              </p>
            </section>
          )}

          {/* Summary Block */}
          <div className="max-w-3xl mx-auto mb-16 border-b border-warm-white/10 pb-10">
            <div className="flex flex-wrap justify-between gap-y-8 gap-x-4">
              <div className="min-w-[120px]">
                <span className="block text-warm-white/40 uppercase tracking-widest text-[10px] md:text-xs mb-3">Role</span>
                <span className="text-base md:text-lg font-medium text-warm-white">{caseStudy.role}</span>
              </div>
              <div className="min-w-[120px]">
                <span className="block text-warm-white/40 uppercase tracking-widest text-[10px] md:text-xs mb-3">Focus</span>
                <span className="text-base md:text-lg font-medium text-warm-white">{caseStudy.focus}</span>
              </div>
              <div className="min-w-[120px]">
                <span className="block text-warm-white/40 uppercase tracking-widest text-[10px] md:text-xs mb-3">Environment</span>
                <span className="text-base md:text-lg font-medium text-warm-white">{caseStudy.environment}</span>
              </div>
              <div className="min-w-[120px]">
                <span className="block text-warm-white/40 uppercase tracking-widest text-[10px] md:text-xs mb-3">Year</span>
                <span className="text-base md:text-lg font-medium text-warm-white">{caseStudy.year}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:text-warm-white prose-p:text-warm-white/80 prose-a:text-orange-accent prose-strong:text-orange-accent">
            <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
