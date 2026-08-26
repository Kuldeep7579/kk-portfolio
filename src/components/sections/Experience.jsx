import { motion } from 'framer-motion';
import { timeline } from '../../data/profile';
import Reveal from '../ui/Reveal';

const tagColors = {
  Current: 'bg-confirm/15 text-confirm',
  Project: 'bg-signal/15 text-signal',
  Education: 'bg-white/10 text-ink-low',
  Certification: 'bg-yellow-400/10 text-yellow-400',
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="container-px max-w-4xl mx-auto relative z-10">
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            Experience & Timeline
          </p>
          <h2 className="section-heading mb-14">
            How I got <span className="text-gradient">here.</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-signal/40 via-void-line to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={`${item.year}-${item.title}`} delay={i * 0.08} className="relative pl-16">
                <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl glass-strong flex flex-col items-center justify-center">
                  <span className="font-mono text-[10px] text-ink-faint leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-signal mt-1" />
                </div>

                <div className="glass rounded-2xl p-6 hover:border-signal/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-signal">{item.year}</span>
                    <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider ${tagColors[item.tag] || 'bg-white/10 text-ink-low'}`}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-high">{item.title}</h3>
                  <p className="text-sm text-signal/80 mt-0.5">{item.subtitle}</p>
                  <p className="text-ink-low text-sm mt-3 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
