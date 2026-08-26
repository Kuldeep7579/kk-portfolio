import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { profile } from '../../data/profile';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/BrandIcons';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    display: profile.phone,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone2,
    href: `tel:${profile.phone2.replace(/\s/g, '')}`,
    display: profile.phone2,
  },
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    display: profile.email,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
    display: profile.location,
  },
];

const socialLinks = [
  { icon: GithubIcon, href: profile.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: WhatsappIcon, href: profile.social.whatsapp, label: 'WhatsApp' },
  { icon: Mail, href: profile.social.email, label: 'Email' },
];

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';    // ← replace with your EmailJS public key

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      // Lazy-load emailjs only when actually submitting
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[28rem] h-[28rem] bg-signal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-px max-w-6xl mx-auto relative z-10">
        <Reveal className="max-w-xl">
          <p className="section-eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            Contact Me
          </p>
          <h2 className="section-heading mb-5">
            Let's build something with <span className="text-gradient">your data.</span>
          </h2>
          <p className="text-ink-low text-lg leading-relaxed">
            Open to Data Analyst roles, freelance projects, and collaborations. Drop a message or reach out directly.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* Left — contact info + socials */}
          <div className="space-y-4">
            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, href, display }, i) => (
              <Reveal key={`${label}-${i}`} delay={i * 0.07}>
                <div className="glass rounded-2xl p-5 flex items-center gap-4 border border-white/[0.06] hover:border-signal/30 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-signal/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-signal" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-ink-high font-medium hover:text-signal transition-colors duration-200 truncate block"
                      >
                        {display}
                      </a>
                    ) : (
                      <p className="text-sm text-ink-high font-medium truncate">{display}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Social links */}
            <Reveal delay={0.32}>
              <div className="glass rounded-2xl p-5 border border-white/[0.06]">
                <p className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-4">Find me on</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      className="w-10 h-10 glass rounded-full flex items-center justify-center text-ink-low hover:text-signal hover:border-signal/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — contact form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-8 border border-white/[0.08] space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Kuldeep Kumar"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-high placeholder:text-ink-faint outline-none focus:border-signal/50 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-high placeholder:text-ink-faint outline-none focus:border-signal/50 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Kuldeep, I'd like to discuss a data analytics project..."
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-ink-high placeholder:text-ink-faint outline-none focus:border-signal/50 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-confirm text-sm"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try emailing directly.
                </motion.div>
              )}

              <MagneticButton
                as="button"
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-void/40 border-t-void rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </MagneticButton>

              <p className="text-center font-mono text-[10px] text-ink-faint">
                Or email directly at{' '}
                <a href={`mailto:${profile.email}`} className="text-signal hover:underline">
                  {profile.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
