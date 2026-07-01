import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { profile } from '../../data/profile';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/BrandIcons';

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const chars = headlineRef.current?.querySelectorAll('.char');
    if (!chars || chars.length === 0) return;

    gsap.fromTo(
      chars,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.018,
        delay: 1.7,
      }
    );
  }, []);

  const splitText = (text) =>
    text.split('').map((char, i) => (
      <span key={i} className="inline-block overflow-hidden">
        <span className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ));

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero-specific atmosphere layered on top of the global network background */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void pointer-events-none" />

      {/* Floating accent orbs - subtle, secondary to DataField */}
      <div className="absolute top-1/4 left-[8%] w-72 h-72 bg-signal/10 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-80 h-80 bg-confirm/10 rounded-full blur-[110px] animate-float-med pointer-events-none" />

      <div className="container-px relative z-10 w-full max-w-6xl mx-auto pt-28 pb-16">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="section-eyebrow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-confirm animate-pulse-glow" />
              Available for opportunities
            </motion.div>

            <h1
              ref={headlineRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-high tracking-tight leading-[1.05]"
            >
              <div className="flex flex-wrap">{splitText("Hi, I'm")}</div>
              <div className="flex flex-wrap">{splitText('Kuldeep Kumar.')}</div>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.5 }}
              className="mt-4 font-mono text-xl sm:text-2xl text-signal h-9"
            >
              <TypeAnimation
                sequence={[
                  'Data Analyst', 1800,
                  'Python Developer', 1800,
                  'SQL Specialist', 1800,
                  'Insight Builder', 1800,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="mt-6 text-ink-low text-lg leading-relaxed max-w-xl"
            >
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                as="a"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary cursor-pointer"
              >
                Hire Me <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={profile.resumeFile}
                download
                className="btn-secondary cursor-pointer"
              >
                <Download size={16} /> Download Resume
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              {[
                { icon: GithubIcon, href: profile.social.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: profile.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: profile.social.email, label: 'Email' },
                { icon: WhatsappIcon, href: profile.social.whatsapp, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass text-ink-low hover:text-signal hover:border-signal/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto lg:mx-0 w-full max-w-sm"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-strong p-2">
              <div className="w-full h-full rounded-[1.6rem] bg-gradient-to-br from-void-panel to-void flex items-center justify-center relative overflow-hidden">
                {/* Placeholder avatar - swap src for a real photo */}
                <div className="w-full h-full flex items-center justify-center text-7xl font-display font-semibold text-gradient">
                  KK
                </div>
                <div className="absolute inset-0 bg-signal-gradient opacity-[0.04]" />
              </div>

              {/* Floating mono stat chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-10 glass-strong rounded-xl px-3.5 py-2.5 shadow-glass"
              >
                <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">Stack</p>
                <p className="font-mono text-sm text-confirm">Python · SQL</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-5 bottom-16 glass-strong rounded-xl px-3.5 py-2.5 shadow-glass"
              >
                <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">Focus</p>
                <p className="font-mono text-sm text-signal">Data Analytics</p>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 8, 0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-strong rounded-full px-4 py-2 shadow-glass flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-confirm animate-pulse-glow" />
                <p className="font-mono text-xs text-ink-high">CGPA 7+/10</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint hover:text-signal transition-colors duration-300 cursor-pointer"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
