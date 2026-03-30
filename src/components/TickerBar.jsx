const tickerItems = [
  { label: 'How We Deliver', href: '#how-we-deliver' },
  { label: 'Client Outcomes', href: '#client-outcomes' },
  { label: 'Ideas & Insights', href: '#ideas-insights' },
  { label: 'Contact Us', href: '#closing' },
];

export default function TickerBar() {
  return (
    <div
      className="w-full overflow-x-auto"
      style={{
        background: '#6464D7',
        borderTop: '1px solid rgba(255,255,255,.12)',
        borderBottom: '1px solid rgba(255,255,255,.12)',
        scrollbarWidth: 'none',
      }}
    >
      <style>{`.ticker-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div className="ticker-scroll flex items-center justify-center gap-0 px-5 py-2.5 min-w-max mx-auto">
        {tickerItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className="inline-flex items-center gap-4 px-5 no-underline transition-opacity hover:opacity-70"
          >
            <span
              className="text-white text-[10px] uppercase tracking-[0.12em] whitespace-nowrap hover:underline hover:underline-offset-[3px]"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              {item.label}
            </span>
            {i < tickerItems.length - 1 && (
              <span className="w-[3px] h-[3px] rounded-full bg-white/40 shrink-0" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
