import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Phone, Target } from 'lucide-react';
import { profile, education } from '../../data/profile';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';

const personalDetails = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE' },
  { icon: Calendar, label: 'Graduating', value: '2026' },
  { icon: Phone, label: 'Phone', value: profile.phone },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-signal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-px max-w-6xl mx-auto relative z-10">
        <Reveal>
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            About Me
          </p>
          <h2 className="section-heading mb-14 max-w-xl">
            Turning numbers into <span className="text-gradient">decisions.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-16">
          {/* Left: narrative */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-ink-low text-lg leading-relaxed">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 glass rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={16} className="text-signal" />
                  <h3 className="font-display text-sm font-semibold text-ink-high uppercase tracking-wide">
                    Career Objective
                  </h3>
                </div>
                <p className="text-ink-low leading-relaxed">
                  To join an impact-driven data team where I can apply Python, SQL, and Excel-based analysis to
                  solve real business problems — and keep growing from query optimization into deeper statistical
                  modeling and dashboard design.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {personalDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass rounded-xl p-4">
                    <Icon size={16} className="text-signal mb-2" />
                    <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-ink-high font-medium mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: education card */}
          <Reveal delay={0.2}>
            <TiltCard className="p-7 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-signal-gradient flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-void" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-signal uppercase tracking-wider">Education</p>
                  <p className="text-sm text-ink-high font-medium">{education.duration}</p>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink-high leading-snug">
                {education.degree}
              </h3>
              <p className="text-ink-low text-sm mt-1">{education.institution}</p>

              <div className="mt-5 flex items-center gap-2">
                <span className="font-mono text-2xl font-semibold text-confirm">{education.cgpa}</span>
                <span className="text-xs text-ink-faint">CGPA</span>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-ink-low"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
