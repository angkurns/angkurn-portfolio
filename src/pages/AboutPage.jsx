import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Layers,
  GitBranch,
  Users,
  Target,
  FileText,
  Share2,
  LineChart,
  Download
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

const AboutPage = () => {
  const { openModal } = useContactModal();

  return (
    <div className="bg-white min-h-screen text-gray-900 font-inter">
      {/* Global Wrapper */}
      <div className="max-w-6xl mx-auto py-24 px-6 flex flex-col gap-10">

        {/* Section 1: Hero */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            {/* Left Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <img
                src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Angga-Imagination.webp"
                alt="Angga Kurnia Aryantika"
                className="w-120 h-120 rounded-2xl object-cover border border-gray-100 p-1 bg-white shadow-sm"
              />

              <div className="flex flex-row items-center gap-4 mt-6 pl-4">
                <button
                  className="flex items-center justify-center gap-2.5 px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 hover:shadow-sm transition-all w-48"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
                <a href="https://www.linkedin.com/in/angkurn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://www.instagram.com/angkurn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-8 flex flex-col gap-6 text-left">
              <p className="text-xl font-medium text-gray-500">
                Hi, this is Angga.
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                I care about the parts most people skip.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mt-4">
                I focus on edge cases, messy flows, and things that don’t show up in design reviews. Most products don’t fail in the main flow, they fail in the details no one thought through.
                <br />
                <br />
                Over time, I moved from just executing UI to owning how things actually work, working closely with engineers to define logic, reduce assumptions, and make sure what we design holds up in production.
                <br />
                <i> Not easy. But necessary.</i>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Bridge Statement */}
        <div className="text-xl md:text-2xl text-gray-700 font-medium italic text-center py-16 md:py-20 mb-12 max-w-3xl mx-auto leading-relaxed">
          Most problems don’t show up in design reviews. <br /> They show up in production.
        </div>

        {/* Section 2: Tool Stack */}
        <section className="py-4 mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">My Toolkit</h2>
            <p className="text-gray-400 mt-1 mb-4 text-left">Tools help me move fast, but they don’t replace thinking.</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
              {[
                { name: 'Microsoft', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/microsoft-color.svg' },
                { name: 'Antigravity', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/antigravity-color.svg' },
                { name: 'Gemini', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/gemini-color.svg' },
                { name: 'Figma', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Figma.svg' },
                { name: 'Lovable', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/lovable-logo-icon.svg' },
                { name: 'Claude', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/claude-color.svg' },
                { name: 'Adobe', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Adobe.svg' },
                { name: 'Supabase', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/supabase-icon.svg' },
                { name: 'Apple', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Apple.svg' },
                { name: 'Cursor', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/cursor.svg' },
                { name: 'Github', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/github.svg' },
                { name: 'Notebooklm', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/notebooklm.svg' },
                { name: 'ChatGPT', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/ChatGPT.svg' },
                { name: 'Vercel', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/vercel.svg' },
                { name: 'Atlassian', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Atlassian.svg' },
                { name: 'Confluence', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Confluence.svg' },
                { name: 'Jira', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Jira.svg' },
                { name: 'Webflow', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Webflow.svg' },
              ].map((item, idx) => (
                <div key={idx} className="group relative aspect-square bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center p-2 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 transition-all duration-300 cursor-default hover:z-50">
                  {item.icon ? (
                    <img src={item.icon} alt={item.name} className="w-8 h-8 md:w-10 md:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                  ) : (
                    <span className="text-gray-300 text-[10px] font-mono">{item.name.substring(0, 2).toUpperCase()}</span>
                  )}
                  {/* Tooltip Label */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 font-medium shadow-sm">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Experience */}
        <section className="mt-24 md:mt-32">
          {/* Section 3: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-4 tracking-tight">Experience</h2>
            <p className="text-xl text-gray-600 mb-10 font-medium italic text-left">This is where the logic gets tested.</p>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col gap-0 text-left">
              {/* Job 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start py-8 first:pt-0 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Icon/Autobahn%20security.webp" alt="logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1 w-full text-left">
                  <div className="flex flex-col gap-1 mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Autobahn Security</h3>
                    <span className="text-sm text-gray-500 font-medium">Full-time &bull; 4 yrs 5 mos</span>
                    <span className="text-sm text-gray-400">Jakarta Metropolitan Area &bull; Hybrid</span>
                  </div>

                  <div className="mb-6 relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Senior Product Designer</h4>
                    <span className="text-sm text-gray-500 block mb-2">Jan 2025 - Present &bull; 1 yr 4 mos</span>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">Driving UI/UX decisions for risk modules with engineering and support. Defining logic early, maintaining the design system, and handling complex workflows end-to-end with AI as a thinking tool so engineers don't have to guess.</p>
                  </div>

                  <div className="mb-6 relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Design Systems Lead</h4>
                    <span className="text-sm text-gray-500 block mb-2">Sep 2023 - Dec 2024 &bull; 1 yr 4 mos</span>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                      Led the build of "Fastlane" end to end, aligning design and engineering through a shared token system and clear workflows. Worked directly with leadership to make sure the system actually held up in production.
                      <a href="systems/building-a-design-system-engineers-use" className="text-gray-900 font-medium hover:underline inline-flex items-center gap-1 transition-all">View case study →</a>
                    </p>
                  </div>

                  <div className="relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Senior User Interface Designer</h4>
                    <span className="text-sm text-gray-500 block mb-2">Dec 2021 - Aug 2023 &bull; 1 yr 9 mos</span>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">Focused on UI design across the product, translating complex security data requirements into clear screens and interactions.</p>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start py-8 first:pt-0 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Icon/Codelabs%20indonesia.webp" alt="logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1 w-full text-left">
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">CodeLabs Indonesia</h3>
                    <span className="text-sm text-gray-500 font-medium">Dec 2015 - Nov 2021 &bull; 6 yrs</span>
                    <span className="text-sm text-gray-400">Jakarta Metropolitan Area &bull; Hybrid</span>
                  </div>
                  <p className="text-base font-semibold text-gray-700 mb-3">Sr. UI/UX Designer</p>
                  <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                    Championed user-centric design, systems thinking, and scalable interfaces for complex enterprise products over a 6-year tenure.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-20 mb-6 text-left">Extras & Early Career</h4>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col gap-0 text-left">
              {/* Job 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start py-8 first:pt-0 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Icon/Garuda%20indonesia.webp" alt="logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1 w-full text-left">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">Garuda Indonesia (GMF AeroAsia)</h3>
                    <p className="text-sm text-gray-500 font-medium">Jun 2018 - Dec 2018</p>
                  </div>
                  <p className="text-base font-semibold text-gray-700 mb-3">Creative Director (Freelance)</p>
                  <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                    Directed physical system design and production for 3 facilities. This pre-digital experience forged my foundation in handling real-world constraints and operational flows.
                  </p>
                </div>
              </div>

              {/* Job 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start py-8 first:pt-0 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Icon/Multipolar.webp" alt="logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1 w-full text-left">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">PT Multipolar Technology Tbk </h3>
                    <p className="text-sm text-gray-500 font-medium">May 2013 - Oct 2013</p>
                  </div>
                  <p className="text-base font-semibold text-gray-700 mb-3">Graphic Designer (Internship)</p>
                  <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                    Developed visual assets and supported digital imaging processes for corporate materials.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* SECTION 6 — CTA */}
      <section className="container mx-auto px-6 pt-32 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto mb-10 leading-[1.1] tracking-tight">
            If your product doesn’t hold up in real use, let’s fix that.
          </h2>
          <button
            onClick={openModal}
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 hover:shadow-sm transition-all duration-300 transform hover:scale-[1.02]"
          >
            Let’s Talk
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
