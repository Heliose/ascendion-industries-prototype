import { useState, useEffect } from 'react';

const sections = [
  { id: 'metrics', label: 'Overview' },
  { id: 'how-we-deliver', label: 'How We Deliver' },
  { id: 'client-outcomes', label: 'Client Outcomes' },
  { id: 'ideas-insights', label: 'Ideas & Insights' },
  { id: 'closing', label: 'Get In Touch' },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-80px 0px -40% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-[90] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{
        top: 56,
        background: 'rgba(244,243,239,.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,.07)',
        height: 44,
      }}
    >
      <div
        className="h-full flex items-center justify-center gap-0 overflow-x-auto max-w-[1360px] mx-auto px-4"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`.sticky-nav-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div className="sticky-nav-scroll flex items-center gap-0">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative px-4 py-3 text-[10px] uppercase tracking-[0.08em] whitespace-nowrap no-underline transition-all ${
                  isActive ? 'text-black' : 'text-black/40 hover:text-black/70'
                }`}
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                {s.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-violet rounded-full" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
