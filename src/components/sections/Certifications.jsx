import { motion } from 'framer-motion';
import { BarChart2, Cpu, Database, Table, Award } from 'lucide-react';
import { certifications } from '../../data/profile';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';

// Map icon string → actual lucide component
const iconMap = { BarChart2, Cpu, Database, Table };

// Color variants matching design tokens
const colorVariants = {
  signal: {
    iconBg: 'bg-signal/15',
    iconColor: 'text-signal',
    border: 'hover:border-signal/40',
    badge: 'bg-signal/10 text-signal border-signal/20',
    glow: 'rgba(124,158,255,0.12)',
  },
  confirm: {
    iconBg: 'bg-confirm/15',
    iconColor: 'text-confirm',
    border: 'hover:border-confirm/40',
    badge: 'bg-confirm/10 text-confirm border-confirm/20',
    glow: 'rgba(61,220,151,0.12)',
  },
};

function CertCard({ cert, index }) {
  const Icon = iconMap[cert.icon] || BarChart2;
  const cv = colorVariants[cert.color] || colorVariants.signal;

  return (
    <Reveal delay={index * 0.12}>
      <TiltCard
        className={`p-7 h-full flex flex-col border border-white/[0.06] transition-colors duration-300 ${cv.border}`}
        glow={false}
      >
        {/* Custom glow on hover via inline style */}
        <div className="flex items-start justify-between mb-5">
          <div className={`w-14 h-14 rounded-2xl ${cv.iconBg} flex items-center justify-center shrink-0`}>
            <Icon size={26} className={cv.iconColor} />
          </div>
          <div className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
            <Award size={13} className="text-ink-faint" />
            <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
              {cert.year}
            </span>
          </div>
        </div>

        <h3 className="font-display text-xl font-semibold text-ink-high leading-snug">
          {cert.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-2">
          <span className={`font-mono text-xs font-medium px-2.5 py-1 rounded-full border ${cv.badge}`}>
            {cert.issuer}
          </span>
        </div>

        <p className="text-ink-low text-sm mt-4 leading-relaxed flex-1">
          {cert.description}
        </p>

        <div className="mt-5 pt-5 border-t border-white/[0.06]">
          <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-3">
            Skills Covered
          </p>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-ink-low"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Subtle radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[18rem] bg-signal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-px max-w-6xl mx-auto relative z-10">
        <Reveal className="max-w-xl">
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            Certifications
          </p>
          <h2 className="section-heading mb-5">
            Credentials that back the <span className="text-gradient">work.</span>
          </h2>
          <p className="text-ink-low text-lg leading-relaxed">
            Verified learning across data analytics and technology — each course chosen to deepen
            hands-on, practical skills.
          </p>
        </Reveal>

        {/* Cards — 2×2 responsive grid for 4 certifications */}
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        {/* Bottom accent strip */}
        <Reveal delay={0.3} className="mt-14">
          <div className="glass rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-signal-gradient flex items-center justify-center shrink-0">
                <Award size={18} className="text-void" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-high">Always learning</p>
                <p className="text-xs text-ink-low">Actively expanding skills in Data Analytics & Python</p>
              </div>
            </div>
            <span className="font-mono text-xs text-ink-faint uppercase tracking-wider whitespace-nowrap">
              {certifications.length} Certifications · 2024–2026
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
