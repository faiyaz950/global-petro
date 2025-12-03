import GlobalNav from '@/components/global-nav';
import HeroSection from '@/components/hero-section';
import OverviewSection from '@/components/overview-section';
import TimelineSection from '@/components/timeline-section';
import ServicesSection from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import PoliciesSection from '@/components/policies-section';
import ClientsSection from '@/components/clients-section';
import AchievementsSection from '@/components/achievements-section';
import VisionMissionSection from '@/components/vision-mission-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <GlobalNav />
      <main className="flex-1">
        <HeroSection />
        <OverviewSection />
        <TimelineSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsSection />
        <AchievementsSection />
        <VisionMissionSection />
        <PoliciesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
