/*
  5 Alternate Client Outcomes Layouts
  Each exported as a named component.
  All share the same props: { title, items, variant, id }
*/
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const glows = [
  'radial-gradient(ellipse at 30% 50%, rgba(0,250,194,.14), transparent 60%)',
  'radial-gradient(ellipse at 70% 50%, rgba(100,100,215,.16), transparent 60%)',
  'radial-gradient(ellipse at 40% 70%, rgba(0,133,103,.14), transparent 60%)',
  'radial-gradient(ellipse at 60% 30%, rgba(0,250,194,.11), transparent 60%)',
];

function SectionRule({ label }) {
  return (
    <div className="section-rule mb-12">
      <span>{label}</span>
    </div>
  );
}

function ImagePlaceholder({ index, className = '', children }) {
  return (
    <div className={`teal-line-reveal relative bg-k2 overflow-hidden ${className}`}>
      <div className="absolute inset-0 dot-grid-bg-dark" />
      <div className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-150" style={{ background: glows[index % 4] }} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[12%] right-[15%] w-20 h-20 rounded-full border border-teal/20 transition-transform duration-1000 group-hover:scale-125" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
        <div className="absolute bottom-[15%] left-[12%] w-14 h-14 rounded-lg border border-violet/15 rotate-12 transition-transform duration-1000 group-hover:rotate-[28deg]" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5" />
      </div>
      {/* Ghost number */}
      <div className="absolute bottom-2 right-4 pointer-events-none select-none">
        <span className="text-[clamp(60px,10vw,120px)] font-extrabold leading-none text-white/[0.04]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      {children}
    </div>
  );
}

function Badge({ variant }) {
  return (
    <div className="absolute top-3 left-3 z-10">
      <span className="inline-flex items-center px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-sm" style={{ fontFamily: 'var(--font-family-display)' }}>
        {variant === 'outcome' ? 'Case Study' : 'Insight'}
      </span>
    </div>
  );
}

function CTALink({ variant }) {
  return (
    <div className="flex items-center gap-2 group-hover:gap-3.5 transition-all duration-300">
      <span className="text-violet text-[11px] uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-family-display)' }}>
        {variant === 'outcome' ? 'Read Case Study' : 'Read More'}
      </span>
      <ArrowRight size={13} className="text-teal transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  );
}

function TealBottomLine() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 z-10" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)', boxShadow: '0 0 12px rgba(0,250,194,0.3)' }} />
  );
}

/* ═══════════════════════════════════════════════════════
   1. BENTO GRID — Vercel / Linear style
   First card hero-sized, rest fill asymmetric grid
   ═══════════════════════════════════════════════════════ */
export function BentoGrid({ title, items, variant = 'outcome', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} className="section-light relative py-24 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Bento`} />
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-10"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {items.map((item, i) => {
            const isHero = i === 0;
            return (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease }}
                className={`group block no-underline ${isHero ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className="relative h-full overflow-hidden rounded-[4px] border border-black/7 bg-white card-hover-light flex flex-col">
                  <ImagePlaceholder index={i} className={isHero ? 'h-[280px] lg:h-[320px]' : 'h-[180px]'}>
                    <Badge variant={variant} />
                  </ImagePlaceholder>
                  <div className={`flex flex-col flex-1 ${isHero ? 'p-8' : 'p-5'}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] text-violet/50 uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-display)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1 h-px bg-black/6" />
                    </div>
                    <h3 className={`text-black font-normal leading-[1.25] tracking-[-0.015em] mb-3 group-hover:text-violet transition-colors flex-1 ${isHero ? 'text-[clamp(20px,2.5vw,30px)]' : 'text-[clamp(14px,1.4vw,17px)] line-clamp-3'}`} style={{ fontFamily: 'var(--font-family-display)' }}>
                      {item.title}
                    </h3>
                    {isHero && (
                      <p className="text-g6 text-[14px] leading-[1.7] mb-4 max-w-lg" style={{ fontFamily: 'var(--font-family-body)' }}>
                        {item.description || 'Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.'}
                      </p>
                    )}
                    <CTALink variant={variant} />
                  </div>
                  <TealBottomLine />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. HORIZONTAL FILMSTRIP — Apple keynote style
   Full-width horizontal scroll, scale-on-scroll, big counter
   ═══════════════════════════════════════════════════════ */
export function Filmstrip({ title, items, variant = 'outcome', id }) {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [activeIdx, setActiveIdx] = useState(0);

  const updateIdx = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.scrollWidth / items.length;
    setActiveIdx(Math.round(el.scrollLeft / w));
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateIdx, { passive: true });
    return () => el.removeEventListener('scroll', updateIdx);
  }, [updateIdx]);

  const goTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.scrollWidth / items.length;
    el.scrollTo({ left: w * idx, behavior: 'smooth' });
  };

  return (
    <section id={id} className="section-light relative py-24 overflow-hidden" ref={sectionRef}>
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Filmstrip`} />

        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em]"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {title}
          </motion.h2>

          {/* Large persistent counter */}
          <div className="flex items-baseline gap-1">
            <span className="text-[clamp(48px,6vw,80px)] font-extrabold text-violet leading-none tracking-[-0.04em]" style={{ fontFamily: 'var(--font-family-display)' }}>
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
            <span className="text-[16px] text-g6 mb-2" style={{ fontFamily: 'var(--font-family-display)' }}>
              / {String(items.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Full-bleed scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-[60px] max-lg:px-6 pb-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`.filmstrip-scroll::-webkit-scrollbar { display: none; }`}</style>
        {items.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
            className="group block no-underline snap-center flex-shrink-0"
            style={{ width: 'min(72vw, 820px)' }}
          >
            <div className="relative overflow-hidden rounded-[4px] border border-black/7 bg-white card-hover-light">
              <ImagePlaceholder index={i} className="h-[260px] lg:h-[340px]">
                <Badge variant={variant} />
                {/* Large cinematic number overlay */}
                <div className="absolute bottom-4 right-6 pointer-events-none">
                  <span className="text-[clamp(100px,16vw,200px)] font-extrabold leading-none text-white/[0.05]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </ImagePlaceholder>
              <div className="p-7">
                <h3 className="text-black text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] tracking-[-0.015em] mb-3 group-hover:text-violet transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>
                  {item.title}
                </h3>
                <p className="text-g6 text-[14px] leading-[1.7] mb-5 max-w-lg" style={{ fontFamily: 'var(--font-family-body)' }}>
                  {item.description || 'Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.'}
                </p>
                <CTALink variant={variant} />
              </div>
              <TealBottomLine />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 mt-6 flex items-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 border-none cursor-pointer ${i === activeIdx ? 'w-8 h-2 bg-violet' : 'w-2 h-2 bg-black/12 hover:bg-black/25'}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. STACKED REVEAL — Stripe / Palantir style
   Full-width cards with sticky overlap + parallax
   ═══════════════════════════════════════════════════════ */
export function StackedReveal({ title, items, variant = 'outcome', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} className="section-light relative py-24 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Stacked`} />
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-14"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {title}
        </motion.h2>

        <div className="space-y-6">
          {items.map((item, i) => (
            <StackCard key={i} item={item} index={i} variant={variant} total={items.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({ item, index, variant, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97]);

  return (
    <motion.div ref={ref} style={{ scale }}>
      <motion.a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
        className="group block no-underline"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-[4px] border border-black/7 bg-white card-hover-light">
          {/* Number column */}
          <div className="hidden lg:flex items-center justify-center bg-cream2/60 border-r border-black/5 p-6">
            <span className="text-[clamp(48px,6vw,80px)] font-extrabold text-violet/15 leading-none" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Image column */}
          <div className="lg:col-span-2">
            <motion.div style={{ y }} className="h-full">
              <ImagePlaceholder index={index} className="h-[200px] lg:h-full lg:min-h-[220px]">
                <Badge variant={variant} />
              </ImagePlaceholder>
            </motion.div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-2 p-7 lg:p-9 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] text-violet/50 uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-display)' }}>
                {variant === 'outcome' ? 'Case Study' : 'Insight'} {String(index + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-black/6" />
            </div>
            <h3 className="text-black text-[clamp(18px,2.2vw,26px)] font-normal leading-[1.2] tracking-[-0.015em] mb-3 group-hover:text-violet transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>
              {item.title}
            </h3>
            <p className="text-g6 text-[14px] leading-[1.7] mb-5" style={{ fontFamily: 'var(--font-family-body)' }}>
              {item.description || 'Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.'}
            </p>
            <CTALink variant={variant} />
          </div>

          <TealBottomLine />
        </div>
      </motion.a>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   4. SPOTLIGHT SELECTOR — Interactive panel
   Left list + right detail panel
   ═══════════════════════════════════════════════════════ */
export function SpotlightSelector({ title, items, variant = 'outcome', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(0);

  return (
    <section id={id} className="section-light relative py-24 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Spotlight`} />
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-12"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[420px]">
          {/* Left: Selector list */}
          <div className="lg:col-span-2 space-y-1">
            {items.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
                onClick={() => setSelected(i)}
                onMouseEnter={() => setSelected(i)}
                className={`group/item w-full text-left p-5 rounded-[4px] border transition-all duration-300 cursor-pointer ${
                  selected === i
                    ? 'bg-white border-violet/20 shadow-[0_8px_32px_rgba(100,100,215,0.08)]'
                    : 'bg-transparent border-transparent hover:bg-white/60 hover:border-black/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <span className={`text-[28px] font-extrabold leading-none tracking-[-0.03em] transition-colors shrink-0 ${selected === i ? 'text-violet' : 'text-black/10'}`} style={{ fontFamily: 'var(--font-family-display)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-[15px] font-normal leading-[1.3] tracking-[-0.01em] transition-colors line-clamp-2 ${selected === i ? 'text-black' : 'text-g6'}`} style={{ fontFamily: 'var(--font-family-display)' }}>
                      {item.title}
                    </h4>
                    {selected === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3, ease }}
                        className="mt-2"
                      >
                        <span className="text-violet text-[10px] uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-family-display)' }}>
                          {variant === 'outcome' ? 'View Case Study →' : 'Read More →'}
                        </span>
                      </motion.div>
                    )}
                  </div>
                  {/* Active indicator */}
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 transition-colors ${selected === i ? 'bg-teal' : 'bg-transparent'}`} />
                </div>

                {/* Progress line at bottom */}
                {selected === i && (
                  <motion.div
                    layoutId="spotlight-line"
                    className="h-0.5 bg-violet mt-4 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.a
                key={selected}
                href={items[selected]?.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease }}
                className="group block no-underline h-full"
              >
                <div className="relative h-full overflow-hidden rounded-[4px] border border-black/7 bg-white card-hover-light flex flex-col">
                  <ImagePlaceholder index={selected} className="h-[240px] lg:h-[280px]">
                    <Badge variant={variant} />
                    <div className="absolute bottom-4 right-6 pointer-events-none">
                      <span className="text-[clamp(80px,14vw,160px)] font-extrabold leading-none text-white/[0.05]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
                        {String(selected + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </ImagePlaceholder>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] text-violet/50 uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-display)' }}>
                        {variant === 'outcome' ? 'Case Study' : 'Insight'} {String(selected + 1).padStart(2, '0')} of {String(items.length).padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-px bg-black/6" />
                    </div>
                    <h3 className="text-black text-[clamp(20px,2.5vw,30px)] font-normal leading-[1.2] tracking-[-0.015em] mb-3 group-hover:text-violet transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>
                      {items[selected]?.title}
                    </h3>
                    <p className="text-g6 text-[14px] leading-[1.7] mb-6 flex-1" style={{ fontFamily: 'var(--font-family-body)' }}>
                      {items[selected]?.description || 'Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.'}
                    </p>
                    <CTALink variant={variant} />
                  </div>
                  <TealBottomLine />
                </div>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. MAGAZINE SPREAD — Editorial alternating rows
   Full-width rows alternating image side
   ═══════════════════════════════════════════════════════ */
export function MagazineSpread({ title, items, variant = 'outcome', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} className="section-light relative py-24 overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Magazine`} />
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-14"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          {title}
        </motion.h2>

        <div className="space-y-5">
          {items.map((item, i) => (
            <MagazineRow key={i} item={item} index={i} variant={variant} total={items.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MagazineRow({ item, index, variant, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <motion.a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease }}
      className="group block no-underline"
    >
      <div className={`relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[4px] border border-black/7 bg-white card-hover-light min-h-[280px]`}>
        {/* Image side */}
        <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
          <ImagePlaceholder index={index} className="h-[220px] lg:h-full">
            <Badge variant={variant} />
            <div className="absolute bottom-3 right-5 pointer-events-none">
              <span className="text-[clamp(100px,16vw,180px)] font-extrabold leading-none text-white/[0.04]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </ImagePlaceholder>
        </div>

        {/* Content side */}
        <div className={`flex flex-col justify-center p-8 lg:p-12 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[32px] font-extrabold text-violet/12 leading-none" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.03em' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 h-px bg-black/6" />
            <span className="text-[10px] text-violet/40 uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-display)' }}>
              {variant === 'outcome' ? 'Case Study' : 'Insight'}
            </span>
          </div>

          <h3 className="text-black text-[clamp(20px,2.5vw,30px)] font-normal leading-[1.2] tracking-[-0.015em] mb-4 group-hover:text-violet transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>
            {item.title}
          </h3>
          <p className="text-g6 text-[14px] leading-[1.7] mb-6 max-w-md" style={{ fontFamily: 'var(--font-family-body)' }}>
            {item.description || 'Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.'}
          </p>
          <CTALink variant={variant} />
        </div>

        <TealBottomLine />
      </div>
    </motion.a>
  );
}
