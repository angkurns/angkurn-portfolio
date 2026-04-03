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
      <div className="max-w-6xl mx-auto py-24 px-6 flex flex-col gap-24">

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
                src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Angga%20Photo.webp"
                alt="Angga Kurnia Aryantika"
                className="w-48 h-48 rounded-2xl object-cover shadow-sm bg-gray-50 border border-gray-100"
              />
              <button
                className="flex items-center justify-center gap-2.5 px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors w-48 text-gray-700"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>

            {/* Right Column */}
            <div className="md:col-span-8 flex flex-col gap-6 text-left">
              <p className="text-xl font-medium text-gray-500">
                Hi, this is Angga.
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                I turn messy logic into buildable interfaces.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mt-4">
                I’m a Senior Product Designer with nearly 5 years in cybersecurity. I started out as an Art Director, focused on aesthetics, but I quickly learned that beautiful UI is useless if the underlying logic is broken. Now, I operate as a Triad Lead—collaborating directly with engineers to map edge cases, stress-test workflows, and build systems that don't fail in production.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 2: A Bit Of Context */}
        <section className="border-t border-gray-100 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-6">
              A BIT OF CONTEXT
            </h3>
            <div className="text-lg text-gray-700 leading-relaxed max-w-4xl space-y-6">
              <p>
                Design used to be mostly about execution for me. Now it’s about ownership.
              </p>
              <p>
                In 2025, I found myself stepping into product decisions, system structure, and documentation clarity. Not because of title. But because it was needed.
              </p>
              <p>
                I had to think further ahead.<br />
                Less assumptions. More logic.<br />
                Every decision needed to survive engineering review.
              </p>
              <p>
                I worked closely with our backend and frontend leads.<br />
                Refined the design system so it behaved properly in real use.<br />
                Used AI to challenge edge cases before they reached production.
              </p>
              <p className="text-gray-900 font-bold">
                Not easy. But necessary.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Experience */}
        <section className="border-t border-gray-100 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-10 tracking-tight">Experience</h2>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col gap-0 text-left">
              {/* Job 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start py-8 first:pt-0 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  <img src="" alt="logo" className="w-full h-full object-cover opacity-0" />
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
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">Lead design Triad for risk and threat modules, defining logic and edge cases before UI execution. Handling end-to-end complex workflows.</p>
                  </div>

                  <div className="mb-6 relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Design Systems Manager</h4>
                    <span className="text-sm text-gray-500 block mb-2">Sep 2023 - Dec 2024 &bull; 1 yr 4 mos</span>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">Helped build and migrate to 'Fastlane', a more structured and reusable design system, working closely with engineering leads to ensure production consistency.</p>
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
                  <img src="" alt="logo" className="w-full h-full object-cover opacity-0" />
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
                  <img src="" alt="logo" className="w-full h-full object-cover opacity-0" />
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
                  <img src="" alt="logo" className="w-full h-full object-cover opacity-0" />
                </div>
                <div className="flex-1 w-full text-left">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">PREMIER OIL NATUNA SEA B.V.</h3>
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

        {/* Section 4: Tool Stack */}
        <section className="border-t border-gray-100 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-12 tracking-tight">Tools I Use</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {[
                'Antigravity', 'Cursor', 'Gemini', 'Claude',
                'Adobe', 'Figma', 'Lovable', 'Vercel',
                'Supabase', 'Github', 'Atlassian', 'Slack',
                'Microsoft 360', 'Miro', 'Webflow', 'Framer'
              ].map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 p-4 border border-gray-100 rounded-xl bg-gray-50 shadow-sm hover:border-gray-200 transition-colors">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center border border-gray-100 shadow-sm">
                    <span className="text-gray-300 text-[10px] font-mono">{tool.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium text-center">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* SECTION 6 — CTA */}
      <section className="container mx-auto px-6 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto mb-10 leading-[1.1] tracking-tight">
            If your product feels complex, let’s simplify it.
          </h2>
          <button
            onClick={openModal}
            className="inline-block bg-orange-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Let’s Talk
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
