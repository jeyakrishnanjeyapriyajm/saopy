import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiShield, FiTruck } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../common/AnimatedSection";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import { commercialServices } from "../../data/siteData";

const commercialPoints = [
  {
    icon: FiClock,
    title: "Fast Turnaround",
    desc: "Quick and dependable service for busy businesses.",
  },
  {
    icon: FiShield,
    title: "Professional Care",
    desc: "Handled with attention, quality, and consistency.",
  },
  {
    icon: FiTruck,
    title: "Pickup & Delivery",
    desc: "Convenient collection and drop-off support available.",
  },
  {
    icon: FiCheckCircle,
    title: "Tailored Solutions",
    desc: "Flexible service options for different commercial needs.",
  },
];

export default function CommercialPreview() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId = null;
    let paused = false;

    const scrollStep = () => {
      if (!container) return;

      if (!paused) {
        container.scrollLeft += 0.45;

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }

      frameId = window.requestAnimationFrame(scrollStep);
    };

    const pauseScroll = () => {
      paused = true;
    };

    const resumeScroll = () => {
      paused = false;
    };

    frameId = window.requestAnimationFrame(scrollStep);

    container.addEventListener("mouseenter", pauseScroll);
    container.addEventListener("mouseleave", resumeScroll);
    container.addEventListener("touchstart", pauseScroll, { passive: true });
    container.addEventListener("touchend", resumeScroll);
    container.addEventListener("focusin", pauseScroll);
    container.addEventListener("focusout", resumeScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      container.removeEventListener("mouseenter", pauseScroll);
      container.removeEventListener("mouseleave", resumeScroll);
      container.removeEventListener("touchstart", pauseScroll);
      container.removeEventListener("touchend", resumeScroll);
      container.removeEventListener("focusin", pauseScroll);
      container.removeEventListener("focusout", resumeScroll);
    };
  }, []);

  return (
    <AnimatedSection className="overflow-hidden bg-white pt-0 pb-12 sm:pt-4 sm:pb-14 lg:pt-20 lg:pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 xl:gap-16">
          {/* Left Content - hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <div className="w-full max-w-[560px]">
              <div className="max-w-[520px]">
                <SectionTitle
                  eyebrow="Trusted Cleaning Experts"
                  title="Commercial Secondary Services"
                  align="left"
                />

                <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Reliable commercial laundry services for businesses that need
                  consistency, quality, and professional care at every stage.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {commercialPoints.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-soft)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--color-shadow)]"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          <Icon className="text-[18px] text-brand" />
                        </div>

                        <div>
                          <h4 className="text-[15px] font-semibold leading-6 text-main sm:text-base">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-6 text-muted sm:text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8">
                <PrimaryButton
                  className="!px-6 !py-3.5"
                  onClick={() => navigate("/services")}
                >
                  Explore Services
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative lg:col-start-2 overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-12 bg-gradient-to-r from-white via-white/95 to-transparent sm:block" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-12 bg-gradient-to-l from-white via-white/95 to-transparent sm:block" />

            <div
              ref={scrollRef}
              className="no-scrollbar flex overflow-x-auto pb-3 scroll-smooth"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex gap-4 pr-4 sm:gap-5 sm:pr-5">
                {[...commercialServices, ...commercialServices].map(
                  (item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      className="group w-[240px] min-w-[240px] overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_10px_24px_rgba(21,74,151,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(21,74,151,0.14)] sm:w-[270px] sm:min-w-[270px] lg:w-[290px] lg:min-w-[290px] xl:w-[300px] xl:min-w-[300px]"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[200px] lg:h-[215px]"
                        />

                        <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-brand shadow-sm backdrop-blur-sm">
                          Commercial
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 lg:p-6">
                        <h4 className="text-[16px] font-semibold leading-7 text-main sm:text-[18px]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted sm:text-[15px]">
                          {item.desc}
                        </p>

                        <button
                          type="button"
                          onClick={() => navigate("/services")}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition duration-300 hover:gap-3"
                        >
                          <span>Learn more</span>
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
