import AnimatedSection from "../common/AnimatedSection";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/siteData";
import PrimaryButton from "../common/PrimaryButton";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function ServiceList() {
  return (
    <AnimatedSection className="section-space bg-white">
      <div className="container-custom px-4 sm:px-6 ">
        <SectionTitle title="Our Services" />

        <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16 md:space-y-20">
          {services.map((item, i) => (
            <div
              key={item.id}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
            >
              {/* Image */}
              <div className={i % 2 !== 0 ? "md:order-2" : "md:order-1"}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[240px] w-full rounded-2xl object-cover shadow-lg sm:h-[320px] md:h-[380px] lg:h-[420px]"
                />
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-semibold text-brand sm:text-3xl md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted sm:text-base md:text-lg">
                  {item.desc}
                </p>

                <ul className="mt-5 space-y-3">
                  {item.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-main sm:text-base"
                    >
                      <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 w-full sm:w-auto">
                  <Link to="/contact" className="block w-full sm:w-auto">
                    <PrimaryButton className="w-full sm:w-auto">
                      Book Now
                    </PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
