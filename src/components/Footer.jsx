import { Link } from 'react-router-dom';
import { industries, industryOrder } from '../data/industries';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream2 border-t border-black/6">
      {/* CTA Area */}
      <div className="relative max-w-[1360px] mx-auto px-[60px] max-lg:px-6 py-20 text-center">
        <div className="absolute inset-0 dot-grid-bg opacity-40" />
        {/* Ascendion logo watermark */}
        <div className="mb-6 opacity-15">
          <span className="text-[48px] font-extrabold text-black/30 tracking-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
            Ascendion
          </span>
        </div>
        <h2
          className="text-[clamp(24px,3.5vw,42px)] font-normal text-black leading-[1.1] tracking-[-0.025em] mb-4 max-w-lg mx-auto"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          Engineering to the power of AI
        </h2>
        <p
          className="text-g6 text-[16px] mb-8 max-w-sm mx-auto"
          style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.01em' }}
        >
          Transform how your enterprise builds, runs, and grows.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet text-white text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(100,100,215,0.35)] transition-all no-underline"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Contact Us <ArrowRight size={13} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)] transition-all no-underline"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Get a Demo
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-black/6">
        <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-black/35 hover:text-black text-[11px] transition-colors no-underline"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-black/35 text-[11px]" style={{ fontFamily: 'var(--font-family-body)' }}>
            &copy; 2026 Ascendion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
