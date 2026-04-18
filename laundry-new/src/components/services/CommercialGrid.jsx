import AnimatedSection from "../common/AnimatedSection";
import SectionTitle from "../common/SectionTitle";
import { commercialServices } from "../../data/siteData";

export default function CommercialGrid() {
  return (
    <AnimatedSection className="section-space overflow-hidden bg-surface">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Trusted Cleaning Experts"
          title="Commercial Secondary Services"
        />

        {/* Mobile Carousel */}
        <div className="no-scrollbar mt-10 flex gap-4 overflow-x-auto pb-2 sm:hidden">
          {commercialServices.map((item) => (
            <div
              key={item.id}
              className="group w-[85%] min-w-[85%] overflow-hidden rounded-[22px] bg-white card-shadow transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h4 className="text-lg font-bold text-main">{item.title}</h4>

                <p className="mt-3 text-sm leading-7 text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet + Desktop Grid */}
        <div className="mt-10 hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {commercialServices.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[22px] bg-white card-shadow transition duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h4 className="text-lg font-bold text-main sm:text-xl">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-muted sm:text-[15px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
