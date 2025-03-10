import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import GooglePlayStoreCta from "@/components/home/GooglePlayStoreCta";
import PlaneCta from "@/components/layout/PlaneCta";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonial from "@/components/home/Testimonial";
import NeedHelp from "@/components/home/NeedHelp";


export default function Home() {
  return (
    <>
      <HeroSection />

      <GooglePlayStoreCta />

      <Services />

      <PlaneCta />

     <HowItWorks />

      <WhyChooseUs />

      <NeedHelp />

      <Testimonial /> 

    </>
  );
}
