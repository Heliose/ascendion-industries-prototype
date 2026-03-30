import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function MetricCard({ value, label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative text-center py-12 px-8 overflow-hidden"
    >
      {/* Ghost number — dramatic scale */}
      {value && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="text-[clamp(120px,16vw,220px)] font-extrabold text-black/[0.04] leading-none"
            style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.04em' }}
          >
            {value.replace(/[^0-9.]/g, '')}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Value — violet on light sections */}
        {value ? (
          <div
            className="text-[clamp(48px,5.5vw,80px)] font-extrabold text-violet leading-none mb-3 tracking-[-0.04em]"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            {value}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1.5 mb-3 h-[80px]">
            <div className="w-2.5 h-2.5 rounded-full bg-teal" />
            <div className="w-2.5 h-2.5 rounded-full bg-teal/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-teal/30" />
          </div>
        )}

        {/* Violet progress bar with glow */}
        <div className="w-full h-0.5 bg-black/7 rounded-sm overflow-hidden mt-1 mb-3">
          <div className="h-full bg-violet w-[60%] rounded-sm glow-violet" />
        </div>

        {/* Label */}
        <p
          className="text-g6 text-[13px] leading-[1.6] max-w-[200px] mx-auto"
          style={{ fontFamily: 'var(--font-family-body)' }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function MetricsBanner({ metrics }) {
  return (
    <section id="metrics" className="relative bg-white py-14 border-t border-black/6 border-b border-black/6">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={i < metrics.length - 1 ? 'border-r border-black/7' : ''}
            >
              <MetricCard value={metric.value} label={metric.label} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
