import SEO from "../components/common/SEO";
import Hero from "../components/home/Hero";
import HomeServices from "../components/home/HomeServices";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ContactPreview from "../components/home/ContactPreview";
import CommercialPreview from "../components/home/CommercialPreview";

export default function Home() {
  return (
    <>
      <SEO
        title="Commercial Laundry Service Coventry | Pickup & Delivery UK"
        description="Professional laundry service in Coventry, UK. We provide commercial and domestic laundry pickup and delivery for hotels, restaurants, care homes, schools, sports clubs, uniforms, bedding, towels, and bulk laundry."
        keywords="laundry service Coventry, commercial laundry Coventry, laundry pickup Coventry, laundry delivery Coventry, hotel laundry service UK, restaurant laundry service UK, care home laundry service Coventry, ironing service Coventry"
        canonical="https://soapysudsshine.co.uk/"
        ogImage="https://soapysudsshine.co.uk/og-image.jpg"
      />

      <Hero />
      <HomeServices />
      <WhyChooseUs />
      <CommercialPreview />
      <Testimonials />
      <ContactPreview />
    </>
  );
}
