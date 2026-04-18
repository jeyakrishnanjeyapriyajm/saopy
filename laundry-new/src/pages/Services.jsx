import MainLayout from "../layouts/MainLayout";
import ServiceList from "../components/services/ServiceList";
import CommercialGrid from "../components/services/CommercialGrid";

export default function Services() {
  return (
    <MainLayout>
      <ServiceList />
      <CommercialGrid />
    </MainLayout>
  );
}
