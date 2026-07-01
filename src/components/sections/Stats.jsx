import { stats } from '../../data/profile';
import { useCountUp } from '../../hooks/useCountUp';
import Reveal from '../ui/Reveal';

function StatCounter({ value, suffix, label, delay }) {
  const [ref, count] = useCountUp(value, { duration: 1600 });

  return (
    <Reveal delay={delay} className="text-center">
      <div ref={ref}>
        <p className="font-display text-4xl sm:text-5xl font-semibold text-gradient tabular-nums">
          {count}
          <span>{suffix}</span>
        </p>
        <p className="mt-2 font-mono text-xs text-ink-low uppercase tracking-wider">{label}</p>
      </div>
    </Reveal>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-void/70 backdrop-blur-sm border-y border-white/[0.06]">
      <div className="container-px max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
