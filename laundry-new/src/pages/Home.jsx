import Hero from "../components/home/Hero";
import HomeServices from "../components/home/HomeServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ContactPreview from "../components/home/ContactPreview";
import CommercialPreview from "../components/home/CommercialPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeServices />
      <WhyChooseUs />
      <CommercialPreview />
      <Testimonials />
      <ContactPreview />
    </>
  );
}
