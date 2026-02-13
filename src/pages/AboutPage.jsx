import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Layers,
  GitBranch,
  Users,
  Target,
  FileText,
  Share2,
  LineChart
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

const AboutPage = () => {
  const { openModal } = useContactModal();

  const howIWork = [
    {
      number: "01",
      title: "Start With The System",
      description: "Before designing screens, I define how things should behave. Clear structure makes interface decisions easier."
    },
    {
      number: "02",
      title: "Documentation Matters",
      description: "I treat documentation as part of the product. Clear logic reduces friction between design and engineering."
    },
    {
      number: "03",
      title: "AI As A Thinking Tool",
      description: "I use AI to challenge assumptions, test logic, and explore edge cases. Not to replace thinking, but to improve it."
    }
  ];

  const focusGrid = [
    {
      title: "Enterprise systems",
      icon: ShieldCheck,
      description: "Designing for multi-layer permissions, state complexity, and scalability in enterprise environments."
    },
    {
      title: "Design systems and governance",
      icon: Layers,
      description: "Building production-grade systems with tokens, documentation, and adoption strategy across teams."
    },
    {
      title: "Complex workflows",
      icon: GitBranch,
      description: "Clarifying edge cases, multi-step flows, and decision states before interface design begins."
    },
    {
      title: "Multi-role products",
      icon: Users,
      description: "Designing for admins, operators, and executives within the same structured ecosystem."
    },
    {
      title: "Product strategy alignment",
      icon: Target,
      description: "Connecting user flows to business priorities and long-term product direction."
    },
    {
      title: "Clear decision frameworks",
      icon: FileText,
      description: "Documenting states, transitions, and assumptions to reduce ambiguity between design and engineering."
    },
    {
      title: "Cross-functional collaboration",
      icon: Share2,
      description: "Working closely with lead engineers and product to align early and reduce handoff friction."
    },
    {
      title: "Long-term maintainability",
      icon: LineChart,
      description: "Designing systems that scale over time without creating design debt."
    }
  ];

  return (
    <div className="bg-charcoal-dark min-h-screen text-warm-white font-inter">
      <Helmet>
        <title>About - Angkurn</title>
        <meta name="description" content="I build clarity inside complex products. Hi, I'm Angga. I work in systems." />
      </Helmet>

      {/* SECTION 1 — HERO */}
      <section className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat font-extrabold text-warm-white mb-8 leading-[1.1] md:leading-[0.95] tracking-tight">
            I build clarity inside<br />complex products.
          </h1>

          <p className="text-xl md:text-2xl text-warm-white/90 font-medium mb-4">
            Hi, I'm Angga.
          </p>

          <p className="text-lg md:text-xl text-warm-white/60 leading-relaxed max-w-3xl mb-6">
            I work in systems. When things get complicated, I help teams slow down, think clearly, and make decisions that hold up over time.
          </p>

          <p className="text-lg md:text-xl text-orange-accent font-medium leading-tight">
            I care about clarity. Not just how something looks, but how it works.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-8 md:px-16 py-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/[0.08] shadow-2xl">
                <img
                  src="/angga.jpeg"
                  alt="Angga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="max-w-[640px]">
              <div className="mb-10 space-y-4">
                <span className="text-orange-accent/60 font-mono text-sm tracking-widest uppercase">
                  Context
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-tight">
                  What Changed For Me
                </h2>
              </div>

              <div className="space-y-5 text-warm-white text-lg leading-[1.8]">
                <p>Over the past few years, my role expanded beyond design execution.</p>
                <p>In 2025, I found myself carrying more responsibility across product decisions, system structure, and documentation clarity.</p>
                <p>It pushed me to think more carefully.</p>
                <p>There was less room for assumptions. Less room for vague thinking. Every decision needed to be clear, documented, and realistic.</p>
                <p>I worked closer with engineering. I rebuilt parts of the design system. I leaned more into system thinking. I used AI to question edge cases before they became problems.</p>
                <p>It was challenging. But it made my thinking stronger.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — HOW I WORK */}
      <section className="container mx-auto px-8 md:px-16 py-12 md:py-32">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-tight">
                How I Work
              </h2>
              <p className="text-warm-white/40 mt-4 text-lg md:text-xl max-w-sm">
                The principles behind how I approach complex products.
              </p>
            </motion.div>

            {/* Right Column: Rows */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="divide-y divide-white/[0.08]"
            >
              {howIWork.map((item, index) => (
                <div key={index} className="relative py-12 first:pt-0 last:pb-0 group">
                  {/* Subtle Background Number */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-8xl md:text-[10rem] font-bold text-warm-white/[0.04] select-none pointer-events-none group-hover:text-warm-white/[0.07] transition-colors duration-500">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="text-orange-accent/60 text-lg md:text-xl font-mono font-bold">{item.number}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-warm-white/50 text-lg md:text-xl leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT I FOCUS ON */}
      <section className="container mx-auto px-8 md:px-16 py-12 md:py-32 border-t border-warm-white/5">
        <div className="">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-tight mb-6">
              What I Focus On
            </h2>
            <p className="text-warm-white/40 text-lg md:text-xl max-w-2xl">
              Areas where I spend most of my energy.
            </p>
          </motion.div>

          {/* Grid Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {focusGrid.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <item.icon className="w-5 h-5 text-warm-white/20 group-hover:text-orange-accent transition-colors duration-300 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-warm-white group-hover:text-warm-white transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-white/40 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — A BIT OF CONTEXT */}
      <section className="w-full bg-white/[0.01] border-y border-white/[0.05] py-20 md:py-32 mb-20">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-24 items-start">
            {/* Left side: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="text-orange-accent/60 font-mono text-sm tracking-widest uppercase">Background Log</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-white leading-tight">
                A Bit Of Context
              </h2>
            </motion.div>

            {/* Right side: Story Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative pl-8 md:pl-12 border-l border-white/10 space-y-20 py-4">
                {/* Point 1: The Beginning */}
                <div className="relative">
                  <div className="absolute -left-[38.5px] md:-left-[54.5px] top-3 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.4)]" />
                  <div className="space-y-4">
                    <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed">
                      I’ve been doing this for over 11 years. At the beginning, I focused on making things look good. That was the job.
                    </p>
                    <div className="space-y-2">
                      <p className="text-warm-white text-lg md:text-xl font-medium">But over time I realized I care more about what people don’t see.</p>
                      <p className="text-orange-accent/80 font-mono text-base md:text-lg">_The logic.</p>
                      <p className="text-orange-accent/80 font-mono text-base md:text-lg">_The rules behind the screen.</p>
                    </div>
                  </div>
                </div>

                {/* Point 2: Complexity */}
                <div className="relative">
                  <div className="absolute -left-[38.5px] md:-left-[54.5px] top-3 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.4)]" />
                  <div className="space-y-4">
                    <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed">
                      Most of my work is in complex products. Enterprise cybersecurity, lots of edge cases, lots of constraints.
                    </p>
                    <p className="text-warm-white text-lg md:text-xl font-medium">
                      It’s not always fun. But I enjoy it.
                    </p>
                    <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed">
                      For me, a good UI only matters if the logic underneath makes sense first.
                    </p>
                  </div>
                </div>

                {/* Point 3: The Triad */}
                <div className="relative">
                  <div className="absolute -left-[38.5px] md:-left-[54.5px] top-3 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.4)]" />
                  <div className="space-y-4">
                    <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed">
                      The <span className="text-warm-white font-bold">Lead Triad</span> was not a big strategy idea. It started from conversations between me and two lead engineers.
                    </p>
                    <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed">
                      We were spending too much time reviewing designs that were not clear yet. So instead of reviewing visuals, we talked through the logic first.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <span className="bg-white/5 border border-white/10 px-3 py-1 rounded font-mono text-sm text-orange-accent/80">Before Figma</span>
                      <span className="bg-white/5 border border-white/10 px-3 py-1 rounded font-mono text-sm text-orange-accent/80">Before Visuals</span>
                    </div>
                  </div>
                </div>

                {/* Point 4: The Result */}
                <div className="relative">
                  <div className="absolute -left-[38.5px] md:-left-[54.5px] top-3 w-3 h-3 rounded-full bg-orange-accent shadow-[0_0_12px_rgba(255,140,66,0.4)]" />
                  <div className="space-y-6">
                    <p className="text-warm-white/60 text-lg md:text-xl leading-relaxed">
                      It reduced confusion. It reduced rework. It made conversations easier.
                    </p>
                    <p className="text-warm-white text-xl md:text-2xl font-bold border-l-2 border-orange-accent pl-6 py-2">
                      I’m not interested in decorating features. I just want things to make sense.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="container mx-auto px-6 py-24 md:py-32 border-t border-warm-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-warm-white max-w-4xl mx-auto mb-12 leading-[1.1] tracking-tight">
            If your product feels complex, let’s simplify it.
          </h2>
          <button
            onClick={openModal}
            className="inline-block bg-orange-accent text-charcoal-dark px-12 py-5 rounded-full font-bold text-xl hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(255,140,66,0.3)] transition-all duration-300"
          >
            Let’s Talk
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
