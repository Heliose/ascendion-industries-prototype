export default function Footer() {
  const columns = [
    {
      title: 'What We Do',
      items: [
        'Applied AI',
        'Data & Insights\u1D2C\u1D35',
        'Experience\u1D2C\u1D35',
        'GCC\u1D2C\u1D35',
        'Operations\u1D2C\u1D35',
        'Platform Engineering\u1D2C\u1D35',
        'Product\u1D2C\u1D35',
        'Quality Engineering \u1D2C\u1D35',
        'AI Workforce Transformation',
      ],
    },
    {
      title: 'Industries',
      items: [
        'Banking & Financial Services',
        'Communications, Media and Entertainment',
        'Healthcare & Life Sciences',
        'Retail and Consumer Goods',
        'High-tech',
        'Travel and Hospitality',
      ],
    },
    {
      title: 'Who We Are',
      items: [
        'Leadership',
        'Analyst Recognition',
        'Certifications',
        'Locations',
        'ESG',
      ],
    },
    {
      title: 'Quick Links',
      items: [
        'Insights and impact',
        'Careers India',
        'Careers North America',
        'Careers Europe',
        'Careers Asia Pacific',
        'Global Delivery Hubs',
        'Contact us',
      ],
    },
  ];

  const socials = ['Linkedin', 'Youtube', 'Instagram'];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Accessibility Disclosure',
    'AI-enhanced Content Notice',
    'Security Disclosure Policy',
  ];

  return (
    <footer className="bg-cream border-t border-black/6">
      {/* Main footer grid */}
      <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-black text-[13px] font-bold mb-5"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {col.items.map((item) => (
                  <li key={item}>
                    <span
                      className="text-g6 text-[13px] leading-[1.5] hover:text-black transition-colors cursor-pointer"
                      style={{ fontFamily: 'var(--font-family-body)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social links column */}
          <div>
            <ul className="space-y-2.5 list-none p-0 m-0 lg:mt-0 mt-2">
              {socials.map((s) => (
                <li key={s}>
                  <span
                    className="text-violet text-[13px] leading-[1.5] hover:text-black transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-family-body)' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-black/6">
        <div className="max-w-[1360px] mx-auto px-[60px] max-lg:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-black/40 text-[11px]"
            style={{ fontFamily: 'var(--font-family-body)' }}
          >
            Copyright 2026, ASCENDION. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {legalLinks.map((link, i) => (
              <span key={link} className="flex items-center gap-1.5">
                <span
                  className="text-black/40 hover:text-black text-[11px] transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-family-body)' }}
                >
                  {link}
                </span>
                {i < legalLinks.length - 1 && (
                  <span className="text-black/20 text-[11px]">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
