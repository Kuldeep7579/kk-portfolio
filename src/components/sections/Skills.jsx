import { motion } from 'framer-motion';
import { skillCategories, techStack } from '../../data/profile';
import Reveal from '../ui/Reveal';

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-ink-high font-medium">{name}</span>
        <span className="font-mono text-xs text-signal">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-signal-gradient"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-confirm/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-px max-w-6xl mx-auto relative z-10">
        <Reveal className="max-w-xl">
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            Skills & Tools
          </p>
          <h2 className="section-heading mb-5">
            The toolkit behind <span className="text-gradient">every insight.</span>
          </h2>
          <p className="text-ink-low text-lg leading-relaxed">
            From cleaning a messy CSV to shipping a dashboard stakeholders trust — here's what I reach for at
            each stage.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <Reveal key={category.title} delay={catIndex * 0.1}>
              <div className="glass rounded-2xl p-7 h-full">
                <h3 className="font-display text-base font-semibold text-ink-high mb-6 flex items-center gap-2">
                  <span className="font-mono text-xs text-signal">{String(catIndex + 1).padStart(2, '0')}</span>
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.1 + i * 0.08}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee of full tech stack */}
        <Reveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden glass rounded-2xl py-5">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-void-panel to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-void-panel to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="font-mono text-sm text-ink-low mx-6 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-signal/60" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
