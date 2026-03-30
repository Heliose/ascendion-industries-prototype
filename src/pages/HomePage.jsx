import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industries, industryOrder, industryIcons } from '../data/industries';
import { Heart, Landmark, ShoppingBag, Cpu, Radio, Plane, ArrowRight } from 'lucide-react';

const iconMap = { Heart, Landmark, ShoppingBag, Cpu, Radio, Plane };
const ease = [0.16, 1, 0.3, 1];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative min-h-[81vh] flex items-center overflow-hidden">
        <div className="relative z-10 max-w-[1360px] mx-auto px-[60px] max-lg:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-3 py-1.5 border border-black rounded-sm mb-8"
            >
              <span
                className="text-[10px] uppercase tracking-[0.24em] text-black"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                Industries We Transform
              </span>
            </div>

            <h1
              className="text-[clamp(48px,8vw,120px)] font-extrabold text-black leading-[1.0] tracking-[-0.055em] mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Engineering to
              <br />
              <span className="gradient-text">the power of AI</span>
            </h1>

            {/* Teal rule */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 52 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="h-0.5 bg-teal mb-8"
            />

            <div className="border-l-[3px] border-violet pl-5 mb-10">
              <p className="text-g6 text-[15px] leading-[1.7] max-w-md" style={{ fontFamily: 'var(--font-family-body)' }}>
                We deploy AI agents across industries to modernize platforms, accelerate delivery, and drive measurable outcomes.
              </p>
            </div>

            <a
              href="#industries"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-g6 hover:text-black transition-colors no-underline"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Scroll to explore
              <span className="text-teal">&#8595;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section id="industries" className="py-20 bg-cream">
        <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
          <div className="section-rule mb-12">
            <span>Industries</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryOrder.map((key, i) => {
              const ind = industries[key];
              const IconName = industryIcons[key];
              const Icon = iconMap[IconName];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2 + i * 0.08, ease }}
                >
                  <Link
                    to={`/industry/${key}`}
                    className="group block p-6 rounded-sm bg-white border border-black/8 hover:border-violet/25 transition-all duration-300 no-underline card-hover-light"
                  >
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-10 h-10 rounded-sm bg-cream2 flex items-center justify-center group-hover:bg-violet/8 transition-colors">
                        {Icon && <Icon size={18} className="text-violet/60 group-hover:text-violet transition-colors" />}
                      </div>
                      <h3
                        className="text-black text-[clamp(16px,1.7vw,20px)] font-normal tracking-[-0.01em] group-hover:text-violet transition-colors"
                        style={{ fontFamily: 'var(--font-family-display)' }}
                      >
                        {ind.shortTitle}
                      </h3>
                    </div>
                    <p className="text-g6 text-[13px] line-clamp-2 mb-4 leading-[1.65]" style={{ fontFamily: 'var(--font-family-body)' }}>
                      {ind.intro.slice(0, 120)}...
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-teal text-[10px] uppercase tracking-[0.1em]"
                        style={{ fontFamily: 'var(--font-family-display)' }}
                      >
                        Explore
                      </span>
                      <ArrowRight size={11} className="text-teal group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
