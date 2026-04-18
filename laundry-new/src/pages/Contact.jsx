import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactCardSection from "../components/contact/ContactCardSection";

import LocationSection from "../components/contact/LocationSection";
import FaqSection from "../components/contact/FaqSection";
import ContactPreview from "../components/home/ContactPreview";
export default function Contact() {
  return (
    <MainLayout>
      <ContactPreview />

      <LocationSection />
      <FaqSection />
    </MainLayout>
  );
}
