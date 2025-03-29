import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import GooglePlayStoreCta from "@/components/layout/GooglePlayStoreCta";
import PlaneCta from "@/components/layout/PlaneCta";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonial from "@/components/home/Testimonial";
import NeedHelp from "@/components/layout/NeedHelp";


export const metadata = {
  title: "AC Repair Service Near Me | Onit",
  description: "Fast, reliable, and affordable AC repair near you. Stay cool with Onit's expert service—contact us today!",
  robots: "index",
}


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
