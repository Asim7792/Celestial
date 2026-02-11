import About from "@/components/Home/AboutSection";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowWeWork from "@/components/Home/HowWeWork";
import ServiceSection from "@/components/Home/services";
import Testimonials from "@/components/Home/Testimonials";
import SavingsCalculator from "@/components/Home/SavingsCalculator";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import FinalCTA from "@/components/Home/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <WhyChooseUs/>
      <ServiceSection/>
      <SavingsCalculator/>
      <Features/>
      <HowWeWork/>      
      <Testimonials/>
      <FinalCTA/>
    </div>
  );
}
