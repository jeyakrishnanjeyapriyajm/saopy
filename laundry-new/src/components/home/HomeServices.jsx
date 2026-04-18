import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ added
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";
import { flowSteps, services } from "../../data/siteData";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = services[currentIndex];
  const isEven = currentIndex % 2 === 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-main">
      {/* HOW IT WORKS */}
      <AnimatedSection className="py-14 sm:py-16 lg:py-20">
        <Container>
          <SectionTitle
            title="How Our Service Works"
            subtitle="A simple and convenient laundry process designed for busy homes and businesses."
          />

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {flowSteps.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[24px] bg-white p-5 text-center shadow-[var(--color-shadow)] sm:p-6"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-soft)] sm:h-20 sm:w-20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-8 w-auto object-contain sm:h-10"
                  />
                </div>

                <div className="mt-5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-[var(--color-primary)] px-3 text-xs font-semibold text-white">
                  Step {index + 1}
                </div>

                <h4 className="mt-4 text-lg font-semibold text-brand sm:text-xl">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                  {item.desc}
                </p>

                {index !== flowSteps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[var(--color-shadow)]">
                      <FiArrowRight className="text-brand" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* SERVICES */}
      <AnimatedSection className="pb-14 sm:pb-16 lg:pb-20">
        <Container>
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[var(--color-shadow)]">
            <div className="border-b border-[var(--color-border)] px-5 py-6 sm:px-8 sm:py-8">
              <SectionTitle
                title="Our Services"
                subtitle="Professional laundry care tailored for everyday wear, households, and businesses."
              />
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                {/* IMAGE */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${currentService.id}`}
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isEven ? -24 : 24 }}
                    transition={{ duration: 0.4 }}
                    className={
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }
                  >
                    <div className="relative overflow-hidden rounded-[24px] bg-[var(--color-soft)]">
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[460px]"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.25)] to-transparent p-4 sm:p-5">
                        <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-sm sm:text-sm">
                          Premium Laundry Care
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* TEXT */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentService.id}`}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isEven ? 24 : -24 }}
                    transition={{ duration: 0.4 }}
                    className={
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }
                  >
                    <div className="max-w-[560px]">
                      <div className="inline-flex rounded-full bg-[var(--color-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand sm:text-sm">
                        Service {currentIndex + 1}
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold leading-tight text-brand sm:text-3xl lg:text-4xl">
                        {currentService.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-main sm:text-base lg:text-lg lg:leading-8">
                        {currentService.desc}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {currentService.bullets.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 rounded-[16px] bg-[var(--color-soft)] px-4 py-3"
                          >
                            <div className="mt-0.5 shrink-0">
                              {currentService.icons?.[index] ? (
                                <img
                                  src={currentService.icons[index]}
                                  alt={item}
                                  className="h-5 w-5 object-contain"
                                />
                              ) : (
                                <FiCheckCircle className="h-5 w-5 text-brand" />
                              )}
                            </div>

                            <span className="text-sm leading-6 text-main sm:text-base">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                        {/* ✅ ONLY CHANGE HERE */}
                        <Link
                          to="/contact"
                          className="primary-btn w-full sm:w-auto text-center"
                        >
                          Book Now
                        </Link>

                        <div className="flex items-center justify-center gap-3 sm:justify-start">
                          <button
                            onClick={handlePrev}
                            className="secondary-btn flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                          >
                            <FiArrowLeft />
                          </button>

                          <button
                            onClick={handleNext}
                            className="secondary-btn flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                          >
                            <FiArrowRight />
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2">
                        {services.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full ${
                              currentIndex === index
                                ? "w-8 bg-[var(--color-primary)]"
                                : "w-2.5 bg-[var(--color-border)]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </section>
  );
}
