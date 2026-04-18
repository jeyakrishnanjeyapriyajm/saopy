import AnimatedSection from "../common/AnimatedSection";
import { faqs } from "../../data/siteData";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FaqSection() {
  const [open, setOpen] = useState(1);

  return (
    <AnimatedSection className="section-space bg-surface">
      <div className="container-custom px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h3 className="mt-3 text-[28px] font-bold leading-tight text-brand sm:text-[34px] md:text-[40px]">
              Before You Contact Us
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-muted sm:text-base">
              Quick answers to common questions about our laundry services,
              pickups, and delivery support.
            </p>
          </div>

          <div className="mt-10 space-y-4 sm:space-y-5">
            {faqs.map((faq) => {
              const isOpen = open === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[var(--color-secondary)] bg-white shadow-[0_18px_45px_rgba(21,74,151,0.12)]"
                      : "border-[var(--color-border)] bg-white card-shadow"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="text-[16px] font-semibold leading-7 text-main sm:text-[18px]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-soft)] text-brand"
                      }`}
                    >
                      {isOpen ? (
                        <FiMinus className="text-[18px]" />
                      ) : (
                        <FiPlus className="text-[18px]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="h-px w-full bg-[var(--color-border)]" />
                        <p className="pt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
