/*
  5 FRESH "Ideas & Insights" Layouts — unique patterns NOT used elsewhere.
  Props: { title, items, variant, id }
*/
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ExternalLink, BookOpen, Newspaper, Sparkles } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1];
const pnm = { fontFamily: 'var(--font-family-display)' };
const inter = { fontFamily: 'var(--font-family-body)' };

const glows = [
  'radial-gradient(ellipse at 25% 40%, rgba(0,250,194,.12), transparent 55%)',
  'radial-gradient(ellipse at 75% 60%, rgba(100,100,215,.14), transparent 55%)',
  'radial-gradient(ellipse at 50% 30%, rgba(0,133,103,.12), transparent 55%)',
  'radial-gradient(ellipse at 40% 70%, rgba(0,250,194,.10), transparent 55%)',
];

function SectionRule({ label, dark }) {
  const line = dark ? 'bg-white/8' : 'bg-black/8';
  const text = dark ? 'text-white/35' : 'text-black/35';
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className={`flex-1 h-px ${line}`} />
      <span className={`text-[10px] uppercase tracking-[0.2em] whitespace-nowrap ${text}`} style={pnm}>{label}</span>
      <div className={`flex-1 h-px ${line}`} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   1. TIMELINE — Vertical timeline with alternating
   left/right cards connected by a teal line
   ═══════════════════════════════════════════════════════ */
export function InsightsTimeline({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Timeline`} />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-16 text-center"
          style={pnm}>{title}</motion.h2>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/30 via-violet/20 to-teal/30 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: isLeft ? -30 : 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${i > 0 ? 'lg:mt-[-40px]' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_rgba(0,250,194,0.4)]" />
                  </div>

                  {/* Card */}
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className={`group block no-underline ${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                    <div className="relative rounded-[2px] border border-black/7 bg-white overflow-hidden card-hover-light">
                      {/* Image area */}
                      <div className="relative h-[140px] bg-k2 overflow-hidden">
                        <div className="absolute inset-0 dot-grid-bg-dark" />
                        <div className="absolute inset-0" style={{ background: glows[i % 4] }} />
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 right-4 w-14 h-14 rounded-full border border-teal/20" />
                        </div>
                        {/* Number */}
                        <div className="absolute bottom-2 right-4">
                          <span className="text-[48px] font-extrabold leading-none text-white/[0.05]" style={pnm}>{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                            {variant === 'outcome' ? 'Case Study' : 'Insight'}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                      </div>

                      <div className="p-6">
                        <h3 className="text-black text-[15px] font-normal leading-[1.35] tracking-[-0.01em] mb-3 group-hover:text-violet transition-colors" style={pnm}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          <span className="text-violet text-[10px] uppercase tracking-[0.1em]" style={pnm}>Read More</span>
                          <ArrowUpRight size={11} className="text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. ROLODEX — Dark bg, one card visible at a time with
   vertical flip/slide navigation
   ═══════════════════════════════════════════════════════ */
export function InsightsRolodex({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id={id} ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Rolodex`} dark />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-white leading-[1.06] tracking-[-0.025em] mb-14"
          style={pnm}>{title}</motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Item selector */}
          <div className="space-y-2">
            {items.map((item, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-[2px] border cursor-pointer transition-all duration-300 ${
                  active === i
                    ? 'bg-teal/8 border-teal/25'
                    : 'bg-white/[0.02] border-white/8 hover:border-white/15 hover:bg-white/[0.04]'
                }`}>
                <div className="flex items-center gap-3">
                  <span className={`text-[24px] font-extrabold leading-none tracking-[-0.03em] ${active === i ? 'text-teal' : 'text-white/10'}`} style={pnm}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className={`text-[13px] font-normal line-clamp-2 transition-colors ${active === i ? 'text-white' : 'text-white/50'}`} style={pnm}>
                    {item.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active card display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.a key={active} href={items[active]?.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease }}
                className="group block no-underline">
                <div className="relative rounded-[2px] border border-white/10 bg-white/[0.03] overflow-hidden hover:border-teal/20 transition-all">
                  {/* Large image area */}
                  <div className="relative h-[280px] overflow-hidden">
                    <div className="absolute inset-0 dot-grid-bg-dark" />
                    <div className="absolute inset-0" style={{ background: glows[active % 4] }} />
                    <div className="absolute inset-0 opacity-25">
                      <div className="absolute top-[10%] left-[15%] w-28 h-28 rounded-full border border-teal/20" />
                      <div className="absolute bottom-[15%] right-[20%] w-20 h-20 rounded-lg border border-violet/15 rotate-12" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/5" />
                    </div>
                    {/* Ghost number */}
                    <div className="absolute bottom-4 right-6">
                      <span className="text-[clamp(80px,12vw,140px)] font-extrabold leading-none text-white/[0.04]" style={pnm}>
                        {String(active + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                        {variant === 'outcome' ? 'Case Study' : 'Insight'}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                  </div>

                  <div className="p-8">
                    <h3 className="text-white text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] tracking-[-0.015em] mb-4 group-hover:text-teal transition-colors" style={pnm}>
                      {items[active]?.title}
                    </h3>
                    <p className="text-white/[0.92] text-[14px] leading-[1.7] mb-6" style={inter}>
                      Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-teal text-[11px] uppercase tracking-[0.08em]" style={pnm}>Read More</span>
                      <ArrowRight size={14} className="text-teal group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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
   3. TICKER FEED — Light bg, news-ticker style horizontal
   scrolling strip with peek cards
   ═══════════════════════════════════════════════════════ */
export function InsightsTickerFeed({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Duplicate items for infinite scroll illusion
  const doubled = [...items, ...items];

  return (
    <section id={id} ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 mb-10">
        <SectionRule label={`${title} — Ticker`} />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em]"
          style={pnm}>{title}</motion.h2>
      </div>

      {/* Scrolling ticker strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-ticker-scroll">
          {doubled.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
              className="group block no-underline flex-shrink-0" style={{ width: 'min(380px, 75vw)' }}>
              <div className="relative rounded-[2px] border border-black/7 bg-white overflow-hidden card-hover-light h-full">
                {/* Compact image */}
                <div className="relative h-[120px] bg-k2 overflow-hidden">
                  <div className="absolute inset-0 dot-grid-bg-dark" />
                  <div className="absolute inset-0" style={{ background: glows[i % 4] }} />
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-full border border-teal/20" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                      {variant === 'outcome' ? 'Case Study' : 'Insight'}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                </div>
                <div className="p-5">
                  <h3 className="text-black text-[14px] font-normal leading-[1.35] tracking-[-0.01em] mb-3 group-hover:text-violet transition-colors line-clamp-2" style={pnm}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-violet text-[10px] uppercase tracking-[0.1em]" style={pnm}>Read</span>
                    <ArrowUpRight size={10} className="text-teal" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-scroll {
          animation: ticker-scroll 30s linear infinite;
        }
        .animate-ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. MOSAIC GRID — Dark bg, variable-height masonry-like
   grid with offset positions
   ═══════════════════════════════════════════════════════ */
export function InsightsMosaic({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Create offset heights for masonry effect
  const heights = ['340px', '280px', '320px', '300px'];

  return (
    <section id={id} ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Mosaic`} dark />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-white leading-[1.06] tracking-[-0.025em] mb-14"
          style={pnm}>{title}</motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4" style={{ columnFill: 'balance' }}>
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease }}
              className="break-inside-avoid mb-4">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block no-underline">
                <div className="relative rounded-[2px] border border-white/8 bg-white/[0.03] overflow-hidden hover:border-teal/20 transition-all"
                  style={{ minHeight: heights[i % 4] }}>
                  {/* Full background treatment */}
                  <div className="absolute inset-0 dot-grid-bg-dark" />
                  <div className="absolute inset-0" style={{ background: glows[i % 4] }} />
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute top-[10%] right-[15%] w-20 h-20 rounded-full border border-teal/25 transition-transform duration-1000 group-hover:scale-150" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                    <div className="absolute bottom-[15%] left-[10%] w-14 h-14 rounded-lg border border-violet/20 rotate-12" />
                  </div>

                  {/* Ghost number */}
                  <div className="absolute top-4 right-5">
                    <span className="text-[64px] font-extrabold leading-none text-white/[0.04]" style={pnm}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content pinned to bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <span className="inline-flex items-center px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white/80 text-[9px] uppercase tracking-[0.12em] rounded-[2px] mb-3" style={pnm}>
                      {variant === 'outcome' ? 'Case Study' : 'Insight'}
                    </span>
                    <h3 className="text-white text-[15px] font-normal leading-[1.35] tracking-[-0.01em] mb-3 group-hover:text-teal transition-colors" style={pnm}>
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-teal text-[10px] uppercase tracking-[0.1em]" style={pnm}>Read More</span>
                      <ArrowUpRight size={11} className="text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom teal line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. ACCORDION DIGEST — Light bg, full-width expandable
   rows with large preview on expand, reading-list style
   ═══════════════════════════════════════════════════════ */
export function InsightsAccordionDigest({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id={id} ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Digest`} />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-14"
          style={pnm}>{title}</motion.h2>

        <div className="border-t border-black/7">
          {items.map((item, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}>
                <div className={`border-b border-black/7 transition-all duration-300 ${isOpen ? 'bg-white' : ''}`}>
                  {/* Header row */}
                  <div className="flex items-center gap-6 py-6 cursor-pointer group" onClick={() => setExpanded(isOpen ? null : i)}>
                    {/* Number */}
                    <span className={`text-[32px] font-extrabold leading-none tracking-[-0.04em] shrink-0 transition-colors ${isOpen ? 'text-violet' : 'text-black/[0.06]'}`} style={pnm}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Badge */}
                    <span className={`hidden md:inline-flex items-center px-2.5 py-1 border text-[9px] uppercase tracking-[0.12em] rounded-[2px] shrink-0 ${
                      isOpen ? 'border-violet/20 text-violet bg-violet/5' : 'border-black/8 text-g6'
                    }`} style={pnm}>
                      {variant === 'outcome' ? 'Case Study' : 'Insight'}
                    </span>

                    {/* Title */}
                    <h3 className={`flex-1 text-[clamp(15px,1.8vw,20px)] font-normal tracking-[-0.01em] transition-colors line-clamp-1 ${
                      isOpen ? 'text-violet' : 'text-black group-hover:text-violet'
                    }`} style={pnm}>
                      {item.title}
                    </h3>

                    {/* Arrow */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'border-violet/20 bg-violet/5 rotate-90' : 'border-black/10 group-hover:border-violet/20'
                    }`}>
                      <ArrowRight size={14} className={isOpen ? 'text-violet' : 'text-black/30'} />
                    </div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease }}>
                        <div className="pb-8 pl-[calc(32px+24px)] md:pl-[calc(32px+24px+70px)]">
                          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            {/* Image preview */}
                            <div className="lg:col-span-2 relative h-[180px] rounded-[2px] bg-k2 overflow-hidden">
                              <div className="absolute inset-0 dot-grid-bg-dark" />
                              <div className="absolute inset-0" style={{ background: glows[i % 4] }} />
                              <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-[15%] right-[15%] w-16 h-16 rounded-full border border-teal/20" />
                                <div className="absolute bottom-[20%] left-[10%] w-12 h-12 rounded-lg border border-teal/15 rotate-12" />
                              </div>
                            </div>

                            {/* Description + CTA */}
                            <div className="lg:col-span-3 flex flex-col justify-between">
                              <div>
                                <h4 className="text-black text-[17px] font-normal leading-[1.3] tracking-[-0.01em] mb-3" style={pnm}>{item.title}</h4>
                                <p className="text-g6 text-[14px] leading-[1.7] mb-5" style={inter}>
                                  Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.
                                </p>
                              </div>
                              <a href={item.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet text-white text-[11px] uppercase tracking-[0.1em] rounded-[2px] hover:shadow-[0_8px_28px_rgba(100,100,215,0.35)] transition-all no-underline self-start"
                                style={pnm}>
                                Read Full Article
                                <ExternalLink size={12} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
