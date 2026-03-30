import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ChevronRight, Layers, Zap, Shield, Database, Settings, FlaskConical, Dna, Brain, FileCheck, Factory, BarChart3, Eye, Pill, Microscope } from 'lucide-react';

const serviceIcons = [Layers, Zap, Shield, Database, Settings, FlaskConical, Dna, Brain, FileCheck, Factory, BarChart3, Eye, Pill, Microscope, Layers];
const ease = [0.16, 1, 0.3, 1];

function SectionRule({ label }) {
  return (
    <div className="section-rule text-white/50 mb-12">
      <span className="text-white/35">{label}</span>
    </div>
  );
}

function SubSectionToggle({ sections, activeSection, onToggle }) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex p-1 rounded-sm bg-white/5 border border-white/10">
        {sections.map((section) => (
          <button
            key={section.title}
            onClick={() => onToggle(section.title)}
            className={`relative px-7 py-2.5 rounded-sm text-[11px] font-normal uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer border-none ${
              activeSection === section.title
                ? 'text-black'
                : 'text-white/50 hover:text-white'
            }`}
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {activeSection === section.title && (
              <div className="absolute inset-0 bg-teal rounded-sm" />
            )}
            <span className="relative z-10">{section.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function HealthcareTile({ service, index, onSelect, isActive, globalIconIndex }) {
  const Icon = serviceIcons[globalIconIndex % serviceIcons.length];
  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      onClick={() => onSelect(service)}
      className={`group relative text-left p-5 rounded-sm border transition-all duration-300 cursor-pointer w-full ${
        isActive
          ? 'bg-teal/8 border-teal/30'
          : 'bg-white/3 border-white/8 hover:border-teal/15 hover:bg-white/5'
      }`}
    >
      <div className="flex items-start gap-3.5">
        <div className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
          isActive ? 'bg-teal/15' : 'bg-white/5 group-hover:bg-teal/8'
        }`}>
          <Icon size={18} className={isActive ? 'text-teal' : 'text-white/40 group-hover:text-teal/70'} />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`text-[13px] font-normal tracking-[-0.01em] mb-0.5 transition-colors ${isActive ? 'text-teal' : 'text-white'}`}
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {service.title}
          </h3>
          <p className="text-white/40 text-[12px] leading-relaxed" style={{ fontFamily: 'var(--font-family-body)' }}>
            {service.subItems ? `${service.subItems.length} capabilities` : service.description?.slice(0, 50) + '...'}
          </p>
        </div>
        <ChevronRight size={14} className={`text-white/30 shrink-0 mt-1 transition-transform ${isActive ? 'rotate-90 text-teal' : ''}`} />
      </div>
    </motion.button>
  );
}

function DetailPanel({ service, onClose }) {
  if (!service) return null;
  const items = service.subItems || [{ label: service.title, description: service.description }];
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.4, ease }}
      className="bg-k1 border border-white/8 rounded-sm p-7 h-full overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-7">
        <h3 className="text-[18px] font-normal text-white tracking-[-0.01em]" style={{ fontFamily: 'var(--font-family-display)' }}>
          {service.title}
        </h3>
        <button onClick={onClose} className="w-7 h-7 rounded-sm bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer border-none">
          <X size={14} />
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, ease }}
            className="p-4 rounded-sm bg-white/3 border border-white/5 hover:border-teal/15 transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
              <div>
                <h4 className="text-[13px] font-normal text-white mb-1 group-hover:text-teal transition-colors" style={{ fontFamily: 'var(--font-family-display)' }}>
                  {item.label}
                </h4>
                <p className="text-white/70 text-[13px] leading-[1.65]" style={{ fontFamily: 'var(--font-family-body)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function StandardTile({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = serviceIcons[index % serviceIcons.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`group relative cursor-pointer transition-all duration-300 border-b border-white/7 ${
          expanded ? 'bg-teal/5 pl-2.5' : 'hover:pl-2 hover:bg-white/[0.02]'
        }`}
        style={{ padding: expanded ? '28px 0 28px 10px' : '28px 0' }}
      >
        {/* Teal left-bar reveal */}
        <div className={`absolute left-0 top-0 w-0.5 bg-teal transition-all duration-400 ${expanded ? 'h-full' : 'h-0 group-hover:h-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(.16, 1, .3, 1)' }} />

        {/* No top border on first item — section rule above handles it */}

        <div className="flex items-start gap-4">
          <div className={`w-11 h-11 rounded-sm flex items-center justify-center shrink-0 transition-all ${
            expanded ? 'bg-teal/15' : 'bg-white/5 group-hover:bg-teal/8'
          }`}>
            <Icon size={20} className={expanded ? 'text-teal' : 'text-white/40 group-hover:text-teal/70'} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className={`text-[17px] font-normal tracking-[-0.01em] transition-colors ${expanded ? 'text-teal' : 'text-white'}`} style={{ fontFamily: 'var(--font-family-display)' }}>
                {service.title}
              </h3>
              <ChevronRight size={14} className={`text-white/30 transition-transform ${expanded ? 'rotate-90 text-teal' : ''}`} />
            </div>
            {!expanded && (
              <p className="text-white/50 text-[13px] line-clamp-2" style={{ fontFamily: 'var(--font-family-body)' }}>{service.description.slice(0, 90)}...</p>
            )}
          </div>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease }}
              className="overflow-hidden"
            >
              <div className="mt-5 pl-[60px]">
                <div className="h-px bg-gradient-to-r from-teal/20 to-transparent mb-4" />
                <p className="text-white/85 text-[14px] leading-[1.7]" style={{ fontFamily: 'var(--font-family-body)' }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function HowWeDeliver({ industry }) {
  const [activeSubSection, setActiveSubSection] = useState(
    industry.hasSubSections ? industry.subSections[0].title : null
  );
  const [selectedService, setSelectedService] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentSubSection = industry.hasSubSections
    ? industry.subSections.find((s) => s.title === activeSubSection)
    : null;

  return (
    <section id="how-we-deliver" className="section-dark relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6" ref={ref}>
        <SectionRule label="How We Deliver" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <h2
            className="text-[clamp(28px,4vw,56px)] font-normal text-white leading-[1.06] tracking-[-0.025em]"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            How We Deliver
          </h2>
        </motion.div>

        {industry.hasSubSections ? (
          <>
            <SubSectionToggle
              sections={industry.subSections}
              activeSection={activeSubSection}
              onToggle={(t) => { setActiveSubSection(t); setSelectedService(null); }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubSection}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {currentSubSection && !currentSubSection.services[0]?.subItems ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentSubSection.services.map((service, i) => (
                      <StandardTile key={service.title} service={service} index={i} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                    <div className="lg:col-span-2 space-y-2.5">
                      {currentSubSection?.services.map((service, i) => (
                        <HealthcareTile
                          key={service.title}
                          service={service}
                          index={i}
                          globalIconIndex={i}
                          onSelect={(s) => setSelectedService(selectedService?.title === s.title ? null : s)}
                          isActive={selectedService?.title === service.title}
                        />
                      ))}
                    </div>
                    <div className="lg:col-span-3">
                      <AnimatePresence mode="wait">
                        {selectedService ? (
                          <DetailPanel key={selectedService.title} service={selectedService} onClose={() => setSelectedService(null)} />
                        ) : (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full min-h-[280px] rounded-sm border border-dashed border-white/10 flex items-center justify-center">
                            <div className="text-center">
                              <ChevronRight size={20} className="text-white/20 mx-auto mb-3" />
                              <p className="text-white/30 text-[12px]" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '0.05em' }}>Select a service area</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <div className="max-w-3xl">
            {industry.services.map((service, i) => (
              <StandardTile key={service.title} service={service} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
