import { motion } from 'framer-motion';

export default function HeroSection({ title, intro }) {
  return (
    <section className="relative min-h-[81vh] flex items-center overflow-hidden bg-cream">
      {/* Hero image placeholder — left 42% */}
      <div className="absolute left-0 top-0 bottom-0 w-[42%] hidden lg:block">
        <div className="w-full h-full relative overflow-hidden group">
          {/* Brand-filtered image area with noise + dot-grid */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream2 to-cream3 noise-overlay">
            {/* Dot grid pattern */}
            <div className="absolute inset-0 dot-grid-bg" />
            {/* Abstract placeholder shapes — layered */}
            <div className="absolute inset-0">
              {/* Layer 1 — large subtle circles */}
              <div className="absolute top-[10%] left-[10%] w-48 h-48 rounded-full border border-teal/10" />
              <div className="absolute top-[20%] left-[20%] w-64 h-64 rounded-full border border-teal/8" />
              {/* Layer 2 — mid shapes */}
              <div className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full border border-violet/10" />
              <div className="absolute bottom-[25%] left-[15%] w-20 h-20 rounded-lg border border-teal/15 rotate-12" />
              {/* Layer 3 — small accent dots */}
              <div className="absolute top-[45%] left-[35%] w-4 h-4 rounded-full bg-teal/10" />
              <div className="absolute top-[60%] left-[60%] w-3 h-3 rounded-full bg-violet/10" />
              <div className="absolute bottom-[30%] right-[25%] w-6 h-6 rounded-full border border-teal/12" />
            </div>
            {/* Teal duotone overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent pointer-events-none" />
          </div>

          {/* Teal bottom-line reveal on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600" style={{ transitionTimingFunction: 'cubic-bezier(.16, 1, .3, 1)', boxShadow: '0 0 12px rgba(0, 250, 194, 0.4)' }} />

          {/* Fade edge into content */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, transparent 52%, #F4F3EF 96%)' }} />

          {/* Slide counter */}
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2">
            <span className="text-[10px] tracking-[0.15em] uppercase text-g6" style={{ fontFamily: 'var(--font-family-display)' }}>01 / 05</span>
          </div>
        </div>
      </div>

      {/* Content — right 58% */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6 w-full">
        <div className="lg:ml-[44%] max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title */}
            <h1
              className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {title.split(' ').map((word, i) => (
                <span key={i}>
                  {i === 0 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    <span> {word}</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Teal rule */}
            <div className="h-0.5 bg-teal mb-8 w-[52px]" />

            {/* Intro — with violet left-border highlight */}
            <div className="border-l-[3px] border-violet pl-5 mb-10">
              <p className="text-[15px] text-g6 leading-[1.7]" style={{ fontFamily: 'var(--font-family-body)' }}>
                {intro}
              </p>
            </div>

            {/* Scroll indicator — NO CTA buttons per design system */}
            <a
              href="#metrics"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-g6 hover:text-black transition-colors no-underline"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Scroll to explore
              <span className="text-teal">&#8595;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
