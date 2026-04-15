import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TrainingAreasSection from '@/components/TrainingAreasSection';
import ChallengesSection from '@/components/ChallengesSection';
import JoinSection from '@/components/JoinSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainingAreasSection />
      <ChallengesSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </div>
  );
}