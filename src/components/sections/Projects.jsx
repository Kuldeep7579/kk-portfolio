import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { projects, projectFilters } from '../../data/profile';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';
import { GithubIcon } from '../ui/BrandIcons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = activeFilter === 'All' || p.category === activeFilter;
      const matchesQuery =
        query.trim() === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section id="projects" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[26rem] h-[26rem] bg-signal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-px max-w-6xl mx-auto relative z-10">
        <Reveal className="max-w-xl">
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            Projects
          </p>
          <h2 className="section-heading mb-5">
            Work that turned <span className="text-gradient">data into decisions.</span>
          </h2>
          <p className="text-ink-low text-lg leading-relaxed">
            A few projects where I cleaned messy data, modeled it, and shipped something a real decision-maker
            could use.
          </p>
        </Reveal>

        {/* Filter + search controls */}
        <Reveal delay={0.1} className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                  activeFilter === filter ? 'text-void' : 'text-ink-low hover:text-ink-high glass'
                }`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 bg-signal-gradient rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full glass rounded-full pl-10 pr-4 py-2.5 text-sm text-ink-high placeholder:text-ink-faint outline-none focus:border-signal/40 transition-colors"
            />
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-signal uppercase tracking-wider px-2.5 py-1 rounded-full bg-signal/10">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-ink-faint">{project.year}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-ink-high leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-ink-low text-sm mt-2.5 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-ink-low"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-white/[0.06]">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-sm font-semibold text-confirm">{m.value}</p>
                        <p className="text-[10px] text-ink-faint uppercase tracking-wider mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-ink-high glass rounded-full py-2.5 hover:border-signal/40 transition-colors duration-300 cursor-pointer"
                    >
                      <GithubIcon size={15} /> Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-void bg-signal-gradient rounded-full py-2.5 hover:shadow-glow-signal transition-shadow duration-300 cursor-pointer"
                      >
                        Live Demo <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span
                        title="No live demo for this project type"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-ink-faint border border-white/[0.06] rounded-full py-2.5 cursor-not-allowed"
                      >
                        Code only
                      </span>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center py-16 glass rounded-2xl">
            <p className="text-ink-low">No projects match that search. Try a different term.</p>
          </div>
        )}
      </div>
    </section>
  );
}
