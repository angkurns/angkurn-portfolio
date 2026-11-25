
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

  return (
    <div className="bg-white min-h-screen text-gray-900 font-dm-sans">

      {/* Hero Section */}
      <header className="w-full max-w-3xl mx-auto px-6 md:px-0 pt-8 md:pt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 font-medium transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to Systems</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
            Autobahn Security · {caseStudy.reading_time} · {caseStudy.year}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.1] tracking-tight">
            {caseStudy.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-6">
            {caseStudy.short_description}
          </p>

          <div className="flex items-start justify-between gap-6 py-4 border-y border-gray-100">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 flex-grow">
              {[
                ['Role', caseStudy.role],
                ['Platform', caseStudy.platform || caseStudy.environment || 'Web & Mobile'],
                ['Focus', caseStudy.focus || 'System Design'],
                ['Year', caseStudy.year],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{label}</dt>
                  <dd className="text-sm font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="relative shrink-0">
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
                className="text-gray-400 hover:text-gray-900 transition-colors p-2 rounded-lg focus-visible:ring-1 focus-visible:ring-gray-900/50"
                aria-label="Copy case study link"
                title="Copy link"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Independent Content HTML Area */}
      <section className="w-full max-w-3xl mx-auto pt-8 md:pt-10 pb-12 px-6 md:px-0">
        {caseStudy?.content_html ? (
          <>
            <div className="relative">
              <div
                className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-gray-900 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:max-w-full prose-img:h-auto prose-p:text-gray-600 prose-p:leading-relaxed w-full"
                dangerouslySetInnerHTML={{ __html: caseStudy.content_html }}
              />
              {/* Fade Effect */}
              <div className="absolute bottom-[-10px] left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
            </div>

            {/* NDA Request Block */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-10 text-center max-w-2xl mx-auto mt-[-40px] relative z-10 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Detailed Logic Restricted</h3>
              <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                Due to NDA restrictions, the full technical documentation (PDFs, System Architectures, and Figma logic) is only available upon request.
              </p>
              <a
                href="mailto:angkurns@gmail.com?subject=Requesting%20Access%20to%20Case%20Study"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-gray-800 hover:shadow-sm transition-all"
              >
                <span>Request Full Access</span>
                <span className="text-base">🔒</span>
              </a>
            </div>
          </>
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
