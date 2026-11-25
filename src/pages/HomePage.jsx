
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2, FileText, Download, X, ArrowUpRight } from 'lucide-react';
import { fetchFeaturedCaseStudies, fetchFeaturedNotes } from '@/lib/api';
import CaseStudyCard from '@/components/CaseStudyCard';

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSneakPeekOpen, setIsSneakPeekOpen] = useState(false);

  useEffect(() => {
    if (isSneakPeekOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSneakPeekOpen]);

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

  // Keep this short and update it every month. Two work items max.
  const nowItems = [
    {
      label: "Now",
      active: true,
      title: "Theming for our design system",
      description: "Starting with dark mode, then custom colours so each team can match their own brand."
    },
    {
      label: "Next",
      active: false,
      title: "Advanced table view",
      description: "Big tables that are easier to scan, filter and actually work in."
    }
  ];

  const sideProject = {
    label: "Now",
    title: "Viral Group",
    url: "https://www.viralgroup.id/viralgroup/",
    description: "A local media network I run with my wife, helping small local businesses grow.",
    stats: [
      { value: "5M+", label: "viewers" },
      { value: "700+", label: "videos made" },
      { value: "300+", label: "local businesses helped" },
      { value: "20+", label: "crew" }
    ],
    areas: "Pamulang · South Tangerang · Bintaro · Sawangan · Sentul and more"
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-28 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Column (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 text-left"
          >
            <h1 className="tracking-tight whitespace-nowrap md:whitespace-normal">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-[1.1]">
                My focus is <span className="italic">simple.</span>
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic text-gray-900 block mt-2 leading-[1.1]">
                Design with logic.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 md:mt-8 max-w-2xl leading-relaxed">
              <strong className="font-bold text-gray-900">Product Designer</strong> for over 10 years, the last 5+ at <strong className="font-bold text-gray-900">Autobahn Security</strong>, where I'm the only designer on the team. I design it, I build the <strong className="font-bold text-gray-900">frontend</strong>, and I look after the <strong className="font-bold text-gray-900">design system</strong> it runs on.
            </p>
            <p className="text-base md:text-lg text-gray-500 mt-4 max-w-2xl leading-relaxed">
              Still a designer. I just got tired of writing tickets for things I could fix myself.
            </p>
          </motion.div>

          {/* Image Column (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center md:justify-end"
          >
            <img
              src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Angga%20Photo.webp"
              alt="Angga Kurnia Aryantika"
              className="w-full max-w-md rounded-2xl object-cover aspect-square border border-gray-100 shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="container mx-auto px-6 pt-12 pb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1 */}
          <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col justify-start group hover:border-orange-accent/50 transition-colors">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-snug">1 to 4 days</h3>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">
              For a one page prototype, team review included. It used to take me two weeks. 7 of my last 8 got signed off.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col justify-start group hover:border-orange-accent/50 transition-colors">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-snug">216 pull requests</h3>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">
              In one semester. Half on the design system, half on the product. Not bad for someone who said "I don't know code" in June.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col justify-start group hover:border-orange-accent/50 transition-colors">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-snug">43 apps migrated</h3>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">
              I wrote the plan and moved every app to our new design system. Pages got about 57% lighter. Now I'm adding theming.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Now Section */}
      <section className="container mx-auto px-6 pb-12 md:pb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-100 pt-10"
        >
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold">What I'm on</h2>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Updated Nov 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* At work */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-5">At Autobahn</h3>
              <div className="flex flex-col gap-6">
                {nowItems.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="relative flex h-2.5 w-2.5 mt-2 shrink-0">
                      {item.active && (
                        <span className="absolute inline-flex h-full w-full rounded-full bg-orange-accent opacity-60 animate-ping" />
                      )}
                      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${item.active ? 'bg-orange-accent' : 'bg-gray-300'}`} />
                    </span>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-400">{item.label}</span>
                      <h4 className="text-xl font-bold text-gray-900 tracking-tight mt-1">{item.title}</h4>
                      <p className="text-base text-gray-600 mt-1 leading-relaxed max-w-md">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* On the side */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-5">On the side</h3>
              <a
                href={sideProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4"
              >
                <span className="relative flex h-2.5 w-2.5 mt-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-orange-accent opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-accent" />
                </span>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-gray-400">{sideProject.label}</span>
                  <h4 className="text-xl font-bold text-gray-900 tracking-tight mt-1 inline-flex items-center gap-1.5 group-hover:underline">
                    {sideProject.title}
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </h4>
                  <p className="text-base text-gray-600 mt-1 leading-relaxed max-w-md">{sideProject.description}</p>
                  <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 mt-4">
                    {sideProject.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt className="text-lg font-bold text-gray-900 leading-none">{stat.value}</dt>
                        <dd className="text-xs text-gray-500 mt-1 leading-snug">{stat.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-sm text-gray-500 mt-4">{sideProject.areas}</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="container mx-auto px-6 pt-0 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto h-full"
        >
          <div className="relative h-full pt-8 md:pt-12">
            <div className="mb-8 md:mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Work
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-[0.2em] font-mono">
                The Evidence of Logic
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="text-orange-accent animate-spin w-10 h-10" />
              </div>
            ) : (
              projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <CaseStudyCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No systems found at the moment.</p>
              )
            )}
          </div>
        </motion.div>
      </section>


      {/* Editorial Vertical List */}
      <section className="max-w-5xl mx-auto py-32 px-6">
        <div className="flex flex-col gap-16 md:gap-24">

          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
          >
            <div className="md:col-span-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-3">How I Think</h3>
            </div>
            <div className="md:col-span-8">
              <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Done means it's in production.</h4>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">A nice frame in Figma isn't done. A handoff isn't done either. It's done when real users are using it. Until then, my weekly update says in progress.</p>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
          >
            <div className="md:col-span-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-3">How I Use AI</h3>
            </div>
            <div className="md:col-span-8">
              <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Use it to find mistakes.</h4>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">Not to draw screens. I use it to poke holes in my logic and catch what I missed. And when it just keeps saying yes, I tell it to think twice.</p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
          >
            <div className="md:col-span-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-3">What Security Taught Me</h3>
            </div>
            <div className="md:col-span-8">
              <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Zero isn't empty.</h4>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">Someone told me early on: in this industry, zero is not an empty state. Zero is a win. In Figma I would have designed it as nothing. Now I design it as good news.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Book Section */}
      <section id="retrospective" className="container mx-auto px-6 py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative pl-6 md:pl-12 border-l border-gray-100">
            <div className="mb-16 md:mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                The Book
              </h2>
              <p className="text-orange-accent font-mono text-sm tracking-widest uppercase opacity-80">
                A Survival Guide
              </p>
            </div>

            <div className="space-y-24 md:space-y-40">
              {/* Item 0: Defensive Designer Book */}
              <div className="relative">
                <div className="absolute -left-[30.5px] md:-left-[54.5px] top-2 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.2)]" />
                <div className="space-y-8">
                  <div>
                    <span className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                      Mid 2027
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-4">
                      {/* Image Column */}
                      <div className="relative w-full flex justify-start">
                        <div className="w-full max-w-[420px] rounded-r-xl overflow-hidden shadow-[20px_20px_50px_-10px_rgba(0,0,0,0.05)] border border-gray-100 transition-transform duration-500 hover:scale-[1.02] bg-gray-50">
                          <img
                            src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Defensive%20designer%20cover.webp"
                            alt="Defensive Designer Book Mockup"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Column */}
                      <div className="flex flex-col justify-start space-y-6 pt-2 lg:pt-0">
                        <div>
                          <span className="text-orange-accent font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                            DEFENSIVE DESIGNER: A SURVIVAL GUIDE
                          </span>
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 mt-2">
                            For designers tired of just making things look good.
                          </h2>
                          <p className="text-gray-600 text-base md:text-lg leading-[1.8] max-w-xl font-medium">
                            Real lessons and real mistakes from designing for cyber security. Written to help designers think in logic, not just visuals.
                          </p>
                          <p className="text-gray-400 text-[10px] font-bold mt-4 uppercase tracking-widest">
                            Available in ID & EN.
                          </p>
                        </div>

                        {/* Action Row */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                          <button
                            onClick={() => setIsSneakPeekOpen(true)}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-gray-900 text-white border border-transparent rounded-lg px-8 py-4 font-medium text-base hover:bg-gray-800 hover:shadow-sm transition-all duration-300"
                          >
                            <FileText className="w-4 h-4" />
                            <span>Sneak peek</span>
                          </button>

                          <button
                            disabled
                            className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-white text-gray-400 border border-gray-200 rounded-lg px-8 py-4 font-medium text-base cursor-not-allowed"
                          >
                            <Download className="w-4 h-4" />
                            <span>Coming mid 2027</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Preview of "Notes" Section */}
      <section className="container mx-auto px-6 py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Notes
            </h2>
            <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl">
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
                    className="block group bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:bg-gray-100 transition-all duration-300 h-full"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-6 text-base line-clamp-2">
                      {post.summary || post.short_description}
                    </p>
                    <span className="text-gray-900 font-medium group-hover:underline inline-flex items-center gap-1 transition-all">
                      Read note →
                    </span>
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-600">No notes in the lab yet.</p>
            )}
          </div>

          <div className="flex justify-start">
            <Link
              to="/notes"
              className="text-gray-900 font-medium hover:underline flex items-center gap-1 transition-all"
            >
              View all notes →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Sneak Peek Modal */}
      <AnimatePresence>
        {isSneakPeekOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSneakPeekOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[6px] cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[720px] max-h-[90vh] bg-white border border-gray-200 rounded-2xl shadow-3xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-accent/80 px-2 py-0.5 rounded bg-orange-accent/5 border border-orange-accent/20">
                    SNEAK PEEK | EST. 2 MIN READ
                  </span>
                </div>
                <button
                  onClick={() => setIsSneakPeekOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-500 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="pt-10 pb-10 px-8 md:px-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                    Stop Chasing Perfect Screens
                  </h2>

                  <div className="mb-6">
                    <p className="text-base md:text-lg text-gray-700 opacity-80 leading-[1.5] italic border-l-2 border-orange-accent/30 pl-8">
                      "This book is not about making pretty visuals. It is an honest field note from when design crashes into complex systems and highly critical engineers."
                    </p>
                  </div>

                  <div className="article-content !m-0 !p-0 !max-w-none 
                    [&_p]:!text-[15px] [&_p]:md:!text-[16px] [&_p]:!text-gray-700 [&_p]:!leading-[1.6] [&_p]:!mb-4
                    [&_h4]:!text-lg [&_h4]:md:!text-xl [&_h4]:!text-gray-900 [&_h4]:!mt-7 [&_h4]:!mb-3
                    [&_blockquote]:!border-l-2 [&_blockquote]:!border-orange-accent/40 [&_blockquote]:!pl-6 [&_blockquote]:!italic [&_blockquote]:!text-gray-900/50 [&_blockquote]:!my-8 [&_blockquote]:!bg-transparent
                    [&_ul]:!text-gray-700 [&_ul]:!mb-4 [&_li]:!mb-0 [&_li]:!text-[15px] [&_li]:!leading-[1.6]
                    [&_a]:!text-orange-accent [&_a]:!no-underline hover:[&_a]:!underline
                  ">
                    <p>
                      We have all been there. Stressed out because our work does not look like those glossy internet posts. Exhausted because our ideals keep hitting a brick wall of business realities that refuse to compromise. Or panicking because we feel machines will soon take our jobs.
                    </p>
                    <p>
                      I wrote this book to tear down the illusions we have been swallowing whole.
                    </p>

                    <h4 className="font-bold pt-6 pb-2">
                      What You Will Find Inside
                    </h4>

                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <span className="text-orange-accent shrink-0 mt-1.5">•</span>
                        <span><strong className="text-gray-900 font-bold">Stop taking orders:</strong> Stop waiting for instructions and start acting as a strategic partner.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-orange-accent shrink-0 mt-1.5">•</span>
                        <span><strong className="text-gray-900 font-bold">Control AI:</strong> Kill the repetitive tasks so your brain has room to solve actual hard problems.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-orange-accent shrink-0 mt-1.5">•</span>
                        <span><strong className="text-gray-900 font-bold">Build authority:</strong> Create a solid working system to earn respect instead of just relying on your job title.</span>
                      </li>
                    </ul>

                    <div className="pt-6 border-t border-white/5 mt-8">
                      <p className="font-medium text-gray-900">
                        It is time to evolve. Stop being a replaceable designer and become the person they always look for when big decisions need to be made. Are you ready to level up together?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-gray-900/20 font-bold">
                  Angga ⚉ System Notes
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default HomePage;
