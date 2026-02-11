import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const howIWork = [
    {
      number: "01",
      title: "Systems Before Screens",
      description: "I figure out how things should work before thinking about how they look."
    },
    {
      number: "02",
      title: "Documentation as Infrastructure",
      description: "Documentation is not a formality. It helps everyone stay aligned."
    },
    {
      number: "03",
      title: "AI as a Thinking Partner",
      description: "I use AI to ask better questions and catch things I might miss."
    }
  ];

  const growthMoments = [
    {
      title: "The Solo Shift",
      description:
        "Running design on my own has taught me to choose carefully. Not everything needs to be built."
    },
    {
      title: "The AI Partnership",
      description:
        "I’m learning how to use AI to challenge my own thinking, not replace it."
    },
    {
      title: "Technical Complexity",
      description:
        "Working in cybersecurity means dealing with complicated systems. My job is to make them understandable."
    },
    {
      title: "The Brain Garden",
      description:
        "The Brain Garden is where I write things down. It helps me think more clearly."
    }
  ];

  const shapedThinking = [
    {
      title: "Thinking in Systems",
      description: "It changed how I think about systems and feedback loops. I now look for the hidden logic behind the results."
    },
    {
      title: "The Design of Everyday Things",
      description: "It reminded me that usability matters more than decoration. Good design should be invisible to the person using it."
    },
    {
      title: "Inspired",
      description: "It grounded me in product reality beyond design craft. It's a reminder that we build for outcomes, not just for pixels."
    }
  ];

  return (
    <div className="bg-charcoal-dark min-h-screen">
      <Helmet>
        <title>About - Angkurn</title>
        <meta name="description" content="Hi, I'm Angga. I design complex systems and make them usable." />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-warm-white mb-10 leading-[1.05]">
            I turn complex logic<br />
            into usable systems.
          </h1>

          {/* Intro Text */}
          <div className="max-w-4xl space-y-6">
            <p className="text-xl md:text-2xl text-warm-white/90 leading-[1.5]">
              Hi, I’m Angga. I design complex systems and make them usable.
            </p>
            <p className="text-lg md:text-xl text-warm-white/60 leading-[1.5] max-w-3xl">
              Most of my work sits between product and engineering. Before designing screens, I clarify how the system should work.
            </p>
            <p className="text-xl md:text-2xl text-orange-accent/90 font-bold italic leading-tight pt-4">
              I care about clarity. Not just how something looks, but how it behaves.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Lead Designer of One Section */}
      <section className="container mx-auto px-6 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#2a2a2a] border border-warm-white/[0.03] rounded-3xl p-8 md:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Story Text */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                The Lead Designer of One
              </h2>
              <div className="space-y-6 text-warm-white/70 text-lg leading-[1.5]">
                <p>
                  I work as a solo designer, but I don’t work alone.
                </p>
                <p>
                  Clear documentation and simple systems help me move fast without chaos.
                </p>
                <p className="text-orange-accent font-bold">
                  When the system is clear, decisions are easier to make.
                </p>
              </div>
            </div>

            {/* Right: Circular Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange-accent/10 to-charcoal-dark border border-orange-accent/20 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-orange-accent/5 mix-blend-overlay"></div>
                <div className="text-orange-accent/40 text-8xl font-bold">A</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How I Work Section */}
      <section className="container mx-auto px-6 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            How I Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {howIWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#2a2a2a] border border-warm-white/[0.03] rounded-3xl p-8 hover:border-orange-accent/20 transition-all duration-300"
              >
                <div className="text-orange-accent/60 font-bold text-xl mb-4">
                  {item.number}
                </div>
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-warm-white/50 text-base leading-[1.5]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What I'm Working On Section */}
      <section className="container mx-auto px-6 py-8 md:py-10">
        <div className="max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            What I’m Working On
          </h2>
          <p className="text-warm-white/40 mb-12 text-lg">
            What I’m learning and building today
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {growthMoments.map((moment) => (
              <div
                key={moment.title}
                className="p-7 rounded-3xl bg-[#2a2a2a] border border-warm-white/[0.03] hover:border-orange-accent/10 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {moment.title}
                </h3>
                <p className="text-warm-white/60 leading-[1.5] text-lg">{moment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books That Shaped How I Think */}
      <section className="container mx-auto px-6 py-8 md:py-10 border-t border-warm-white/5 mt-8 md:mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Books That Shaped How I Think
        </h2>

        <div className="max-w-3xl space-y-10">
          {shapedThinking.map((book, index) => (
            <div key={index} className="group">
              <h3 className="text-2xl md:text-3xl font-bold text-warm-white mb-2 group-hover:text-orange-accent transition-colors">
                {book.title}
              </h3>
              <p className="text-warm-white/50 text-lg leading-[1.5]">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="container mx-auto px-6 pt-14 md:pt-24 pb-20 md:pb-32 border-t border-warm-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-warm-white mb-8">
            If your product is complex, let’s make it understandable.
          </h2>
          <a
            href="mailto:angkurns@gmail.com"
            className="inline-block bg-orange-accent/90 text-charcoal-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-accent hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,66,0.3)] transition-all duration-300"
          >
            Let’s Talk
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
