import AboutHero from './components/AboutHero';
import CompanyIntro from './components/CompanyIntro';
import StatsSection from './components/StatsSection';
import WorkProcess from './components/WorkProcess';
import VisionMission from './components/VisionMission';
import AboutTestimonials from './components/AboutTestimonials';
import AboutCTA from './components/AboutCTA';

export default function AboutPage() {
  return (
    <div className="font-sans">
      <AboutHero />
      <CompanyIntro />
      <StatsSection />
      <WorkProcess />
      <VisionMission />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  );
}
