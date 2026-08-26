import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { profile, navLinks } from '../../data/profile';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/BrandIcons';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const socials = [
  { icon: GithubIcon, href: profile.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: WhatsappIcon, href: profile.social.whatsapp, label: 'WhatsApp' },
  { icon: Mail, href: profile.social.email, label: 'Email' },
];

export default function Footer() {
  const { scrolled } = useScrollPosition(400);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] bg-void/80 backdrop-blur-sm">
        <div className="container-px max-w-6xl mx-auto py-12">
          <div className="grid sm:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <p className="font-display text-xl font-semibold text-ink-high">
                Kuldeep<span className="text-signal">.</span>
              </p>
              <p className="text-ink-low text-sm mt-2 leading-relaxed max-w-xs">
                Data Analyst · Python · SQL · Excel · Aligarh, India
              </p>
              <div className="flex items-center gap-3 mt-5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 glass rounded-full flex items-center justify-center text-ink-low hover:text-signal hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick nav */}
            <div>
              <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-4">Navigate</p>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-sm text-ink-low hover:text-signal transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact quick-links */}
            <div>
              <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-4">Reach Out</p>
              <div className="space-y-2">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="block text-sm text-ink-low hover:text-signal transition-colors duration-200">
                  {profile.phone}
                </a>
                <a href={`tel:${profile.phone2.replace(/\s/g, '')}`} className="block text-sm text-ink-low hover:text-signal transition-colors duration-200">
                  {profile.phone2}
                </a>
                <a href={`mailto:${profile.email}`} className="block text-sm text-ink-low hover:text-signal transition-colors duration-200">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-ink-faint font-mono">
              © {new Date().getFullYear()} Kuldeep Kumar. All rights reserved.
            </p>
            <p className="text-xs text-ink-faint flex items-center gap-1">
              Built with <Heart size={11} className="text-signal fill-signal" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 glass-strong rounded-full flex items-center justify-center text-ink-low hover:text-signal hover:border-signal/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-glass"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
