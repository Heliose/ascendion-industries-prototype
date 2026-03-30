/*
  5 Rolodex Variations — selector + preview panel concept,
  each with a unique layout/theme/interaction twist.
  Props: { title, items, variant, id }
*/
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';

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

function ImageArea({ index, height = 'h-[260px]', className = '' }) {
  return (
    <div className={`relative ${height} overflow-hidden ${className}`}>
      <div className="absolute inset-0 dot-grid-bg-dark" />
      <div className="absolute inset-0" style={{ background: glows[index % 4] }} />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[12%] right-[18%] w-24 h-24 rounded-full border border-teal/20" />
        <div className="absolute bottom-[18%] left-[12%] w-16 h-16 rounded-lg border border-violet/15 rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-white/5" />
      </div>
      <div className="absolute bottom-3 right-5">
        <span className="text-[clamp(64px,10vw,120px)] font-extrabold leading-none text-white/[0.04]" style={pnm}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   1. ROLODEX LIGHT — Cream bg, violet accents,
   horizontal tabs top + large card below
   ═══════════════════════════════════════════════════════ */
export function RolodexLight({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id={id} ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Rolodex Light`} />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-10"
          style={pnm}>{title}</motion.h2>

        {/* Horizontal tab row */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {items.map((item, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`flex-shrink-0 px-5 py-3 rounded-[2px] border text-[11px] uppercase tracking-[0.08em] cursor-pointer transition-all duration-300 ${
                active === i
                  ? 'bg-violet text-white border-violet shadow-[0_4px_16px_rgba(100,100,215,0.2)]'
                  : 'bg-white text-g6 border-black/8 hover:border-violet/25 hover:text-black'
              }`} style={pnm}>
              <span className="mr-2 opacity-40">{String(i + 1).padStart(2, '0')}</span>
              <span className="hidden md:inline">{item.title.split(':')[0].slice(0, 30)}</span>
              <span className="md:hidden">#{i + 1}</span>
            </button>
          ))}
        </div>

        {/* Large preview card */}
        <AnimatePresence mode="wait">
          <motion.a key={active} href={items[active]?.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
            className="group block no-underline">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2px] border border-black/7 bg-white card-hover-light">
              <ImageArea index={active} height="h-[220px] lg:h-auto" className="lg:min-h-[300px]" />
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center px-2.5 py-1 border border-violet/15 text-violet bg-violet/5 text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                      {variant === 'outcome' ? 'Case Study' : 'Insight'}
                    </span>
                    <span className="text-[11px] text-black/25 uppercase tracking-[0.12em]" style={pnm}>
                      {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-black text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] tracking-[-0.015em] mb-4 group-hover:text-violet transition-colors" style={pnm}>
                    {items[active]?.title}
                  </h3>
                  <p className="text-g6 text-[14px] leading-[1.7] mb-6" style={inter}>
                    Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-violet text-[11px] uppercase tracking-[0.08em]" style={pnm}>Read More</span>
                  <ArrowRight size={14} className="text-teal group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.a>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. ROLODEX STACKED — Dark bg, cards visually stacked
   behind the active one (deck effect), click to cycle
   ═══════════════════════════════════════════════════════ */
export function RolodexStacked({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % items.length);
  const prev = () => setActive((active - 1 + items.length) % items.length);

  return (
    <section id={id} ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Stacked`} dark />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-white leading-[1.06] tracking-[-0.025em] mb-14"
          style={pnm}>{title}</motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Stacked cards behind */}
          {items.map((_, i) => {
            const offset = i - active;
            if (offset < 0 || offset > 2) return null;
            return (
              <div key={i} className="absolute inset-x-0 top-0 rounded-[2px] border border-white/6 bg-white/[0.02]"
                style={{
                  transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.03})`,
                  opacity: offset === 0 ? 0 : 0.3 - offset * 0.1,
                  zIndex: 10 - offset,
                  height: '100%',
                  transition: 'all 0.5s cubic-bezier(.16,1,.3,1)',
                }} />
            );
          })}

          {/* Active card */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.5, ease }}
              className="relative z-20">
              <a href={items[active]?.url} target="_blank" rel="noopener noreferrer" className="group block no-underline">
                <div className="relative rounded-[2px] border border-white/10 bg-white/[0.04] overflow-hidden hover:border-teal/20 transition-all">
                  <ImageArea index={active} height="h-[240px]" />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-2.5 py-1 bg-teal/10 text-teal text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                        {variant === 'outcome' ? 'Case Study' : 'Insight'}
                      </span>
                      <span className="text-white/20 text-[11px] uppercase tracking-[0.12em]" style={pnm}>
                        {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                      </span>
                    </div>
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
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-teal/30 transition-all cursor-pointer bg-transparent">
              <ChevronRight size={16} className="rotate-180" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none ${active === i ? 'w-8 bg-teal' : 'w-1.5 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-teal/30 transition-all cursor-pointer bg-transparent">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. ROLODEX SIDEBAR — Light bg, narrow vertical sidebar
   with numbers on left, full-width content right,
   content slides horizontally
   ═══════════════════════════════════════════════════════ */
export function RolodexSidebar({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id={id} ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Sidebar`} />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em] mb-12"
          style={pnm}>{title}</motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Narrow number sidebar */}
          <div className="lg:col-span-1 flex lg:flex-col gap-1 mb-4 lg:mb-0">
            {items.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`relative w-full py-4 lg:py-6 rounded-[2px] cursor-pointer border-none transition-all duration-300 text-center ${
                  active === i ? 'bg-violet' : 'bg-white hover:bg-violet/5'
                }`}>
                <span className={`text-[20px] font-extrabold leading-none tracking-[-0.03em] ${active === i ? 'text-white' : 'text-black/15'}`} style={pnm}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {active === i && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-cream translate-x-full" />}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="lg:col-span-11 lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.a key={active} href={items[active]?.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease }}
                className="group block no-underline">
                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-[2px] border border-black/7 bg-white overflow-hidden card-hover-light">
                  {/* Image — 2 cols */}
                  <div className="lg:col-span-2">
                    <ImageArea index={active} height="h-[200px] lg:h-full" className="lg:min-h-[320px]" />
                  </div>
                  {/* Content — 3 cols */}
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center px-2.5 py-1 border border-violet/15 text-violet bg-violet/5 text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                          {variant === 'outcome' ? 'Case Study' : 'Insight'}
                        </span>
                        <div className="flex-1 h-px bg-black/6" />
                      </div>
                      <h3 className="text-black text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] tracking-[-0.015em] mb-4 group-hover:text-violet transition-colors" style={pnm}>
                        {items[active]?.title}
                      </h3>
                      <p className="text-g6 text-[14px] leading-[1.7] mb-6" style={inter}>
                        Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-violet text-[11px] uppercase tracking-[0.08em]" style={pnm}>Read Full Article</span>
                      <ExternalLink size={12} className="text-teal group-hover:translate-x-0.5 transition-transform" />
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
   4. ROLODEX MINIMAL — Dark bg, ultra-minimal text-only
   selector with large typography reveal
   ═══════════════════════════════════════════════════════ */
export function RolodexMinimal({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id={id} ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Minimal`} dark />
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
          className="text-[clamp(28px,4vw,56px)] font-normal text-white leading-[1.06] tracking-[-0.025em] mb-16"
          style={pnm}>{title}</motion.h2>

        {/* Title list — each item is a large hoverable text line */}
        <div className="space-y-0 mb-12">
          {items.map((item, i) => (
            <div key={i} onClick={() => setActive(i)}
              className={`group cursor-pointer border-b border-white/6 py-5 flex items-center gap-6 transition-all duration-300 ${
                active === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}>
              <span className={`text-[clamp(24px,3vw,40px)] font-extrabold leading-none tracking-[-0.04em] shrink-0 transition-colors ${
                active === i ? 'text-teal' : 'text-white/10'
              }`} style={pnm}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={`text-[clamp(16px,2vw,22px)] font-normal tracking-[-0.01em] transition-colors line-clamp-1 ${
                active === i ? 'text-white' : 'text-white/50 group-hover:text-white/70'
              }`} style={pnm}>
                {item.title}
              </h3>
              {active === i && (
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="w-2 h-2 rounded-full bg-teal shrink-0 ml-auto shadow-[0_0_8px_rgba(0,250,194,0.4)]" />
              )}
            </div>
          ))}
        </div>

        {/* Preview panel below */}
        <AnimatePresence mode="wait">
          <motion.a key={active} href={items[active]?.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
            className="group block no-underline">
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-[2px] border border-white/8 bg-white/[0.02] overflow-hidden hover:border-teal/15 transition-all">
              <ImageArea index={active} height="h-[200px] lg:h-full" className="lg:min-h-[200px]" />
              <div className="lg:col-span-2 p-8 flex items-center">
                <div>
                  <p className="text-white/[0.92] text-[14px] leading-[1.7] mb-5" style={inter}>
                    Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-teal text-[11px] uppercase tracking-[0.08em]" style={pnm}>Read More</span>
                    <ArrowRight size={14} className="text-teal group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. ROLODEX AUTO — Light bg, auto-advancing with
   progress bar, compact horizontal pills + wide card
   ═══════════════════════════════════════════════════════ */
export function RolodexAuto({ title, items, variant = 'insight', id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 5s
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, items.length]);

  return (
    <section id={id} ref={ref} className="relative py-24 overflow-hidden bg-cream"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label={`${title} — Auto`} />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}
            className="text-[clamp(28px,4vw,56px)] font-normal text-black leading-[1.06] tracking-[-0.025em]"
            style={pnm}>{title}</motion.h2>
          <span className="text-[10px] text-g6 uppercase tracking-[0.15em] mt-2 md:mt-0" style={pnm}>
            {paused ? 'Paused' : 'Auto-advancing'} · {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
        </div>

        {/* Progress pills */}
        <div className="flex gap-1.5 mb-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="flex-1 h-1 rounded-full overflow-hidden cursor-pointer border-none bg-black/6 p-0">
              <div className={`h-full rounded-full transition-all duration-300 ${
                i < active ? 'bg-violet w-full' : i === active ? 'bg-teal' : 'bg-transparent'
              }`}
                style={i === active && !paused ? {
                  width: '100%',
                  animation: 'progress-fill 5s linear',
                } : i === active ? { width: '100%' } : { width: i < active ? '100%' : '0%' }}
              />
            </button>
          ))}
        </div>

        {/* Active card */}
        <AnimatePresence mode="wait">
          <motion.a key={active} href={items[active]?.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease }}
            className="group block no-underline">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2px] border border-black/7 bg-white card-hover-light">
              <ImageArea index={active} height="h-[220px] lg:h-auto" className="lg:min-h-[300px]" />
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center px-2.5 py-1 border border-violet/15 text-violet bg-violet/5 text-[9px] uppercase tracking-[0.12em] rounded-[2px]" style={pnm}>
                      {variant === 'outcome' ? 'Case Study' : 'Insight'}
                    </span>
                    <div className="flex-1 h-px bg-black/6" />
                    <span className="text-black/20 text-[24px] font-extrabold leading-none" style={pnm}>{String(active + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-black text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] tracking-[-0.015em] mb-4 group-hover:text-violet transition-colors" style={pnm}>
                    {items[active]?.title}
                  </h3>
                  <p className="text-g6 text-[14px] leading-[1.7] mb-6" style={inter}>
                    Discover how Ascendion engineering transforms enterprise outcomes with AI-powered solutions.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-violet text-[11px] uppercase tracking-[0.08em]" style={pnm}>Read More</span>
                    <ArrowRight size={14} className="text-teal group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
