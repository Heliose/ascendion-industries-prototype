export const industries = {
  healthcare: {
    slug: 'healthcare',
    title: 'Healthcare and Life Sciences',
    shortTitle: 'Healthcare',
    intro: 'Healthcare and life sciences organizations are navigating administrative burden, fragmented systems, regulatory complexity, and slow paths from discovery to patient impact. Ascendion deploys AI agents across claims, clinical trials, member engagement, and regulatory compliance to help payers move faster, providers spend less time on admin, and life sciences companies get therapies to patients sooner.',
    metrics: [
      { value: '+25%', label: 'member satisfaction' },
      { value: '', label: 'Reduced wait times' },
      { value: '+80%', label: 'faster insights' },
      { value: '95%', label: 'interpretation accuracy' },
    ],
    hasSubSections: true,
    subSections: [
      {
        title: 'Healthcare',
        services: [
          {
            title: 'Claims & Operations',
            subItems: [
              { label: 'Claims Automation', description: 'CMS-compliant AI-driven adjudication, eligibility verification, and prior authorizations' },
              { label: 'Fraud & Payment Integrity', description: 'Real-time anomaly detection prevents fraud and reduce overpayment' },
            ],
          },
          {
            title: 'Member & Provider Experience',
            subItems: [
              { label: 'Member Engagement', description: 'Personalized communications increase preventive care adoption and improve CAHPS and HEDIS scores' },
              { label: 'Provider Burden', description: 'Automated documentation, coding, and prior auth responses increase provider satisfaction' },
              { label: 'Care Navigation', description: 'Routes members to the optimal care setting based on needs and benefits' },
            ],
          },
          {
            title: 'Population Health',
            subItems: [
              { label: 'Risk Stratification', description: 'Early identification of high-risk members for proactive interventions and personalized care' },
              { label: 'Value-Based Care Analytics', description: 'Provider performance insights support VBC contracts and optimize networks' },
            ],
          },
          {
            title: 'Interoperability & Revenue Cycle',
            subItems: [
              { label: 'Enterprise Integration', description: 'Real-time data flow across EHRs, HIEs, and PBMs via FHIR and HL7' },
              { label: 'Revenue Cycle', description: 'End-to-end RCM automation reduces A/R days and strengthens financial performance' },
            ],
          },
          {
            title: 'Compliance & Pharmacy',
            subItems: [
              { label: 'Regulatory Automation', description: 'Automated monitoring and workflow updates maintain CMS mandate compliance' },
              { label: 'PBM Optimization', description: 'Provides smarter formularies, better medication adherence, and outcomes-based contracts' },
            ],
          },
        ],
      },
      {
        title: 'Life Sciences',
        services: [
          {
            title: 'Precision Medicine',
            description: 'Genomic knowledge (ADCs) personalizes treatments for individuals',
          },
          {
            title: 'Drug Discovery',
            description: 'AI and biomedical knowledge graphs expedite target identification, drug discovery, and drug repurposing; reduced time-to-market',
          },
          {
            title: 'Clinical Trials',
            description: 'Planning, design, clinical SAS, clinical data management, BioStats, operations, reporting, and regulatory submissions are accelerated; auto-generated CSRs, SAPs, and narratives',
          },
          {
            title: 'Regulatory Intelligence',
            description: '70%+ faster regulatory query response',
          },
          {
            title: 'Manufacturing 4.0',
            description: 'Digital Twins, Process Twins, predictive maintenance, digital access to manuals, eOJTs, and AR/VR-enabled training',
          },
          {
            title: 'Real-World Evidence',
            description: 'HCP engagement, market access, contracts management, forecasting, capture rate improvement, sample management with computer vision, field force management, and call planning',
          },
          {
            title: 'GxP Compliance',
            description: '65% lower quality and compliance costs across GxP reviews and CSV validations; consistent adherence to SOPs, GxP procedures, and cybersec policies; reduced patient risk',
          },
          {
            title: 'Pharmacovigilance',
            description: 'Automated call management and triage for dramatically less manual dependency',
          },
          {
            title: 'Data Analytics & Predictive Modeling',
            description: 'Insights from large-scale datasets',
          },
        ],
      },
    ],
    clientOutcomes: [
      { title: 'From Manual Chaos to Automated Efficiency: Transforming Billing and Revenue Management', url: 'https://ascendion.com/client-outcomes/from-manual-chaos-to-automated-efficiency-transforming-billing-and-revenue-management/' },
      { title: 'Building a Future-Proof Data Foundation with Automated Migration to BigQuery', url: 'https://ascendion.com/client-outcomes/building-a-future-proof-data-foundation-with-automated-migration-to-bigquery/' },
      { title: 'Empowering Compliance and Collaboration Through Modernized Insights', url: 'https://ascendion.com/client-outcomes/empowering-compliance-and-collaboration-through-modernized-insights/' },
      { title: 'Modernized Cloud Engineering Revives Critical Healthcare Services', url: 'https://ascendion.com/client-outcomes/modernized-cloud-engineering-revives-critical-healthcare-services/' },
    ],
    ideasInsights: [
      { title: 'Transforming Care Delivery with Engineering to the Power of AI', url: 'https://ascendion.com/insights/ai-in-healthcare-transforming-care-delivery-and-efficiency-with-engineeringai/' },
      { title: 'Accelerating Digital Transformation for a Healthcare Leader', url: 'https://ascendion.com/external_resources/digital-transformation-for-a-healthcare-company/' },
      { title: 'Data as Medicine: Tech Revolutionizes Healthcare Insights', url: 'https://ascendion.com/insights/data-as-medicine-tech-revolutionises-healthcare-insights/' },
      { title: 'Revolutionizing Healthcare Delivery Through Telehealth', url: 'https://ascendion.com/insights/revolutionizing-healthcare-delivery-through-the-development-of-telehealth/' },
    ],
    closingTagline: 'Put the power of AI to work improving health',
    closingCta: { label: 'Learn more about our impact on healthcare and life sciences', url: 'https://ascendion.com/contact-us/' },
  },

  banking: {
    slug: 'banking',
    title: 'Banking and Financial Services',
    shortTitle: 'Banking',
    intro: 'The banking and financial services industry faces new compliance demands, legacy platforms, fragmented data, and manual processes. Ascendion engineers AI agents across products, channels, data, and ecosystems to modernize legacy platforms, put data to work, and deliver innovation without adding risk.',
    metrics: [
      { value: '45%+', label: 'modernization cost savings' },
      { value: '65%', label: 'faster financial analysis' },
      { value: '75%', label: 'less manual reporting' },
      { value: '55%', label: 'reduction in testing efforts' },
    ],
    hasSubSections: false,
    services: [
      { title: 'Modernization', description: 'AI-driven engineering accelerates innovation, ensures ISO 20022 and FedNow compliance, delivers secure solutions, and converts technical debt into available capital.' },
      { title: 'Loan Origination', description: 'AI-powered platform modernization spans digital interfaces, UAT, advanced automation, data quality, and ETL, enabling a touchless process that improves customer experience, enhances security, and ensures independent validation and timely delivery.' },
      { title: 'Payments', description: 'A scalable common framework simplifies processes, saves costs, ensures transaction visibility, supports automated testing, and enables uninterrupted money movement. Systems are modernized with AI-driven automation, automated API adapters, and a phased approach across products.' },
      { title: 'Data', description: 'Our teams monetize data while keeping it secure and accelerate legacy platform migrations to modern tech stacks.' },
      { title: 'Innovation', description: 'Digital transformation paired with managed risk helps BFS institutions serve customers better and deliver personalized experiences across channels.' },
    ],
    clientOutcomes: [
      { title: 'Agentic AI Revolutionizes Banking Operations', url: 'https://ascendion.com/client-outcomes/operational-intelligence-unlocked-transforming-banking-efficiency-with-agentic-ai/' },
      { title: 'Future of Finance Software Built with Agentic AI', url: 'https://ascendion.com/client-outcomes/agentic-ai-in-action-accelerating-software-delivery-for-financial-services/' },
      { title: '$38M Saved with AI-Powered IT Infrastructure Transformation', url: 'https://ascendion.com/client-outcomes/38m-cost-savings-how-a-banking-major-transformed-its-it-infrastructure/' },
      { title: 'Open Banking Reimagined: Faster Innovation for a Leading UK Financial Institution', url: 'https://ascendion.com/client-outcomes/transforming-financial-services-with-open-banking-initiative-for-a-top-uk-bank-2/' },
    ],
    ideasInsights: [
      { title: 'Revolutionizing Digital Banking with Agentic AI: Ascendion Partners with Axos Bank', url: 'https://ascendion.com/press-releases/ascendion-and-axos-bank-partner-to-revolutionize-digital-banking/' },
      { title: 'AAVA Launches on AWS Marketplace: Accelerating Agentic AI Adoption at Scale', url: 'https://ascendion.com/press-releases/ascendions-ava-agentic-ai-platform-launched-in-aws-marketplace/' },
      { title: 'Why Data Scientists Are Essential to Real-World Agentic AI Innovation', url: 'https://ascendion.com/news/the-critical-role-of-data-scientists-in-driving-adoption-and-innovation-in-agentic-ai/' },
    ],
    closingTagline: 'Put the power of AI to work to improve banking',
    closingCta: { label: 'Learn more about our impact on banking and financial services', url: 'https://ascendion.com/contact-us/' },
  },

  retail: {
    slug: 'retail',
    title: 'Retail and Consumer Goods',
    shortTitle: 'Retail',
    intro: 'The retail and consumer goods industry faces high costs in customer acquisition, retention, and delivery; insufficient data analytics; legacy system lock-in; and unchanged manual processes. Ascendion deploys AI agents alongside human teams to deliver real-time decision support, enterprise modernization, and better customer experiences.',
    metrics: [
      { value: '50%', label: 'fewer support/operations tickets' },
      { value: '30%', label: 'better forecast accuracy' },
      { value: '54M+', label: 'curated records for cross-sell' },
      { value: '15%', label: 'higher customer satisfaction' },
    ],
    hasSubSections: false,
    services: [
      { title: 'Real-Time Decision Support', description: 'Platform modernization and integration layered with AI agents and immersive technologies give leaders a foundation for customer insights, personalized interactions, inventory management, demand forecasting, and supply chain operations.' },
      { title: 'Enterprise Modernization', description: 'AAVA automates code analysis, refactoring, and migration for a faster transition to modern platforms with less disruption.' },
      { title: 'Better Customer Experiences', description: 'Agentic AI shortens product development cycles, enables AI-powered cloud observability, and builds hyper-productive teams, accelerating time to value and cutting operational costs while delivering unique, personalized customer experiences.' },
    ],
    clientOutcomes: [
      { title: 'Smarter Inventory Decisions in Real Time', url: 'https://ascendion.com/client-outcomes/real-time-insights-real-results-retail-inventory-success-story/' },
      { title: 'Retailer Streamlines Inventory Management by 30%', url: 'https://ascendion.com/client-outcomes/retailer-streamlines-inventory-management-by-30/' },
      { title: 'Sports Retailer Saves 40% with AI-Driven Modernization', url: 'https://ascendion.com/client-outcomes/large-sports-specialty-retailer-modernizes-business-with-40-cost-savings/' },
    ],
    ideasInsights: [
      { title: 'Retail Revolution: How AgentForce Is Redefining Customer Service', url: 'https://ascendion.com/insights/revolutionizing-customer-service-in-retail-the-impact-of-salesforces-agentforce/' },
      { title: 'Rewriting the Work Order with Agentic AI', url: 'https://ascendion.com/insights/ushering-in-a-new-work-order-and-revolutionizing-workflows-with-agentic-ai/' },
      { title: 'Unlocking Value Across the Enterprise with AI', url: 'https://ascendion.com/insights/ai-will-unlock-value-from-every-business-function/' },
    ],
    closingTagline: 'Put the power of AI to work to improve retail',
    closingCta: { label: 'Learn more about our impact on retail experiences', url: 'https://ascendion.com/contact-us/' },
  },

  hightech: {
    slug: 'hightech',
    title: 'High-Tech',
    shortTitle: 'High-Tech',
    intro: 'Product engineering, operations, support, and user experiences in the high-tech industry are all being reshaped by AI-powered software. Finding skilled engineers gets harder with every advance, legacy systems limit agility, and speed to market must coexist with cybersecurity. Ascendion embeds AI agents across the full product lifecycle to accelerate delivery, strengthen platforms, and modernize at scale.',
    metrics: [
      { value: '20%', label: 'faster incident resolution' },
      { value: '$2.6M', label: 'cost savings over 5 years' },
      { value: '30%', label: 'faster AI model development' },
      { value: '55%', label: 'reduction in manual workload' },
    ],
    hasSubSections: false,
    services: [
      { title: 'Engineering Across the SDLC', description: 'Agentic AI is embedded across the full SDLC. Our AI studios enhance development quality, agility, and efficacy across high-tech value chains. LLM lifecycle management and agentic AI-powered engineering modernize platforms and products to deliver higher productivity, faster releases, stronger security, faster incident resolution, and products that hold up under pressure.' },
      { title: 'Modernization & Architecture', description: 'Services align with crucial industry shifts focused on microservices, DevOps, and cloud-native architectures so high-tech companies can innovate faster, build securely, and reduce costs.' },
    ],
    clientOutcomes: [
      { title: 'Smarter Systems, Greater Gains with Agentic AI', url: 'https://ascendion.com/case_study/how-gen-ai-leads-to-smart-systems-tech-leader-enjoys-30-savings-in-operational-costs/' },
      { title: 'Decision Velocity with Modernized Platform', url: 'https://ascendion.com/case_study/mega-data-giant-modernizes-platform-for-faster-business-decisions/' },
      { title: 'Elevating Learning with Tech', url: 'https://ascendion.com/case_study/global-tech-giant-moves-to-the-top-of-their-class-to-help-schools-improve/' },
    ],
    ideasInsights: [
      { title: 'Microsoft Recognizes Ascendion as a Frontier Firm', url: 'https://ascendion.com/wp-content/uploads/2026/01/MS-Ebook_KK_02.pdf' },
      { title: 'Lessons from a Year of Shipping LLM Analytics Products for Enterprises', url: 'https://ascendion.com/insights/lessons-from-a-year-of-shipping-llm-analytics-products-for-enterprises/' },
      { title: 'Unleashing potential: Agentic AI\u2019s $2.25 trillion impact on the Economy', url: 'https://ascendion.com/press/your-generative-enterprise-playbook-for-the-future/' },
      { title: 'Beyond Antiquity: Modernizing Your Technology Platforms', url: 'https://ascendion.com/blog/antiques-are-valuable-but-not-if-its-your-technology-platform/' },
    ],
    closingTagline: 'We bring the power of AI to the best technology companies in the world',
    closingCta: { label: 'Learn more about our impact on high-tech leaders', url: 'https://ascendion.com/contact-us/' },
  },

  cme: {
    slug: 'cme',
    title: 'Communications, Media, and Entertainment',
    shortTitle: 'CME',
    intro: 'From 5G to immersive content, the Communications, Media, and Entertainment (CME) industry is evolving to captivate unique audiences and unlock new revenue streams. Ascendion deploys agentic AI-powered engineering to modernize systems, reshape content and experiences, and deliver across the value chain.',
    metrics: [
      { value: '4.5 or higher', label: 'field technician satisfaction score' },
      { value: '25%', label: 'increased player engagement' },
      { value: '1.5x', label: 'increased revenue' },
      { value: '50%', label: 'reduction in MTTR' },
    ],
    hasSubSections: false,
    services: [
      { title: 'Legacy Modernization', description: 'Agentic AI modernizes core systems, automates workflows, and enables agility, freeing teams to focus on audience experiences instead of infrastructure.' },
      { title: 'Content & Experience', description: 'Engineering services span predictive storytelling, personalized recommendations, smarter ad targeting, and immersive experiences to help CME businesses captivate audiences and keep pace with demand.' },
      { title: 'Engineering Across the Value Chain', description: 'Real-time analytics for telecom and scalable content platforms for gaming are delivered through AAVA and AI-powered engineering. This is combined with experience design and workforce transformation.' },
    ],
    clientOutcomes: [
      { title: 'Changing Mobile Networking for Good', url: 'https://ascendion.com/case_study/changing-mobile-networking-for-good-with-real-time-analytics/' },
      { title: 'Game Maker Wins with Feature-Rich Customer Experiences', url: 'https://ascendion.com/case_study/game-maker-wins-with-feature-rich-customer-experiences/' },
      { title: 'Telecom Giant Accelerates Time to Market with AI', url: 'https://ascendion.com/case_study/telecom-giant-enjoys-30-accelerated-time-to-market-with-ai/' },
    ],
    ideasInsights: [
      { title: 'Monoliths vs Microservices in Gaming Architecture: Striking the Right Balance', url: 'https://ascendion.com/blog/monoliths-vs-microservices-in-gaming-architecture-striking-the-right-balance/' },
      { title: 'Unlock Next-Level Innovation with Ascendion + AWS Bedrock', url: 'https://ascendion.com/insights/from-ideas-to-impact-how-ascendion-and-aws-bedrock-are-shaping-the-future/' },
      { title: 'Reimagine Enterprise Operations with Agentic AI', url: 'https://ascendion.com/insights/ushering-in-a-new-work-order-and-revolutionizing-workflows-with-agentic-ai/' },
    ],
    closingTagline: 'We bring the power of AI to CME',
    closingCta: { label: 'Learn more about our impact on CME leaders', url: 'https://ascendion.com/contact-us/' },
  },

  travel: {
    slug: 'travel',
    title: 'Travel and Hospitality',
    shortTitle: 'Travel',
    intro: 'The travel and hospitality industry needs to boost sales across channels, drive smarter revenue management, offset labor shortages and rising costs, and meet growing demands for personalization. Ascendion applies agentic AI-powered solutions to help travel and hospitality companies forecast smarter, personalize faster, improve traveler and worker experiences, and drive growth.',
    metrics: [],
    hasSubSections: false,
    services: [
      { title: 'Data-Driven Decisions', description: 'Data is unified across reservations, customer systems, and logistics. AI-powered analytics predict demand, optimize dynamic pricing, streamline workflows, and improve inventory management.' },
      { title: 'Personalized Experiences', description: 'Tailored recommendations, seamless booking, and customized itineraries are delivered at scale, with real-time frictionless support, inclusive digital experiences from UI components and proven accessibility frameworks, and contactless technologies that enhance safety and convenience.' },
      { title: 'Operations & Sustainability', description: 'Predictive maintenance and route optimization applications reduce costs and environmental impact. Cloud-native, modular architectures scale reliably while cutting overheads.' },
    ],
    clientOutcomes: [
      { title: '60% Faster Profitability Analysis with Advanced Forecasting', url: 'https://ascendion.com/client-outcomes/60-faster-profitability-analysis-with-advanced-forecasting/' },
      { title: 'Streamlined Immigration through Automated & Compliant Guest Data Transmission for a Leading Cruise Line', url: 'https://ascendion.com/client-outcomes/streamlined-immigration-through-automated-compliant-guest-data-transmission-for-a-leading-cruise-line/' },
      { title: 'Top U.S. Airline Flies Above the Clouds with Printing-As-A-Service', url: 'https://ascendion.com/client-outcomes/superior-scalable-airport-experiences-with-print-as-a-service/' },
    ],
    ideasInsights: [
      { title: 'Empower the Future of AI with Smarter Data Science', url: 'https://ascendion.com/news/the-critical-role-of-data-scientists-in-driving-adoption-and-innovation-in-agentic-ai/' },
      { title: 'Reinvent How Work Gets Done with Agentic AI', url: 'https://ascendion.com/insights/ushering-in-a-new-work-order-and-revolutionizing-workflows-with-agentic-ai/' },
      { title: 'From Vision to Velocity: Scaling Agentic AI in the Enterprise', url: 'https://ascendion.com/insights/from-ideas-to-impact-how-ascendion-and-aws-bedrock-are-shaping-the-future/' },
    ],
    closingTagline: 'We bring the power of AI to Travel and Hospitality',
    closingCta: { label: 'Learn more about our impact on T&H leaders', url: 'https://ascendion.com/contact-us/' },
  },
};

export const industryOrder = ['healthcare', 'banking', 'retail', 'hightech', 'cme', 'travel'];

export const industryIcons = {
  healthcare: 'Heart',
  banking: 'Landmark',
  retail: 'ShoppingBag',
  hightech: 'Cpu',
  cme: 'Radio',
  travel: 'Plane',
};
