import SEO from "../components/common/SEO";
import MainLayout from "../layouts/MainLayout";
import ServiceList from "../components/services/ServiceList";
import CommercialGrid from "../components/services/CommercialGrid";

export default function Services() {
  return (
    <MainLayout>
      <SEO
        title="Laundry Services Coventry | Commercial, Ironing, Pickup & Delivery"
        description="Explore professional laundry services in Coventry including wash and dry, ironing, express laundry, pickup and delivery, hotel laundry, restaurant laundry, care home laundry, uniforms, bedding, towels, and bulk commercial laundry."
        keywords="laundry services Coventry, commercial laundry services UK, ironing service Coventry, wash and dry Coventry, express laundry Coventry, hotel laundry Coventry, restaurant laundry Coventry, uniform laundry service UK"
        canonical="https://soapysudsshine.co.uk/services"
        ogImage="https://soapysudsshine.co.uk/og-image.jpg"
      />

      <ServiceList />
      <CommercialGrid />
    </MainLayout>
  );
}
