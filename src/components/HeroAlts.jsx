/*
  5 Alternative Hero / Overview Layouts
  Each exported as a named component.
  All share the same props: { title, intro }
*/
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1];

function GradientWord({ word }) {
  return <span className="gradient-text">{word}</span>;
}

function ScrollIndicator() {
  return (
    <a
      href="#metrics"
      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-g6 hover:text-black transition-colors no-underline"
      style={{ fontFamily: 'var(--font-family-display)' }}
    >
      Scroll to explore
      <span className="text-teal">&#8595;</span>
    </a>
  );
}

/* ═══════════════════════════════════════════════════════
   1. CINEMATIC FULL-BLEED — Dark hero, extreme typography
   Title fills the screen at massive scale
   ═══════════════════════════════════════════════════════ */
export function HeroCinematic({ title, intro }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = title.split(' ');

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg-dark" />

      {/* Ambient teal glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'rgba(0,250,194,0.04)', filter: 'blur(120px)' }} />

      {/* Tribal mark watermark */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none opacity-[0.04]">
        <div className="w-[300px] h-[300px] border border-white rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] border border-white rotate-45" />
      </div>

      <motion.div style={{ y: titleY, opacity }} className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase tracking-[0.22em] text-teal/60" style={{ fontFamily: 'var(--font-family-display)' }}>
            Industry Focus
          </span>
        </motion.div>

        {/* Title — extreme scale, fills width */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="text-[clamp(40px,7vw,96px)] font-extrabold text-white leading-[0.95] tracking-[-0.04em] mb-8 max-w-5xl"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {words.map((word, i) => (
            <span key={i}>
              {i === 0 ? <span className="gradient-text-dark">{word}</span> : <span> {word}</span>}
            </span>
          ))}
        </motion.h1>

        {/* Teal rule */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="h-0.5 bg-teal mb-8"
        />

        {/* Intro — lighter treatment */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="text-white/70 text-[16px] leading-[1.7] max-w-xl mb-10"
          style={{ fontFamily: 'var(--font-family-body)' }}
        >
          {intro}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="#metrics" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-teal/60 hover:text-teal transition-colors no-underline" style={{ fontFamily: 'var(--font-family-display)' }}>
            Scroll to explore <span className="text-teal">↓</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Section label — vertical, right edge */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 [writing-mode:vertical-rl]" style={{ fontFamily: 'var(--font-family-display)' }}>
          {title}
        </span>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. EDITORIAL STACK — Title at extreme width on top,
   then content + visual side-by-side below
   ═══════════════════════════════════════════════════════ */
export function HeroEditorial({ title, intro }) {
  const words = title.split(' ');

  return (
    <section className="relative min-h-[81vh] overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        {/* Top zone — title fills full width */}
        <div className="pt-32 pb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
            className="mb-4"
          >
            <span className="text-[10px] uppercase tracking-[0.22em] text-violet/50" style={{ fontFamily: 'var(--font-family-display)' }}>
              Industry
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="text-[clamp(36px,6.5vw,88px)] font-normal text-black leading-[0.95] tracking-[-0.035em]"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {words.map((word, i) => (
              <span key={i}>
                {i === 0 ? <GradientWord word={word} /> : <span> {word}</span>}
              </span>
            ))}
          </motion.h1>

          {/* Full-width teal rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="h-px bg-teal/30 mt-8 origin-left"
          />
        </div>

        {/* Bottom zone — split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-20">
          {/* Left: intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <div className="border-l-[3px] border-violet pl-6">
              <p className="text-[16px] text-g6 leading-[1.75] max-w-md" style={{ fontFamily: 'var(--font-family-body)' }}>
                {intro}
              </p>
            </div>
            <div className="mt-8 pl-6">
              <ScrollIndicator />
            </div>
          </motion.div>

          {/* Right: abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="relative h-[280px] lg:h-auto rounded-[4px] bg-cream2 overflow-hidden"
          >
            <div className="absolute inset-0 dot-grid-bg" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-[10%] left-[15%] w-40 h-40 rounded-full border border-teal/15" />
              <div className="absolute top-[25%] right-[20%] w-56 h-56 rounded-full border border-violet/10" />
              <div className="absolute bottom-[15%] left-[30%] w-24 h-24 rounded-lg border border-teal/12 rotate-12" />
              <div className="absolute top-[50%] left-[50%] w-4 h-4 rounded-full bg-teal/15" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
            {/* Ghost text */}
            <div className="absolute bottom-4 right-6 pointer-events-none">
              <span className="text-[clamp(100px,18vw,200px)] font-extrabold leading-none text-black/[0.03]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
                {words[0]}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. OVERLAPPING OFFSET — Asymmetric, content breaks grid
   Visual panel offset behind text, editorial tension
   ═══════════════════════════════════════════════════════ */
export function HeroOverlap({ title, intro }) {
  const words = title.split(' ');

  return (
    <section className="relative min-h-[81vh] flex items-center overflow-hidden bg-cream">
      {/* Large offset visual panel — behind content */}
      <div className="absolute top-[10%] right-0 w-[55%] h-[80%] hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="w-full h-full rounded-l-[4px] bg-k2 overflow-hidden relative"
        >
          <div className="absolute inset-0 dot-grid-bg-dark" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(0,250,194,.1), transparent 60%)' }} />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[15%] left-[20%] w-40 h-40 rounded-full border border-teal/20" />
            <div className="absolute bottom-[20%] right-[15%] w-28 h-28 rounded-lg border border-teal/15 rotate-12" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/5" />
          </div>
          {/* Giant ghost word */}
          <div className="absolute bottom-6 right-8 pointer-events-none">
            <span className="text-[clamp(120px,20vw,280px)] font-extrabold leading-none text-white/[0.03]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
              {words[0]}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Content — overlaps the visual, breaks grid */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6 w-full py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 border border-black rounded-sm mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] text-black" style={{ fontFamily: 'var(--font-family-display)' }}>
                Industry
              </span>
            </div>

            <h1
              className="text-[clamp(32px,5vw,68px)] font-normal text-black leading-[1.02] tracking-[-0.03em] mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {words.map((word, i) => (
                <span key={i}>
                  {i === 0 ? <GradientWord word={word} /> : <span> {word}</span>}
                </span>
              ))}
            </h1>

            <div className="h-0.5 bg-teal mb-8 w-[52px]" />
          </motion.div>

          {/* Intro — with frosted glass card that overlaps the dark panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="relative lg:ml-12 lg:w-[110%] bg-white/80 backdrop-blur-xl border border-black/7 rounded-[4px] p-8"
          >
            <p className="text-[15px] text-g6 leading-[1.7]" style={{ fontFamily: 'var(--font-family-body)' }}>
              {intro}
            </p>
            <div className="mt-6">
              <ScrollIndicator />
            </div>
            {/* Teal accent */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-violet rounded-l-[4px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. DATA GRID — Dashboard-inspired structured hero
   Title + intro + key signals all visible in a structured grid
   ═══════════════════════════════════════════════════════ */
export function HeroDataGrid({ title, intro }) {
  const words = title.split(' ');

  return (
    <section className="relative min-h-[81vh] flex items-end overflow-hidden bg-cream">
      <div className="absolute inset-0 dot-grid-bg opacity-60" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6 w-full py-20">
        {/* Top: Industry label with line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-8 h-px bg-teal" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-g6" style={{ fontFamily: 'var(--font-family-display)' }}>
            Industry Overview
          </span>
          <div className="flex-1 h-px bg-black/8" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4">
          {/* Title — spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <h1
              className="text-[clamp(32px,5vw,64px)] font-normal text-black leading-[1.02] tracking-[-0.03em]"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {words.map((word, i) => (
                <span key={i}>
                  {i === 0 ? <GradientWord word={word} /> : <span> {word}</span>}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Status panel — spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="lg:col-span-5 flex items-end"
          >
            <div className="w-full rounded-[4px] border border-black/7 bg-white p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-teal" />
                <span className="text-[10px] uppercase tracking-[0.15em] text-g6" style={{ fontFamily: 'var(--font-family-display)' }}>Active Engagements</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['AI Agents', 'Platforms', 'Workflows'].map((label, i) => (
                  <div key={i} className="text-center p-3 rounded-sm bg-cream/60">
                    <div className="text-[20px] font-extrabold text-violet leading-none mb-1" style={{ fontFamily: 'var(--font-family-display)' }}>
                      {['12+', '8', '24+'][i]}
                    </div>
                    <div className="text-[9px] text-g6 uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-family-display)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Intro — spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="lg:col-span-7"
          >
            <div className="border-l-[3px] border-violet pl-5 mt-4">
              <p className="text-[15px] text-g6 leading-[1.7]" style={{ fontFamily: 'var(--font-family-body)' }}>
                {intro}
              </p>
            </div>
            <div className="mt-8 pl-5">
              <ScrollIndicator />
            </div>
          </motion.div>

          {/* Quick links panel — spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="lg:col-span-5"
          >
            <div className="rounded-[4px] border border-black/7 bg-white/60 p-5">
              {['How We Deliver', 'Client Outcomes', 'Ideas & Insights'].map((label, i) => (
                <a key={i} href={`#${label.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0 no-underline group/link">
                  <span className="text-[12px] text-black/70 group-hover/link:text-violet transition-colors" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.01em' }}>{label}</span>
                  <span className="text-[10px] text-teal group-hover/link:translate-x-0.5 transition-transform">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. CENTERED STATEMENT — Minimal, confident, type-driven
   Centered layout, title is THE statement, nothing else competes
   ═══════════════════════════════════════════════════════ */
export function HeroCentered({ title, intro }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = title.split(' ');

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-cream">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-40" />

      {/* Ambient violet glow — very subtle */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'rgba(100,100,215,0.03)', filter: 'blur(100px)' }} />

      {/* Decorative circles — very light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute top-[15%] left-[8%] w-[300px] h-[300px] rounded-full border border-black/[0.03]" />
        <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] rounded-full border border-teal/[0.06]" />
        <div className="absolute top-[40%] right-[12%] w-3 h-3 rounded-full bg-teal/10" />
        <div className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-violet/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-[60px] max-lg:px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 border border-black/10 rounded-sm text-[10px] uppercase tracking-[0.2em] text-g6" style={{ fontFamily: 'var(--font-family-display)' }}>
            Industry
          </span>
        </motion.div>

        {/* Title — centered, large */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
          className="text-[clamp(36px,6vw,80px)] font-normal text-black leading-[1.0] tracking-[-0.035em] mb-6"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {words.map((word, i) => (
            <span key={i}>
              {i === 0 ? <GradientWord word={word} /> : <span> {word}</span>}
            </span>
          ))}
        </motion.h1>

        {/* Centered teal rule */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 64 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="h-0.5 bg-teal mx-auto mb-8"
        />

        {/* Intro — centered, constrained width */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="text-[16px] text-g6 leading-[1.75] max-w-2xl mx-auto mb-10"
          style={{ fontFamily: 'var(--font-family-body)' }}
        >
          {intro}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
