import SEO from "../components/common/SEO";
import MainLayout from "../layouts/MainLayout";
import LocationSection from "../components/contact/LocationSection";
import FaqSection from "../components/contact/FaqSection";
import ContactPreview from "../components/home/ContactPreview";

export default function Contact() {
  return (
    <MainLayout>
      <SEO
        title="Contact Laundry Service Coventry | Book Pickup & Delivery"
        description="Contact Soapy Suds Shine Laundry in Coventry to book laundry pickup and delivery. We provide domestic and commercial laundry services for homes, hotels, restaurants, care homes, schools, sports clubs, uniforms, bedding, and towels."
        keywords="contact laundry Coventry, book laundry pickup Coventry, laundry delivery Coventry, commercial laundry contact UK, laundry near me Coventry, ironing service Coventry"
        canonical="https://soapysudsshine.co.uk/contact"
        ogImage="https://soapysudsshine.co.uk/og-image.jpg"
      />

      <ContactPreview />
      <LocationSection />
      <FaqSection />
    </MainLayout>
  );
}
