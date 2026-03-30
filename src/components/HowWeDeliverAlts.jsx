/*
  5 Alternative "How We Deliver" Layouts
  Each handles both standard (flat services) and Healthcare (sub-sections with sub-items).
  All share the same props: { industry }

  Design system compliance:
  - Section padding: py-24 (96px) consistently
  - Container: max-w-[1360px] px-[60px] / max-lg:px-6
  - Dark sections: bg-black (#000), text-white or rgba(255,255,255,.92) — never grey
  - Light sections: bg-cream (#F4F3EF)
  - Teal (#00FAC2) for accents on dark, violet (#6464D7) for accents on light
  - PP Neue Machina for display, Inter for body
  - Border-radius: rounded-[2px] (AAVA standard)
*/
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, ChevronDown, Layers, Zap, Shield, Database, Settings, FlaskConical, Dna, Brain, FileCheck, Factory, BarChart3, Eye, Pill, Microscope } from 'lucide-react';

const icons = [Layers, Zap, Shield, Database, Settings, FlaskConical, Dna, Brain, FileCheck, Factory, BarChart3, Eye, Pill, Microscope, Layers];
const ease = [0.16, 1, 0.3, 1];
const pnm = { fontFamily: 'var(--font-family-display)' };
const inter = { fontFamily: 'var(--font-family-body)' };

/* ── Shared Sub-Components ── */

function SectionRule({ label, dark }) {
  const lineColor = dark ? 'bg-white/8' : 'bg-black/8';
  const textColor = dark ? 'text-white/35' : 'text-black/35';
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className={`flex-1 h-px ${lineColor}`} />
      <span className={`text-[10px] uppercase tracking-[0.2em] whitespace-nowrap ${textColor}`} style={pnm}>{label}</span>
      <div className={`flex-1 h-px ${lineColor}`} />
    </div>
  );
}

function SectionHeading({ children, dark }) {
  return (
    <h2 className={`text-[clamp(28px,4vw,56px)] font-normal leading-[1.06] tracking-[-0.025em] mb-12 ${dark ? 'text-white' : 'text-black'}`} style={pnm}>
      {children}
    </h2>
  );
}

function SubToggle({ sections, active, onToggle, dark = true }) {
  return (
    <div className="flex justify-center mb-10">
      <div className={`inline-flex p-1 rounded-[2px] ${dark ? 'bg-white/5 border border-white/10' : 'bg-black/[0.03] border border-black/8'}`}>
        {sections.map((s) => (
          <button key={s.title} onClick={() => onToggle(s.title)}
            className={`relative px-7 py-2.5 rounded-[2px] text-[11px] font-normal uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer border-none ${
              active === s.title ? (dark ? 'text-black' : 'text-white') : (dark ? 'text-white/50 hover:text-white' : 'text-black/40 hover:text-black')
            }`} style={pnm}>
            {active === s.title && <div className={`absolute inset-0 ${dark ? 'bg-teal' : 'bg-violet'} rounded-[2px]`} />}
            <span className="relative z-10">{s.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function getServices(industry, activeSubSection) {
  if (industry.hasSubSections) {
    const sub = industry.subSections.find(s => s.title === activeSubSection);
    return sub?.services || [];
  }
  return industry.services || [];
}

/* ═══════════════════════════════════════════════════════
   1. NUMBERED EDITORIAL — Light bg, large numbered rows,
   full-width, magazine-style editorial treatment
   ═══════════════════════════════════════════════════════ */
export function HWDEditorial({ industry }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSub, setActiveSub] = useState(industry.hasSubSections ? industry.subSections[0].title : null);
  const [expanded, setExpanded] = useState(null);
  const services = getServices(industry, activeSub);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label="How We Deliver — Editorial" />

        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}>
          <SectionHeading>How We Deliver</SectionHeading>
        </motion.div>

        {industry.hasSubSections && <SubToggle sections={industry.subSections} active={activeSub} onToggle={(t) => { setActiveSub(t); setExpanded(null); }} dark={false} />}

        <div>
          {services.map((service, i) => {
            const isOpen = expanded === i;

            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}>
                <div onClick={() => setExpanded(isOpen ? null : i)}
                  className={`group cursor-pointer border-b border-black/7 py-8 transition-all duration-300 ${isOpen ? 'bg-white' : 'hover:bg-white/50'}`}>

                  <div className="flex items-start gap-8 lg:gap-12">
                    {/* Large number */}
                    <span className={`text-[clamp(36px,4.5vw,64px)] font-extrabold leading-none tracking-[-0.04em] shrink-0 transition-colors ${isOpen ? 'text-violet' : 'text-black/[0.06] group-hover:text-black/10'}`} style={pnm}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-[clamp(18px,2.2vw,26px)] font-normal tracking-[-0.015em] transition-colors ${isOpen ? 'text-violet' : 'text-black group-hover:text-violet'}`} style={pnm}>
                          {service.title}
                        </h3>
                        <ChevronDown size={18} className={`text-black/25 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-violet' : ''}`} />
                      </div>

                      {!isOpen && (
                        <p className="text-g6 text-[13px] mt-2 line-clamp-1 max-w-2xl" style={inter}>
                          {service.description || service.subItems?.map(s => s.label).join(' · ')}
                        </p>
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease }}>
                        <div className="mt-6 ml-[calc(clamp(36px,4.5vw,64px)+32px)] lg:ml-[calc(clamp(36px,4.5vw,64px)+48px)]">
                          <div className="h-px bg-gradient-to-r from-violet/20 to-transparent mb-6" />
                          {service.subItems ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {service.subItems.map((item, j) => (
                                <div key={j} className="p-5 rounded-[2px] border border-black/5 bg-cream hover:border-violet/15 transition-all">
                                  <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                                    <div>
                                      <h4 className="text-[13px] font-normal text-black mb-1" style={pnm}>{item.label}</h4>
                                      <p className="text-g6 text-[13px] leading-[1.65]" style={inter}>{item.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-g6 text-[15px] leading-[1.7] max-w-2xl" style={inter}>{service.description}</p>
                          )}
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

/* ═══════════════════════════════════════════════════════
   2. CARD GRID — Dark bg, icon-driven cards in a grid,
   click to expand in-place
   ═══════════════════════════════════════════════════════ */
export function HWDCardGrid({ industry }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSub, setActiveSub] = useState(industry.hasSubSections ? industry.subSections[0].title : null);
  const [expanded, setExpanded] = useState(null);
  const services = getServices(industry, activeSub);

  return (
    <section ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label="How We Deliver — Card Grid" dark />

        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}>
          <SectionHeading dark>How We Deliver</SectionHeading>
        </motion.div>

        {industry.hasSubSections && <SubToggle sections={industry.subSections} active={activeSub} onToggle={(t) => { setActiveSub(t); setExpanded(null); }} />}

        <div className={`grid gap-4 ${services.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            const isOpen = expanded === i;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
                className={isOpen && service.subItems ? 'md:col-span-2 lg:col-span-3' : ''}>
                <div onClick={() => setExpanded(isOpen ? null : i)}
                  className={`group relative h-full cursor-pointer rounded-[2px] border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-teal/5 border-teal/20' : 'bg-white/[0.03] border-white/8 hover:border-teal/15 hover:bg-white/[0.05]'
                  }`}>
                  <div className={`h-0.5 transition-all duration-500 ${isOpen ? 'bg-teal' : 'bg-transparent group-hover:bg-teal/30'}`} />

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-11 h-11 rounded-[2px] flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-teal/15' : 'bg-white/5 group-hover:bg-teal/8'}`}>
                        <Icon size={20} className={isOpen ? 'text-teal' : 'text-white/40 group-hover:text-teal/70'} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-[16px] font-normal tracking-[-0.01em] transition-colors ${isOpen ? 'text-teal' : 'text-white'}`} style={pnm}>
                          {service.title}
                        </h3>
                      </div>
                      <ChevronRight size={14} className={`text-white/30 transition-transform shrink-0 mt-1 ${isOpen ? 'rotate-90 text-teal' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isOpen ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                          <div className="h-px bg-gradient-to-r from-teal/20 to-transparent mb-5" />
                          {service.subItems ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {service.subItems.map((item, j) => (
                                <div key={j} className="p-4 rounded-[2px] bg-white/[0.03] border border-white/6">
                                  <div className="flex items-start gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                                    <div>
                                      <span className="text-[13px] text-white font-normal" style={pnm}>{item.label}</span>
                                      <p className="text-white/[0.92] text-[13px] leading-[1.65] mt-1" style={inter}>{item.description}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-white/[0.92] text-[15px] leading-[1.7]" style={inter}>{service.description}</p>
                          )}
                        </motion.div>
                      ) : (
                        <p className="text-white/[0.92] text-[13px] line-clamp-2" style={inter}>
                          {service.description || service.subItems?.map(s => s.label).join(', ')}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. HORIZONTAL SCROLL PANELS — Each service is a card
   in a horizontal scroll container with scroll-snap
   ═══════════════════════════════════════════════════════ */
export function HWDHorizontalPanels({ industry }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSub, setActiveSub] = useState(industry.hasSubSections ? industry.subSections[0].title : null);
  const services = getServices(industry, activeSub);

  return (
    <section ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 mb-10">
        <SectionRule label="How We Deliver — Panels" dark />
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}>
          <SectionHeading dark>How We Deliver</SectionHeading>
        </motion.div>
        {industry.hasSubSections && <SubToggle sections={industry.subSections} active={activeSub} onToggle={(t) => setActiveSub(t)} />}
      </div>

      <div className="flex gap-5 overflow-x-auto px-[60px] max-lg:px-6 pb-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          const items = service.subItems || (service.description ? [{ label: '', description: service.description }] : []);
          return (
            <motion.div key={service.title} initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
              className="snap-start flex-shrink-0" style={{ width: 'min(75vw, 540px)' }}>
              <div className="relative h-full rounded-[2px] border border-white/8 bg-white/[0.03] overflow-hidden group hover:border-teal/15 transition-all">
                {/* Top bar */}
                <div className="flex items-center gap-3 p-6 border-b border-white/6">
                  <div className="w-10 h-10 rounded-[2px] bg-teal/10 flex items-center justify-center">
                    <Icon size={18} className="text-teal" />
                  </div>
                  <h3 className="text-white text-[16px] font-normal tracking-[-0.01em]" style={pnm}>
                    {service.title}
                  </h3>
                  <span className="ml-auto text-[32px] font-extrabold text-white/[0.05] leading-none" style={pnm}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6 space-y-3">
                  {items.map((item, j) => (
                    <div key={j} className="p-4 rounded-[2px] bg-white/[0.02] border border-white/5 hover:border-teal/10 transition-all">
                      {item.label && <h4 className="text-[13px] text-teal/80 mb-1.5" style={pnm}>{item.label}</h4>}
                      <p className="text-white/[0.92] text-[13px] leading-[1.65]" style={inter}>{item.description}</p>
                    </div>
                  ))}
                </div>
                {/* Bottom teal line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. TABBED SPOTLIGHT — Light bg, vertical tabs left,
   large detail panel right with crossfade transitions
   ═══════════════════════════════════════════════════════ */
export function HWDTabbedSpotlight({ industry }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSub, setActiveSub] = useState(industry.hasSubSections ? industry.subSections[0].title : null);
  const [selected, setSelected] = useState(0);
  const services = getServices(industry, activeSub);
  const current = services[selected] || services[0];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-cream">
      <div className="absolute inset-0 dot-grid-bg opacity-30" />
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label="How We Deliver — Spotlight" />

        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}>
          <SectionHeading>How We Deliver</SectionHeading>
        </motion.div>

        {industry.hasSubSections && <SubToggle sections={industry.subSections} active={activeSub} onToggle={(t) => { setActiveSub(t); setSelected(0); }} dark={false} />}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[380px]">
          {/* Left tabs */}
          <div className="lg:col-span-2 space-y-1.5">
            {services.map((service, i) => {
              const Icon = icons[i % icons.length];
              return (
                <button key={service.title} onClick={() => setSelected(i)} onMouseEnter={() => setSelected(i)}
                  className={`w-full text-left p-5 rounded-[2px] border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                    selected === i ? 'bg-white border-violet/15 shadow-[0_4px_20px_rgba(100,100,215,0.06)]' : 'bg-transparent border-transparent hover:bg-white/60'
                  }`}>
                  <div className={`w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0 transition-colors ${selected === i ? 'bg-violet/10' : 'bg-black/[0.03]'}`}>
                    <Icon size={18} className={selected === i ? 'text-violet' : 'text-g6'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-[14px] font-normal tracking-[-0.01em] transition-colors ${selected === i ? 'text-black' : 'text-g6'}`} style={pnm}>
                      {service.title}
                    </h4>
                  </div>
                  {selected === i && <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Right detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={selected} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.35, ease }}
                className="h-full rounded-[2px] border border-black/7 bg-white p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[32px] font-extrabold text-violet/10 leading-none" style={pnm}>{String(selected + 1).padStart(2, '0')}</span>
                  <h3 className="text-[20px] font-normal text-black tracking-[-0.015em]" style={pnm}>{current.title}</h3>
                </div>
                <div className="h-px bg-gradient-to-r from-violet/15 to-transparent mb-6" />

                {current.subItems ? (
                  <div className="space-y-3">
                    {current.subItems.map((item, j) => (
                      <div key={j} className="flex items-start gap-3 p-4 rounded-[2px] bg-cream border border-black/4 hover:border-violet/10 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                        <div>
                          <h4 className="text-[13px] text-black mb-1" style={pnm}>{item.label}</h4>
                          <p className="text-g6 text-[13px] leading-[1.65]" style={inter}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-g6 text-[15px] leading-[1.7]" style={inter}>{current.description}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. STACKED MAGAZINE — Dark bg, full-width alternating
   rows with image placeholder + content, editorial numbers
   ═══════════════════════════════════════════════════════ */
export function HWDStackedMagazine({ industry }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeSub, setActiveSub] = useState(industry.hasSubSections ? industry.subSections[0].title : null);
  const services = getServices(industry, activeSub);

  return (
    <section ref={ref} className="section-dark relative py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <SectionRule label="How We Deliver — Magazine" dark />
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }}>
          <SectionHeading dark>How We Deliver</SectionHeading>
        </motion.div>
        {industry.hasSubSections && <SubToggle sections={industry.subSections} active={activeSub} onToggle={setActiveSub} />}

        <div className="space-y-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            const isEven = i % 2 === 0;
            const items = service.subItems || (service.description ? [{ label: '', description: service.description }] : []);

            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease }}>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[2px] border border-white/8 bg-white/[0.02] overflow-hidden hover:border-teal/12 transition-all group">
                  {/* Visual side */}
                  <div className={`relative min-h-[240px] bg-white/[0.02] overflow-hidden ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="absolute inset-0 dot-grid-bg-dark" />
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-[15%] right-[20%] w-24 h-24 rounded-full border border-teal/20 transition-transform duration-1000 group-hover:scale-125" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                      <div className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-lg border border-teal/15 rotate-12" />
                    </div>
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at ${isEven ? '30%' : '70%'} 50%, rgba(0,250,194,.06), transparent 60%)` }} />
                    {/* Ghost number */}
                    <div className={`absolute bottom-4 ${isEven ? 'right-6' : 'left-6'} pointer-events-none`}>
                      <span className="text-[clamp(80px,14vw,160px)] font-extrabold leading-none text-white/[0.04]" style={{ ...pnm, letterSpacing: '-0.04em' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Icon centered */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-[2px] bg-teal/10 flex items-center justify-center">
                        <Icon size={28} className="text-teal/60" />
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] text-teal/50 uppercase tracking-[0.15em]" style={pnm}>
                        Service {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 h-px bg-white/6" />
                    </div>
                    <h3 className="text-white text-[clamp(18px,2vw,24px)] font-normal leading-[1.2] tracking-[-0.015em] mb-5 group-hover:text-teal transition-colors" style={pnm}>
                      {service.title}
                    </h3>
                    {items.length > 1 ? (
                      <div className="space-y-3">
                        {items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                            <div>
                              {item.label && <span className="text-[12px] text-teal/70 mr-1" style={pnm}>{item.label}:</span>}
                              <span className="text-white/[0.92] text-[13px] leading-[1.65]" style={inter}>{item.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white/[0.92] text-[15px] leading-[1.7]" style={inter}>{service.description}</p>
                    )}
                  </div>

                  {/* Bottom teal line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
