
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-charcoal-light/10 py-10 md:py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left text-sm text-warm-white/50">
          {/* Left - Location */}
          <div className="md:text-left">
            <p>Jakarta, ID</p>
          </div>

          {/* Center - Contact */}
          <div className="flex items-center justify-center whitespace-nowrap">
            <span>Let’s build logic together ⚉&nbsp;</span>
            <a
              href="mailto:angkurns@gmail.com"
              className="hover:text-warm-white/80 transition-colors"
            >
              angkurns@gmail.com
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4">
            <a
              href="https://www.linkedin.com/in/angkurn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-white/80 transition-colors"
            >
              LinkedIn
            </a>
            <span className="opacity-30">·</span>
            <a
              href="https://www.tiktok.com/@ankuarant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-white/80 transition-colors"
            >
              TikTok
            </a>
            <span className="opacity-30">·</span>
            <a
              href="https://www.instagram.com/angkurn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-white/80 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Row 2 - Copyright */}
        <div className="text-center mt-8 md:mt-10 text-[11px] uppercase tracking-widest text-warm-white/20">
          <p>&copy; {new Date().getFullYear()} Angkurn.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
