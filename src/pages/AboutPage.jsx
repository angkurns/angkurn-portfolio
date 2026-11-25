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
import { Link } from 'react-router-dom';
import { useContactModal } from '@/context/ContactModalContext';

// Durations are worked out from the dates, so they never go stale.
// Counted the LinkedIn way: start and end month both included.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatMonth = ([year, month]) => `${MONTHS[month - 1]} ${year}`;

const duration = (start, end) => {
  const now = new Date();
  const [endYear, endMonth] = end || [now.getFullYear(), now.getMonth() + 1];
  const total = (endYear - start[0]) * 12 + (endMonth - start[1]) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ');
};

const period = (start, end) =>
  `${formatMonth(start)} to ${end ? formatMonth(end) : 'Present'} • ${duration(start, end)}`;

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
                src="https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Home/Ang%20-%20Sunlight%20and%20serenity%20in%20the%20city.webp"
                alt="Angga Kurnia Aryantika"
                className="w-160 h-160 rounded-2xl object-cover border border-gray-100 p-1 bg-white shadow-sm"
              />

              <div className="flex flex-row items-center gap-4 mt-6 pl-4">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 hover:shadow-sm transition-all w-48"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a href="https://www.linkedin.com/in/angkurn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://www.instagram.com/angkurn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-8 flex flex-col gap-6 text-left">
              <p className="text-xl font-medium text-gray-500">
                Hi, this is Angga.
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                I don’t stop at the handoff.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mt-4">
                For most of my career I designed screens, handed them over, and waited. If something looked wrong in production, all I could do was <b>write a ticket</b>.
                <br />
                <br />
                This year I changed that. I learned the <b>frontend</b>, took over our <b>design system in code</b>, and now I <b>ship a lot of what I design myself</b>. I still work closely with engineers. I just meet them halfway now.
                <br />
                <br />
                <i>Still learning. Right now that means getting better at edge cases.</i>
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
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {[
                { name: 'Figma', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Figma.svg' },
                { name: 'Claude', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/claude-color.svg' },
                { name: 'Cursor', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/cursor.svg' },
                { name: 'Github', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/github.svg' },
                { name: 'Jira', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Jira.svg' },
                { name: 'Confluence', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/Confluence.svg' },
                { name: 'Supabase', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/supabase-icon.svg' },
                { name: 'Vercel', icon: 'https://ymbfvvbymmfdhmvafgsp.supabase.co/storage/v1/object/public/case-studies/Tookits/vercel.svg' },
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
                    <span className="text-sm text-gray-500 font-medium">Full-time &bull; {duration([2021, 12])}</span>
                    <span className="text-sm text-gray-400">Jakarta Metropolitan Area &bull; Hybrid</span>
                  </div>

                  <div className="mb-6 relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Senior Product Designer</h4>
                    <span className="text-sm text-gray-500 block mb-2">{period([2025, 1])}</span>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">Still the only designer, and now I ship the frontend too. I moved all 43 apps to our new design system, opened 216 pull requests in one semester, and I’m building theming into it, starting with dark mode. I take my own prototypes from the problem to sign off, usually in 1 to 4 days.</p>
                  </div>

                  <div className="mb-6 relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Design Systems Lead</h4>
                    <span className="text-sm text-gray-500 block mb-2">{period([2023, 9], [2024, 12])}</span>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                      Led the build of "Fastlane" end to end, aligning design and engineering through a shared token system and clear workflows. Worked directly with leadership to make sure the system actually held up in production.{' '}
                      <Link to="/systems/building-a-design-system-engineers-use" className="text-gray-900 font-medium hover:underline inline-flex items-center gap-1 transition-all">See how it works →</Link>
                    </p>
                  </div>

                  <div className="relative pl-4 border-l-2 border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900">Senior User Interface Designer</h4>
                    <span className="text-sm text-gray-500 block mb-2">{period([2021, 12], [2023, 8])}</span>
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
                    <span className="text-sm text-gray-500 font-medium">{period([2015, 12], [2021, 11])}</span>
                    <span className="text-sm text-gray-400">Jakarta Metropolitan Area &bull; Hybrid</span>
                  </div>
                  <p className="text-base font-semibold text-gray-700 mb-3">Sr. UI/UX Designer</p>
                  <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                    Six years of designing interfaces for complex enterprise products, with the user and the system in mind from day one.
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
                    <p className="text-sm text-gray-500 font-medium">Jun 2018 to Dec 2018</p>
                  </div>
                  <p className="text-base font-semibold text-gray-700 mb-3">Creative Director (Freelance)</p>
                  <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                    Directed physical system design and production for 3 facilities. Working off screen taught me how real constraints and operations shape a design.
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
                    <h3 className="text-xl font-bold text-gray-900">PT Multipolar Technology Tbk</h3>
                    <p className="text-sm text-gray-500 font-medium">May 2013 to Oct 2013</p>
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

      {/* Section 6: CTA */}
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
