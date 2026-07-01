import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { navLinks, profile } from '../../data/profile';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../context/ThemeContext';
import MagneticButton from '../ui/MagneticButton';

export default function Navbar() {
  const { scrolled } = useScrollPosition(40);
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href));

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container-px">
          <div
            className={`mx-auto max-w-6xl flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
              scrolled ? 'glass-strong shadow-glass' : 'bg-transparent'
            }`}
          >
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="font-display text-lg font-semibold text-ink-high tracking-tight cursor-pointer"
            >
              Kuldeep<span className="text-signal">.</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-void' : 'text-ink-low hover:text-ink-high'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 bg-signal-gradient rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2.5 rounded-full text-ink-low hover:text-signal hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <MagneticButton
                as="a"
                href={profile.resumeFile}
                download
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-void bg-signal-gradient px-4 py-2 rounded-full hover:shadow-glow-signal transition-shadow duration-300 cursor-pointer"
              >
                <Download size={15} /> Resume
              </MagneticButton>

              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden p-2.5 rounded-full text-ink-high hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2.5 rounded-full text-ink-high hover:bg-white/5 cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-2 mt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-display font-medium text-ink-high py-3 cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href={profile.resumeFile}
                download
                className="mt-6 btn-primary cursor-pointer"
              >
                <Download size={16} /> Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
