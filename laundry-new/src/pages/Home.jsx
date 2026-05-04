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
        title="Best Laundry Service Coventry | Soapy Suds Shine Laundry"
        description="Soapy Suds Shine Laundry is a trusted local laundrette in Coventry offering service wash, self service laundry, wash and dry, duvet cleaning, bedding laundry, towel cleaning, same day laundry, and pickup and delivery."
        keywords="laundrette Coventry, laundry service Coventry, launderette near me Coventry, best laundrette in Coventry, service wash Coventry, self service laundry Coventry, wash and dry Coventry, cheap laundry Coventry, best laundry Coventry, same day laundry Coventry, laundry pickup and delivery Coventry, free laundry collection Coventry, CV3 laundry service, friendly laundrette Coventry, affordable laundry Coventry"
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
