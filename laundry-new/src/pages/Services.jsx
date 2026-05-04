import SEO from "../components/common/SEO";
import MainLayout from "../layouts/MainLayout";
import ServiceList from "../components/services/ServiceList";
import CommercialGrid from "../components/services/CommercialGrid";

export default function Services() {
  return (
    <MainLayout>
      <SEO
        title="Laundry Services Coventry | Wash & Dry, Duvets, Pickup & Delivery"
        description="Explore laundry services in Coventry including service wash, self service laundry, wash and dry, duvet cleaning, bedding laundry, towel cleaning, pet bedding laundry, same day laundry, express laundry, and pickup and delivery."
        keywords="laundry services Coventry, laundry service Coventry, service wash Coventry, self service laundry Coventry, wash and dry Coventry, duvet cleaning Coventry, bedding laundry service Coventry, towel cleaning service Coventry, pet bedding laundry Coventry, same day laundry Coventry, express laundry service Coventry, laundry pickup and delivery Coventry, elderly laundry service Coventry, affordable wash and dry service in Coventry, where to wash duvets in Coventry, laundrette with large machines near Coventry"
        canonical="https://soapysudsshine.co.uk/services"
        ogImage="https://soapysudsshine.co.uk/og-image.jpg"
      />

      <ServiceList />
      <CommercialGrid />
    </MainLayout>
  );
}
