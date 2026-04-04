
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <div className="bg-white min-h-screen flex items-center justify-center">
        <Loader2 className="text-gray-400 animate-spin w-12 h-12" />
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center text-gray-900">
        <h2 className="text-2xl font-bold mb-4">System Not Found</h2>
        <p className="text-gray-500 mb-8">{error || "The logic for this system seems to be missing."}</p>
        <Link to="/" className="text-gray-900 font-medium hover:underline flex items-center gap-1 transition-all">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    );
  }

  console.log("Fetched Case Study Data:", caseStudy);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-dm-sans">

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-12 md:py-24 max-w-[1100px]">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-gray-900 font-medium hover:underline transition-all mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Systems</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {caseStudy.category?.split(',').map((tag, i) => (
              <span key={i} className="bg-gray-50 border border-gray-100 text-gray-500 px-3 py-1 rounded-lg text-[10px] uppercase tracking-widest font-bold">
                {tag.trim()}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            {caseStudy.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12">
            {caseStudy.short_description}
          </p>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-y border-gray-100 gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Role</span>
                <span className="text-base font-medium">{caseStudy.role}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Platform</span>
                <span className="text-base font-medium">{caseStudy.platform || caseStudy.environment || "Web & Mobile"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Focus</span>
                <span className="text-base font-medium">{caseStudy.focus || "System Design"}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Year</span>
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
                className="text-gray-400 hover:text-gray-900 transition-all duration-300 p-2 rounded-lg focus-visible:ring-1 focus-visible:ring-gray-900/50 hover:scale-105"
                aria-label="Copy case study link"
                title="Copy link"
              >
                <LinkIcon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Independent Content HTML Area */}
      <section className="w-full max-w-3xl mx-auto pt-12 md:pt-20 pb-12 px-4 md:px-0">
        {caseStudy?.content_html ? (
          <div
            className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-gray-900 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:max-w-full prose-img:h-auto prose-p:text-gray-600 prose-p:leading-relaxed w-full"
            dangerouslySetInnerHTML={{ __html: caseStudy.content_html }}
          />
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 font-medium text-lg">Case study in progress. Coming soon.</p>
          </div>
        )}
      </section>



      {/* Final Closing */}
      <footer className="container mx-auto px-6 py-24 border-t border-gray-100 text-center">
        <Link
          to="/"
          className="inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          View More Systems
        </Link>
      </footer>
    </div>
  );
};

export default CaseStudyDetail;
