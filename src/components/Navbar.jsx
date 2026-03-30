import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { industries, industryOrder } from '../data/industries';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#' },
    { label: 'Industries', href: '#', hasDropdown: true },
    { label: 'Client Outcomes', href: '#' },
    { label: 'Insights', href: '#' },
    { label: 'About', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/97 backdrop-blur-xl border-b border-black/8' : 'bg-cream/90 backdrop-blur-md'
    }`}>
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline">
            <span className="text-black font-bold text-lg tracking-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
              Ascendion
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.hasDropdown && setIndustriesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIndustriesOpen(false)}
              >
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 text-[10px] font-normal uppercase tracking-[0.08em] text-black/40 hover:text-black hover:bg-black/3 transition-colors rounded-sm flex items-center gap-1 no-underline"
                  style={{ fontFamily: 'var(--font-family-display)' }}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={10} className={`transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />}
                </a>

                {link.hasDropdown && industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.17, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-0.5 w-72 bg-cream/98 backdrop-blur-xl border border-black/8 rounded-md shadow-lg overflow-hidden"
                  >
                    <div className="p-1.5">
                      {industryOrder.map((key) => {
                        const ind = industries[key];
                        const isActive = location.pathname === `/industry/${key}`;
                        return (
                          <Link
                            key={key}
                            to={`/industry/${key}`}
                            onClick={() => setIndustriesOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-sm text-[11px] no-underline transition-all ${
                              isActive
                                ? 'bg-violet/5 text-violet'
                                : 'text-g6 hover:bg-black/3 hover:text-black'
                            }`}
                            style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '0.02em' }}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-teal' : 'bg-teal/40'}`} />
                            {ind.title}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden lg:inline-flex px-5 py-2 bg-teal text-black text-[11px] font-normal uppercase tracking-[0.1em] rounded-sm hover:shadow-[0_8px_28px_rgba(0,250,194,0.35)] transition-all no-underline"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Contact Us
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-black/60 hover:text-black bg-transparent border-none cursor-pointer"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-cream border-t border-black/8"
        >
          <div className="px-6 py-4 space-y-1">
            {industryOrder.map((key) => (
              <Link
                key={key}
                to={`/industry/${key}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-[11px] uppercase tracking-[0.06em] text-g6 hover:text-black rounded-sm hover:bg-black/3 no-underline"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                {industries[key].title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
