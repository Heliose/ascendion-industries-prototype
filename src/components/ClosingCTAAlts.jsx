/*
  5 Alternative Closing CTA / Get in Touch Layouts
  Each exported as a named component.
  All share the same props: { tagline, cta }
*/
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Send, Calendar, MessageSquare, Sparkles } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

/* ═══════════════════════════════════════════════════════
   1. DARK CINEMATIC — Full-bleed black, extreme typography,
   teal glow orb, floating action cards
   ═══════════════════════════════════════════════════════ */
export function ClosingDarkCinematic({ tagline, cta }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden bg-black">
      <div className="absolute inset-0 dot-grid-bg-dark" />

      {/* Large teal glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'rgba(0,250,194,0.05)', filter: 'blur(150px)' }} />

      {/* Tribal mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
        <div className="w-[400px] h-[400px] border border-white rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white rotate-45" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(36px,6vw,80px)] font-normal text-white leading-[1.0] tracking-[-0.035em] mb-5"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {tagline}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="h-0.5 bg-teal mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-[15px] max-w-md mx-auto mb-14"
            style={{ fontFamily: 'var(--font-family-body)' }}
          >
            Let us show you what AI-powered engineering can do for your enterprise.
          </motion.p>
        </div>

        {/* Three floating action cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: MessageSquare, label: 'Talk to an Expert', desc: 'Connect with our industry specialists', href: cta.url },
            { icon: Calendar, label: 'Schedule a Demo', desc: 'See AAVA™ in action on your use case', href: '#' },
            { icon: Send, label: 'Get a Proposal', desc: 'Custom engagement tailored to you', href: '#' },
          ].map((action, i) => (
            <motion.a
              key={i}
              href={action.href}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease }}
              className="group block no-underline"
            >
              <div className="relative p-6 rounded-[4px] border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-teal/20 transition-all duration-300 text-center">
                <div className="w-10 h-10 rounded-sm bg-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/20 transition-colors">
                  <action.icon size={18} className="text-teal" />
                </div>
                <h3 className="text-white text-[14px] font-normal mb-1.5 group-hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.01em' }}>
                  {action.label}
                </h3>
                <p className="text-white/40 text-[12px] leading-relaxed" style={{ fontFamily: 'var(--font-family-body)' }}>
                  {action.desc}
                </p>
                {/* Bottom teal line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. SPLIT PANEL — Left: bold tagline. Right: action area
   Asymmetric, editorial tension
   ═══════════════════════════════════════════════════════ */
export function ClosingSplitPanel({ tagline, cta }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
        {/* Left — Statement */}
        <div className="relative bg-cream2 flex items-center py-20 px-[60px] max-lg:px-6 overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-40" />
          {/* Ghost tagline */}
          <div className="absolute bottom-4 left-6 pointer-events-none">
            <span className="text-[clamp(80px,14vw,180px)] font-extrabold leading-none text-black/[0.03]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
              AI
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-teal" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-g6" style={{ fontFamily: 'var(--font-family-display)' }}>Get in Touch</span>
            </div>
            <h2
              className="text-[clamp(28px,4vw,52px)] font-normal text-black leading-[1.06] tracking-[-0.025em]"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {tagline}
            </h2>
            <div className="h-0.5 bg-teal w-[52px] mt-6" />
          </motion.div>
        </div>

        {/* Right — Actions */}
        <div className="relative bg-k2 flex items-center py-20 px-12 max-lg:px-6">
          <div className="absolute inset-0 dot-grid-bg-dark" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,250,194,.06), transparent 60%)' }} />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="relative z-10 w-full max-w-md"
          >
            <p className="text-white/60 text-[15px] leading-[1.7] mb-10" style={{ fontFamily: 'var(--font-family-body)' }}>
              Let us show you what AI-powered engineering can do for your enterprise.
            </p>

            <div className="space-y-3">
              <a
                href={cta.url}
                className="group flex items-center justify-between w-full p-5 rounded-[4px] border border-white/10 bg-white/[0.03] hover:border-teal/25 hover:bg-white/[0.05] transition-all no-underline"
              >
                <div>
                  <h3 className="text-white text-[14px] font-normal mb-0.5 group-hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>{cta.label}</h3>
                  <p className="text-white/35 text-[11px]" style={{ fontFamily: 'var(--font-family-body)' }}>Connect with our team</p>
                </div>
                <ArrowRight size={16} className="text-teal/50 group-hover:text-teal group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="#"
                className="group flex items-center justify-between w-full p-5 rounded-[4px] border border-white/10 bg-white/[0.03] hover:border-teal/25 hover:bg-white/[0.05] transition-all no-underline"
              >
                <div>
                  <h3 className="text-white text-[14px] font-normal mb-0.5 group-hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>Get a Demo</h3>
                  <p className="text-white/35 text-[11px]" style={{ fontFamily: 'var(--font-family-body)' }}>See AAVA™ in action</p>
                </div>
                <ArrowRight size={16} className="text-teal/50 group-hover:text-teal group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. FLOATING CARD — Single elevated card on subtle bg,
   everything contained, premium feel
   ═══════════════════════════════════════════════════════ */
export function ClosingFloatingCard({ tagline, cta }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-cream">
      <div className="absolute inset-0 dot-grid-bg opacity-30" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
        >
          <div className="relative max-w-4xl mx-auto rounded-[6px] bg-white border border-black/7 overflow-hidden" style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)' }}>
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-violet via-teal to-violet/30" />

            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: Visual panel */}
              <div className="lg:col-span-2 relative bg-k2 p-8 flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 dot-grid-bg-dark" />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,250,194,.08), transparent 60%)' }} />
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-[15%] left-[20%] w-28 h-28 rounded-full border border-teal/20" />
                  <div className="absolute bottom-[20%] right-[15%] w-16 h-16 rounded-lg border border-teal/15 rotate-12" />
                </div>
                {/* Ascendion wordmark */}
                <div className="relative z-10 text-center">
                  <span className="text-[32px] font-extrabold text-white/10 tracking-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
                    Ascendion
                  </span>
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <div className="w-2 h-2 rounded-full bg-teal" />
                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/40" style={{ fontFamily: 'var(--font-family-display)' }}>Ready to connect</span>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={16} className="text-violet/40" />
                  <span className="text-[10px] uppercase tracking-[0.15em] text-g6" style={{ fontFamily: 'var(--font-family-display)' }}>Get in Touch</span>
                </div>

                <h2
                  className="text-[clamp(22px,3vw,36px)] font-normal text-black leading-[1.12] tracking-[-0.02em] mb-3"
                  style={{ fontFamily: 'var(--font-family-display)' }}
                >
                  {tagline}
                </h2>

                <p className="text-g6 text-[14px] leading-[1.7] mb-8" style={{ fontFamily: 'var(--font-family-body)' }}>
                  Let us show you what AI-powered engineering can do for your enterprise.
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={cta.url}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-violet text-white text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(100,100,215,0.35)] transition-all no-underline"
                    style={{ fontFamily: 'var(--font-family-display)' }}
                  >
                    {cta.label}
                    <ArrowRight size={14} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-black/12 text-black text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:border-violet/30 hover:text-violet transition-all no-underline"
                    style={{ fontFamily: 'var(--font-family-display)' }}
                  >
                    Get a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. MARQUEE BANNER — Full-width scrolling tagline,
   action area below, high-energy, bold
   ═══════════════════════════════════════════════════════ */
export function ClosingMarquee({ tagline, cta }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Duplicate tagline for seamless loop
  const marqueeText = `${tagline}  ·  ${tagline}  ·  ${tagline}  ·  `;

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream2">
      {/* Marquee strip */}
      <div className="relative py-10 border-y border-black/6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span
            className="text-[clamp(40px,6vw,72px)] font-normal text-black/[0.07] tracking-[-0.03em] pr-8"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {marqueeText}
          </span>
          <span
            className="text-[clamp(40px,6vw,72px)] font-normal text-black/[0.07] tracking-[-0.03em] pr-8"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {marqueeText}
          </span>
        </div>

        {/* Centered tagline on top of marquee */}
        <div className="absolute inset-0 flex items-center justify-center bg-cream2/80 backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] text-center px-6"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {tagline}
          </motion.h2>
        </div>
      </div>

      {/* Action row below */}
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-g6 text-[15px] max-w-md" style={{ fontFamily: 'var(--font-family-body)' }}>
            Let us show you what AI-powered engineering can do for your enterprise.
          </p>
          <div className="flex items-center gap-3 flex-wrap shrink-0">
            <a
              href={cta.url}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-violet text-white text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(100,100,215,0.35)] transition-all no-underline"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {cta.label} <ArrowRight size={14} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)] transition-all no-underline"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Get a Demo
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. MINIMAL TERMINAL — Dark, terminal/code aesthetic,
   command-line inspired CTA, techy confidence
   ═══════════════════════════════════════════════════════ */
export function ClosingTerminal({ tagline, cta }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-black">
      <div className="absolute inset-0 dot-grid-bg-dark" />

      <div className="relative z-10 max-w-3xl mx-auto px-[60px] max-lg:px-6">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="rounded-[6px] border border-white/10 overflow-hidden"
          style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}
        >
          {/* macOS-style header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/8">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="text-[10px] text-white/25 ml-3" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '0.05em' }}>
              ascendion — get-in-touch
            </span>
            <div className="flex-1" />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-[9px] text-teal/60" style={{ fontFamily: 'var(--font-family-display)' }}>Live</span>
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-8 bg-[#050e09]">
            {/* Tagline as terminal output */}
            <div className="mb-8">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-teal/60 text-[13px] shrink-0" style={{ fontFamily: 'monospace' }}>$</span>
                <span className="text-white/40 text-[13px]" style={{ fontFamily: 'monospace' }}>ascendion.describe --mission</span>
              </div>
              <h2
                className="text-[clamp(22px,3.5vw,40px)] font-normal text-white leading-[1.12] tracking-[-0.02em] pl-5 border-l-2 border-teal/30 ml-1"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                {tagline}
              </h2>
            </div>

            {/* Action commands */}
            <div className="space-y-2">
              {[
                { cmd: 'connect --expert', label: cta.label, href: cta.url },
                { cmd: 'schedule --demo', label: 'Get a Demo', href: '#' },
              ].map((action, i) => (
                <a
                  key={i}
                  href={action.href}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex items-center gap-3 p-3 rounded-sm hover:bg-white/[0.03] transition-all no-underline"
                >
                  <span className="text-teal/60 text-[13px] shrink-0" style={{ fontFamily: 'monospace' }}>$</span>
                  <span className="text-teal text-[13px] group-hover:text-teal transition-colors" style={{ fontFamily: 'monospace' }}>
                    {action.cmd}
                  </span>
                  <span className="flex-1" />
                  <span
                    className="text-white/30 text-[10px] uppercase tracking-[0.1em] group-hover:text-teal/70 transition-colors"
                    style={{ fontFamily: 'var(--font-family-display)' }}
                  >
                    {action.label}
                  </span>
                  <ArrowRight size={12} className="text-white/20 group-hover:text-teal group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Blinking cursor */}
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
              <span className="text-teal/60 text-[13px]" style={{ fontFamily: 'monospace' }}>$</span>
              <span className="w-2 h-4 bg-teal/60 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
