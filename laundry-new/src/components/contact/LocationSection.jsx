import AnimatedSection from "../common/AnimatedSection";
import { FiMapPin, FiNavigation } from "react-icons/fi";

export default function LocationSection() {
  return (
    <AnimatedSection className="section-space bg-surface">
      <div className="container-custom px-4 sm:px-6">
        {/* Mobile title (only visible on mobile) */}
        <div className="lg:hidden text-center mb-4">
          <h3 className="text-lg font-bold text-brand">Our Location</h3>
        </div>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* CONTENT → hidden on mobile */}
          <div className="hidden lg:block rounded-[26px] bg-white p-8 lg:p-10 card-shadow">
            <p className="eyebrow">Our Location</p>

            <h2 className="mt-3 text-[34px] font-extrabold text-brand leading-tight">
              Easy to Reach, Ready to Help
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-muted">
              Proudly serving Coventry with trusted laundry care, reliable
              service, and convenient pickup options for busy households.
            </p>

            {/* Address */}
            <div className="mt-7 rounded-[20px] border-soft bg-[var(--color-soft)] p-5">
              <div className="flex items-start gap-4">
                <div className="icon-badge">
                  <FiMapPin className="text-[20px] text-brand" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide">
                    Address
                  </p>

                  <p className="mt-2 text-[16px] font-semibold text-main">
                    3 Quinton Parade, Coventry, CV3 5HW, UK
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="mt-5 rounded-[20px] border-soft bg-white p-5">
              <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide">
                Coverage
              </p>

              <p className="mt-2 text-[15px] text-muted">
                Pickup and delivery available across Coventry areas.
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href="https://www.google.com/maps?q=3+Quinton+Parade,+Coventry,+CV3+5HW,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Get Directions
                <span className="btn-icon">
                  <FiNavigation className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          {/* MAP → always visible */}
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] bg-white card-shadow">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 border-b border-[var(--color-border)]">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--color-secondary)]">
                  Find Us
                </p>
                <h3 className="text-sm font-semibold text-brand">
                  Coventry Location
                </h3>
              </div>

              <a
                href="https://www.google.com/maps?q=3+Quinton+Parade,+Coventry,+CV3+5HW,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                <FiNavigation className="text-[16px]" />
              </a>
            </div>

            {/* Map */}
            <div className="h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
              <iframe
                title="Soapy Suds Location"
                src="https://www.google.com/maps?q=3+Quinton+Parade,+Coventry,+CV3+5HW,+UK&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Mobile floating button */}
            <a
              href="https://www.google.com/maps?q=3+Quinton+Parade,+Coventry,+CV3+5HW,+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
