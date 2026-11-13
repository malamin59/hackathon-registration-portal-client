import CTASection from "../components/Home/CTASection";
import EventHighlights from "../components/Home/EventHighlights";
import HeroSection from "../components/Home/HeroSection";
import PrizeSection from "../components/Home/PrizeSection";
import TimelineSection from "../components/Home/TimelineSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <EventHighlights />
      <TimelineSection />
      <PrizeSection />
      <CTASection />
    </>
  );
};

export default Home;
