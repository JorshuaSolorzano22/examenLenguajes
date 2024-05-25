import FeaturedWorkSection from './sections/featured-work-section';
import HeroSection from './sections/hero-section';
import RecomendationsSection from './sections/recomendations-section';
import VenturesSection from './sections/ventures-section';
import GitHubSection from './github/github-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <RecomendationsSection />
      <VenturesSection />
      <GitHubSection/>
    </>

   
  );
}

