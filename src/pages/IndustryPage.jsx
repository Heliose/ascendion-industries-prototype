import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { industries } from '../data/industries';
import HeroSection from '../components/HeroSection';
import { HeroCinematic, HeroEditorial, HeroOverlap, HeroDataGrid, HeroCentered } from '../components/HeroAlts';
import TickerBar from '../components/TickerBar';
import StickyNav from '../components/StickyNav';
import MetricsBanner from '../components/MetricsBanner';
import HowWeDeliver from '../components/HowWeDeliver';
import { HWDEditorial, HWDCardGrid, HWDHorizontalPanels, HWDTabbedSpotlight, HWDStackedMagazine } from '../components/HowWeDeliverAlts';
import CTASection from '../components/CTASection';
import { BentoGrid, Filmstrip, StackedReveal, SpotlightSelector, MagazineSpread } from '../components/CTASectionAlt';
import { InsightsTimeline, InsightsRolodex, InsightsTickerFeed, InsightsMosaic, InsightsAccordionDigest } from '../components/InsightsAlts';
import { RolodexLight, RolodexStacked, RolodexMinimal } from '../components/RolodexVariants';
import ClosingCTA from '../components/ClosingCTA';
import { ClosingDarkCinematic, ClosingSplitPanel, ClosingFloatingCard, ClosingMarquee, ClosingTerminal } from '../components/ClosingCTAAlts';
import IndustrySwitcher from '../components/IndustrySwitcher';

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industries[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!industry) {
    return <Navigate to="/industry/healthcare" replace />;
  }

  return (
    <main className="min-h-screen">
      <StickyNav />

      {/* ── Original Hero ── */}
      <HeroSection title={industry.title} intro={industry.intro} />

      {/* ── Hero Alt 1: Cinematic Full-Bleed ── */}
      <HeroCinematic title={industry.title} intro={industry.intro} />

      {/* ── Hero Alt 2: Editorial Stack ── */}
      <HeroEditorial title={industry.title} intro={industry.intro} />

      {/* ── Hero Alt 3: Overlapping Offset ── */}
      <HeroOverlap title={industry.title} intro={industry.intro} />

      {/* ── Hero Alt 4: Data Grid ── */}
      <HeroDataGrid title={industry.title} intro={industry.intro} />

      {/* ── Hero Alt 5: Centered Statement ── */}
      <HeroCentered title={industry.title} intro={industry.intro} />

      <TickerBar />
      {industry.metrics && industry.metrics.length > 0 && (
        <MetricsBanner metrics={industry.metrics} />
      )}
      <HowWeDeliver industry={industry} />

      {/* ── HWD Alt 1: Numbered Editorial ── */}
      <HWDEditorial industry={industry} />

      {/* ── HWD Alt 2: Card Grid ── */}
      <HWDCardGrid industry={industry} />

      {/* ── HWD Alt 3: Horizontal Panels ── */}
      <HWDHorizontalPanels industry={industry} />

      {/* ── HWD Alt 4: Tabbed Spotlight ── */}
      <HWDTabbedSpotlight industry={industry} />

      {/* ── HWD Alt 5: Stacked Magazine ── */}
      <HWDStackedMagazine industry={industry} />

      {/* ── Original layout ── */}
      <CTASection
        id="client-outcomes"
        title="Client Outcomes"
        items={industry.clientOutcomes}
        variant="outcome"
      />

      {/* ── Alt 1: Bento Grid ── */}
      <BentoGrid
        id="client-outcomes-bento"
        title="Client Outcomes"
        items={industry.clientOutcomes}
        variant="outcome"
      />

      {/* ── Alt 2: Filmstrip ── */}
      <Filmstrip
        id="client-outcomes-filmstrip"
        title="Client Outcomes"
        items={industry.clientOutcomes}
        variant="outcome"
      />

      {/* ── Alt 3: Stacked Reveal ── */}
      <StackedReveal
        id="client-outcomes-stacked"
        title="Client Outcomes"
        items={industry.clientOutcomes}
        variant="outcome"
      />

      {/* ── Alt 4: Spotlight Selector ── */}
      <SpotlightSelector
        id="client-outcomes-spotlight"
        title="Client Outcomes"
        items={industry.clientOutcomes}
        variant="outcome"
      />

      {/* ── Alt 5: Magazine Spread ── */}
      <MagazineSpread
        id="client-outcomes-magazine"
        title="Client Outcomes"
        items={industry.clientOutcomes}
        variant="outcome"
      />

      <CTASection
        id="ideas-insights"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 1: Bento Grid ── */}
      <BentoGrid
        id="ideas-insights-bento"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 2: Filmstrip ── */}
      <Filmstrip
        id="ideas-insights-filmstrip"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 3: Stacked Reveal ── */}
      <StackedReveal
        id="ideas-insights-stacked"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 4: Spotlight Selector ── */}
      <SpotlightSelector
        id="ideas-insights-spotlight"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 5: Magazine Spread ── */}
      <MagazineSpread
        id="ideas-insights-magazine"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 6: Timeline ── */}
      <InsightsTimeline
        id="ideas-insights-timeline"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 7: Rolodex ── */}
      <InsightsRolodex
        id="ideas-insights-rolodex"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 8: Ticker Feed ── */}
      <InsightsTickerFeed
        id="ideas-insights-ticker"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 9: Mosaic ── */}
      <InsightsMosaic
        id="ideas-insights-mosaic"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Ideas & Insights Alt 10: Accordion Digest ── */}
      <InsightsAccordionDigest
        id="ideas-insights-digest"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Rolodex Variant 1: Light ── */}
      <RolodexLight
        id="ideas-insights-rolodex-light"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Rolodex Variant 2: Stacked Deck ── */}
      <RolodexStacked
        id="ideas-insights-rolodex-stacked"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Rolodex Variant 3: Minimal Typography ── */}
      <RolodexMinimal
        id="ideas-insights-rolodex-minimal"
        title="Ideas & Insights"
        items={industry.ideasInsights}
        variant="insight"
      />

      {/* ── Original Closing CTA ── */}
      <ClosingCTA tagline={industry.closingTagline} cta={industry.closingCta} />

      {/* ── Alt 1: Dark Cinematic ── */}
      <ClosingDarkCinematic tagline={industry.closingTagline} cta={industry.closingCta} />

      {/* ── Alt 2: Split Panel ── */}
      <ClosingSplitPanel tagline={industry.closingTagline} cta={industry.closingCta} />

      {/* ── Alt 3: Floating Card ── */}
      <ClosingFloatingCard tagline={industry.closingTagline} cta={industry.closingCta} />

      {/* ── Alt 4: Marquee Banner ── */}
      <ClosingMarquee tagline={industry.closingTagline} cta={industry.closingCta} />

      {/* ── Alt 5: Terminal ── */}
      <ClosingTerminal tagline={industry.closingTagline} cta={industry.closingCta} />

      <IndustrySwitcher />
    </main>
  );
}
