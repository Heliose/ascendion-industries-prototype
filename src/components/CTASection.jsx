import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];

const glowColors = [
  'radial-gradient(ellipse at 30% 50%, rgba(0,250,194,.15), transparent 60%)',
  'radial-gradient(ellipse at 70% 50%, rgba(100,100,215,.18), transparent 60%)',
  'radial-gradient(ellipse at 40% 70%, rgba(0,133,103,.15), transparent 60%)',
  'radial-gradient(ellipse at 60% 30%, rgba(0,250,194,.12), transparent 60%)',
];

function SectionRule({ label }) {
  return (
    <div className="section-rule mb-12">
      <span>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Editorial Card — large format, horizontal layout
   ═══════════════════════════════════════════════ */
function EditorialCard({ item, index, variant, isActive, total }) {
  const cardRef = useRef(null);

  return (
    <a
      ref={cardRef}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block no-underline flex-shrink-0 w-full"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[4px] bg-white border border-black/7 card-hover-light min-h-[320px]">

        {/* Left — Image area (dark) */}
        <div className="teal-line-reveal relative h-[240px] lg:h-auto bg-k2 overflow-hidden">
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid-bg-dark" />
          {/* Colored glow */}
          <div
            className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-150"
            style={{ background: glowColors[index % 4] }}
          />
          {/* Abstract shapes — editorial composition */}
          <div className="absolute inset-0 opacity-25">
            <div
              className="absolute w-32 h-32 rounded-full border border-teal/20 transition-transform duration-1000 group-hover:scale-110"
              style={{ top: '15%', right: '20%', transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
            />
            <div
              className="absolute w-20 h-20 rounded-lg border border-violet/15 rotate-12 transition-transform duration-1000 group-hover:rotate-[24deg]"
              style={{ bottom: '20%', left: '15%', transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5" />
            <div className="absolute top-[30%] left-[40%] w-4 h-4 rounded-full bg-teal/20" />
          </div>

          {/* Large ghost index number — editorial feel */}
          <div className="absolute bottom-4 right-6 pointer-events-none select-none">
            <span
              className="text-[clamp(80px,12vw,140px)] font-extrabold leading-none text-white/[0.04]"
              style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className="inline-flex items-center px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-sm"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {variant === 'outcome' ? 'Case Study' : 'Insight'}
            </span>
          </div>
        </div>

        {/* Right — Content area */}
        <div className="relative p-8 lg:p-10 flex flex-col justify-between">
          {/* Top: number + title */}
          <div>
            {/* Editorial number */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] text-violet/60 uppercase tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-black/8" />
            </div>

            {/* Title — larger, more editorial */}
            <h3
              className="text-black text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] tracking-[-0.015em] mb-4 group-hover:text-violet transition-colors duration-300"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-g6 text-[14px] leading-[1.7] mb-6" style={{ fontFamily: 'var(--font-family-body)' }}>
              {item.description || 'Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.'}
            </p>
          </div>

          {/* Bottom: CTA link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group-hover:gap-3.5 transition-all duration-300">
              <span
                className="text-violet text-[11px] uppercase tracking-[0.08em]"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                {variant === 'outcome' ? 'Read Case Study' : 'Read More'}
              </span>
              <ArrowRight size={14} className="text-teal transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Teal accent line at bottom — reveals on hover */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600"
            style={{ transitionTimingFunction: 'cubic-bezier(.16, 1, .3, 1)', boxShadow: '0 0 12px rgba(0, 250, 194, 0.3)' }}
          />
        </div>
      </div>
    </a>
  );
}

/* ═══════════════════════════════════════════════
   Compact Card — for when 4 items need a tighter grid
   ═══════════════════════════════════════════════ */
function CompactCard({ item, index, variant, total }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block no-underline"
    >
      <div className="relative overflow-hidden rounded-[4px] border border-black/7 bg-white card-hover-light h-full flex flex-col">
        {/* Image area */}
        <div className="teal-line-reveal relative w-full h-[180px] bg-k2 overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg-dark" />
          <div
            className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-150"
            style={{ background: glowColors[index % 4] }}
          />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-5 right-5 w-16 h-16 rounded-full border border-teal/20 transition-transform duration-700 group-hover:scale-110" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
            <div className="absolute bottom-5 left-5 w-10 h-10 rounded-lg border border-teal/15 rotate-12" />
          </div>
          {/* Ghost number */}
          <div className="absolute bottom-2 right-4 pointer-events-none select-none">
            <span className="text-[64px] font-extrabold leading-none text-white/[0.04]" style={{ fontFamily: 'var(--font-family-display)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-sm" style={{ fontFamily: 'var(--font-family-display)' }}>
              {variant === 'outcome' ? 'Case Study' : 'Insight'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-violet/50 uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-display)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 h-px bg-black/6" />
          </div>
          <h3
            className="text-black text-[clamp(14px,1.4vw,17px)] font-normal leading-[1.3] tracking-[-0.01em] mb-3 group-hover:text-violet transition-colors line-clamp-3 flex-1"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {item.title}
          </h3>
          <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            <span className="text-violet text-[10px] uppercase tracking-[0.08em]" style={{ fontFamily: 'var(--font-family-display)' }}>
              {variant === 'outcome' ? 'Read Case Study' : 'Read More'}
            </span>
            <ArrowRight size={12} className="text-teal transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
}

/* ═══════════════════════════════════════════════
   Main Section — Editorial carousel or stacked layout
   ═══════════════════════════════════════════════ */
export default function CTASection({ title, items, variant = 'outcome', id }) {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Use editorial layout (horizontal scroll) for 3 items, compact grid for 4
  const useEditorial = items.length <= 3;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate active index
    const cardWidth = el.scrollWidth / items.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !useEditorial) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState, useEditorial]);

  const scrollTo = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.85;
    el.scrollBy({ left: direction === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  const scrollToIndex = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  return (
    <section id={id} className="section-light relative py-24 overflow-hidden" ref={sectionRef}>
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={title} />

        {/* Header row: title + navigation */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10"
        >
          <div>
            <h2
              className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em]"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {title}
            </h2>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            {/* Progress dots */}
            {useEditorial && (
              <div className="flex items-center gap-1.5">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`rounded-full transition-all duration-300 border-none cursor-pointer ${
                      i === activeIndex
                        ? 'w-6 h-1.5 bg-violet'
                        : 'w-1.5 h-1.5 bg-black/15 hover:bg-black/30'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Arrow buttons */}
            {useEditorial && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollTo('prev')}
                  disabled={!canScrollLeft}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    canScrollLeft
                      ? 'border-black/15 text-black hover:border-violet hover:text-violet hover:bg-violet/5'
                      : 'border-black/8 text-black/20 cursor-not-allowed'
                  }`}
                  style={{ background: 'transparent' }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scrollTo('next')}
                  disabled={!canScrollRight}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    canScrollRight
                      ? 'border-black/15 text-black hover:border-violet hover:text-violet hover:bg-violet/5'
                      : 'border-black/8 text-black/20 cursor-not-allowed'
                  }`}
                  style={{ background: 'transparent' }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Page counter */}
            <span
              className="text-[10px] text-g6 uppercase tracking-[0.12em] ml-1"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {useEditorial ? `${activeIndex + 1} / ${items.length}` : `${items.length} items`}
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        {useEditorial ? (
          /* ── Editorial horizontal scroll carousel ── */
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <style>{`#${id} div::-webkit-scrollbar { display: none; }`}</style>
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
                  className="snap-start flex-shrink-0"
                  style={{ width: 'calc(85% - 10px)', minWidth: '320px', maxWidth: '780px' }}
                >
                  <EditorialCard item={item} index={i} variant={variant} total={items.length} isActive={i === activeIndex} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* ── 4-item compact grid with stagger ── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
              >
                <CompactCard item={item} index={i} variant={variant} total={items.length} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
