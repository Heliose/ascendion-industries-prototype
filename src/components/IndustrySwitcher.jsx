import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industries, industryOrder, industryIcons } from '../data/industries';
import { Heart, Landmark, ShoppingBag, Cpu, Radio, Plane } from 'lucide-react';

const iconMap = { Heart, Landmark, ShoppingBag, Cpu, Radio, Plane };

export default function IndustrySwitcher() {
  const { slug } = useParams();

  return (
    <section className="relative py-14 bg-cream border-t border-black/6">
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6">
        <p
          className="text-center text-g6 text-[10px] uppercase tracking-[0.2em] mb-7"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          Explore Other Industries
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {industryOrder.map((key) => {
            const ind = industries[key];
            const isActive = key === slug;
            const IconName = industryIcons[key];
            const Icon = iconMap[IconName];

            return (
              <Link key={key} to={`/industry/${key}`} className="no-underline">
                <div
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.08em] transition-all duration-300 ${
                    isActive
                      ? 'bg-violet text-white'
                      : 'bg-white text-g6 border border-black/8 hover:border-violet/25 hover:text-black'
                  }`}
                  style={{ fontFamily: 'var(--font-family-display)' }}
                >
                  {Icon && <Icon size={13} />}
                  {ind.shortTitle}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
