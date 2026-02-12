
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

          {/* Modal Trigger - Desktop */}
          <button
            onClick={openModal}
            className="hidden md:block bg-orange-accent/90 text-charcoal-dark px-5 py-1.5 rounded-full text-sm font-bold hover:scale-105 hover:bg-orange-accent hover:shadow-lg transition-all duration-300"
          >
            Let’s Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-warm-white hover:text-orange-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pt-6 pb-4">
                <NavLink
                  to="/"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
                <a
                  href="/#work"
                  className="px-4 py-2 rounded-full text-warm-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </a>
                <NavLink
                  to="/notes"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Notes
                </NavLink>
                <NavLink
                  to="/about"
                  className={navLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModal();
                  }}
                  className="bg-orange-accent text-charcoal-dark px-6 py-2 rounded-full font-semibold text-center hover:scale-105 hover:shadow-lg transition-all duration-300 mt-2"
                >
                  Let’s Talk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
