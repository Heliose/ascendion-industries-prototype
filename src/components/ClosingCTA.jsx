import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ClosingCTA({ tagline, cta }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="closing" className="relative py-32 overflow-hidden bg-cream2" ref={ref}>
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid-bg opacity-50" />

      {/* Ambient teal glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0, 250, 194, 0.06)', filter: 'blur(100px)' }}
      />

      {/* Tribal mark watermark — diamond */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[240px] h-[240px] border border-black/[0.06] rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] border border-black/[0.04] rotate-45" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tagline */}
          <h2
            className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-4"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {tagline}
          </h2>

          {/* Sub-copy */}
          <p
            className="text-g6 text-[16px] mb-10 max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.01em' }}
          >
            Let us show you what AI-powered engineering can do for your enterprise.
          </p>

          {/* Two CTA buttons side by side */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)] transition-all no-underline"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Get a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
