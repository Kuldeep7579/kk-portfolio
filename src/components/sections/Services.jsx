import {
  FilterX, ShieldCheck, Search, LineChart, PieChart,
  Database, Code2, LayoutDashboard, Table, TrendingUp,
} from 'lucide-react';
import { services } from '../../data/profile';
import Reveal from '../ui/Reveal';

// Map icon string names → actual components
const iconMap = {
  FilterX, ShieldCheck, Search, LineChart, PieChart,
  Database, Code2, LayoutDashboard, Table, TrendingUp,
};

// Cycle through accent variants so grid doesn't look monotone
const accentCycle = [
  { icon: 'text-signal', ring: 'bg-signal/10', border: 'hover:border-signal/30' },
  { icon: 'text-confirm', ring: 'bg-confirm/10', border: 'hover:border-confirm/30' },
  { icon: 'text-signal', ring: 'bg-signal/10', border: 'hover:border-signal/30' },
  { icon: 'text-confirm', ring: 'bg-confirm/10', border: 'hover:border-confirm/30' },
  { icon: 'text-signal', ring: 'bg-signal/10', border: 'hover:border-signal/30' },
  { icon: 'text-confirm', ring: 'bg-confirm/10', border: 'hover:border-confirm/30' },
  { icon: 'text-signal', ring: 'bg-signal/10', border: 'hover:border-signal/30' },
  { icon: 'text-confirm', ring: 'bg-confirm/10', border: 'hover:border-confirm/30' },
  { icon: 'text-signal', ring: 'bg-signal/10', border: 'hover:border-signal/30' },
  { icon: 'text-confirm', ring: 'bg-confirm/10', border: 'hover:border-confirm/30' },
];

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || TrendingUp;
  const accent = accentCycle[index % accentCycle.length];

  return (
    <Reveal delay={index * 0.05}>
      <div
        className={`group glass rounded-2xl p-6 h-full flex flex-col border border-white/[0.06]
                    transition-all duration-300 ${accent.border}
                    hover:-translate-y-1 hover:shadow-glass cursor-default`}
      >
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${accent.ring} flex items-center justify-center mb-5 
                         transition-transform duration-300 group-hover:scale-110`}>
          <Icon size={22} className={accent.icon} />
        </div>

        {/* Content */}
        <h3 className="font-display text-base font-semibold text-ink-high leading-snug mb-2">
          {service.title}
        </h3>
        <p className="text-ink-low text-sm leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Bottom line on hover */}
        <div className="mt-4 h-px w-0 group-hover:w-full bg-signal-gradient transition-all duration-500 ease-out-expo rounded-full" />
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-confirm/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-px max-w-6xl mx-auto relative z-10">
        <Reveal className="max-w-xl">
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            Services
          </p>
          <h2 className="section-heading mb-5">
            What I bring to <span className="text-gradient">your data.</span>
          </h2>
          <p className="text-ink-low text-lg leading-relaxed">
            End-to-end data analytics services — from raw, messy data to clean dashboards and actionable
            business insight.
          </p>
        </Reveal>

        {/* 10-service responsive grid: 1 col → 2 col → 5 col at widest */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
