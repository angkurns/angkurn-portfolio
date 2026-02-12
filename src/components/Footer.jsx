
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-charcoal-light/10 py-10 md:py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column - Location */}
          <div className="text-warm-white/70">
            <p>Jakarta, ID</p>
          </div>

          {/* Center Column - Contact */}
          <div className="text-warm-white/70">
            <p className="mb-1">Let's build logic:</p>
            <a
              href="mailto:angkurns@gmail.com"
              className="text-orange-accent hover:text-orange-accent/80 transition-colors"
            >
              angkurns@gmail.com
            </a>
          </div>

          {/* Right Column - Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            <a
              href="https://www.linkedin.com/in/angkurn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-white/70 hover:text-orange-accent transition-colors flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="text-warm-white/40">·</span>
            <a
              href="https://www.tiktok.com/@ankuarant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-white/70 hover:text-orange-accent transition-colors"
              aria-label="TikTok"
            >
              TikTok
            </a>
            <span className="text-warm-white/40">·</span>
            <a
              href="https://www.instagram.com/angkurn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-white/70 hover:text-orange-accent transition-colors flex items-center gap-2"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-warm-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Angkurn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
