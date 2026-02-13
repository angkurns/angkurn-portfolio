
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/context/ContactModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-all duration-300 ${isActive
      ? 'bg-warm-white/10 text-orange-accent'
      : 'text-warm-white/80 hover:text-warm-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-charcoal-dark border-b border-charcoal-light/10">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo and Nav Group */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold text-orange-accent hover:text-orange-accent/80 transition-colors tracking-tight">
              Angkurn
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navLinkStyles}>
                Home
              </NavLink>
              <span className="text-warm-white/10 px-1">▪</span>
              <a href="/#work" className="px-4 py-2 rounded-full transition-all duration-300 text-warm-white/80 hover:text-warm-white">
                Work
              </a>
              <span className="text-warm-white/10 px-1">▪</span>
              <NavLink to="/notes" className={navLinkStyles}>
                Notes
              </NavLink>
              <span className="text-warm-white/10 px-1">▪</span>
              <NavLink to="/about" className={navLinkStyles}>
                About
              </NavLink>
            </div>
          </div>

          {/* Right Group: CTAs & Menu */}
          <div className="flex items-center gap-4">
            {/* Modal Trigger - Desktop */}
            <button
              onClick={openModal}
              className="hidden md:block bg-orange-accent/90 text-charcoal-dark px-5 py-1.5 rounded-full text-sm font-bold hover:scale-105 hover:bg-orange-accent hover:shadow-lg transition-all duration-300"
            >
              Let’s Talk
            </button>

            {/* Modal Trigger - Mobile */}
            <button
              onClick={openModal}
              className="md:hidden bg-orange-accent text-charcoal-dark px-4 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-transform"
            >
              Let’s Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-[70] w-8 h-8 flex flex-col items-end justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 bg-warm-white transition-all duration-300 origin-right ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[1px]' : 'w-8'
                  }`}
              />
              <span
                className={`h-0.5 bg-warm-white transition-all duration-300 origin-right ${isMenuOpen ? 'w-8 rotate-45 translate-y-[1px]' : 'w-5'
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] md:hidden"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-charcoal-dark/95 backdrop-blur-xl"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Drawer Content */}
              <div className="relative h-full flex flex-col justify-between px-8 py-20">
                <div className="flex flex-col gap-8">
                  <span className="text-orange-accent/60 font-mono text-xs tracking-widest uppercase mb-4">Navigation Menu</span>

                  {[
                    { label: 'Home', to: '/', index: '01' },
                    { label: 'Work', href: '/#work', index: '02' },
                    { label: 'Notes', to: '/notes', index: '03' },
                    { label: 'About', to: '/about', index: '04' }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      {item.to ? (
                        <NavLink
                          to={item.to}
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-baseline gap-4 text-4xl font-bold transition-all duration-300 ${isActive ? 'text-orange-accent' : 'text-warm-white/40'
                            }`
                          }
                        >
                          <span className="font-mono text-xs opacity-40">{item.index}</span>
                          {item.label}
                        </NavLink>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-baseline gap-4 text-4xl font-bold text-warm-white/40 active:text-orange-accent"
                        >
                          <span className="font-mono text-xs opacity-40">{item.index}</span>
                          {item.label}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Context Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="border-t border-white/5 pt-8 flex justify-between items-end"
                >
                  <div className="space-y-1">
                    <p className="font-mono text-[10px] text-warm-white/30 uppercase tracking-tighter">Status: Available for Collaboration</p>
                    <p className="font-mono text-[10px] text-warm-white/30 uppercase tracking-tighter">© 2026 Angkurn</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-warm-white/30 uppercase tracking-tighter">Global / Remote</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
