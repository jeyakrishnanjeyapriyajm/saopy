import AnimatedSection from "../common/AnimatedSection";
import { FiPhone, FiMail, FiMapPin, FiInfo } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCardSection() {
  return (
    <AnimatedSection className="section-space pt-0 ">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_24px_60px_rgba(21,74,151,0.14)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT PANEL */}
            <div className="blue-panel px-8 py-10 md:px-12 md:py-14">
              <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[40px]">
                Get in Touch
              </h2>

              <p className="mt-8 max-w-[420px] text-[18px] leading-[1.55] text-white/85">
                We’re here to help with bookings, service questions, and pickup
                requests across Coventry.
              </p>

              <div className="mt-12 space-y-9">
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-[#1e5db1]">
                    <FiPhone className="text-[20px] text-[var(--color-secondary)]" />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-white/90">
                      Phone
                    </p>
                    <p className="mt-2 text-[18px] leading-none text-white">
                      024 7655 1234
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-[#1e5db1]">
                    <FiMail className="text-[20px] text-[var(--color-secondary)]" />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-white/90">
                      Email
                    </p>
                    <p className="mt-2 text-[18px] leading-none text-white break-all">
                      hello@soapysudsshine.co.uk
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] bg-[#1e5db1]">
                    <FiMapPin className="text-[20px] text-[var(--color-secondary)]" />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-white/90">
                      Address
                    </p>
                    <p className="mt-2 max-w-[290px] text-[18px] leading-[1.35] text-white">
                      123 Sky Blue Way,
                      <br />
                      Coventry, CV1 2PT
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/35 pt-8">
                <h3 className="text-[18px] font-semibold text-white">
                  Service Hours
                </h3>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between gap-4 text-[15px] text-white/95">
                    <span>Mon–Fri</span>
                    <span>8:00–19:00</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-[15px] text-white/95">
                    <span>Saturday</span>
                    <span>9:00–17:00</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-[15px] text-white/95">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-center text-[14px] text-[#7bd3ff]">
                  <FiInfo className="text-[14px] text-[#7bd3ff]" />
                  <span>Response during service hours</span>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-[#f7f7f7] px-8 py-10 md:px-12 md:py-14">
              <h2 className="text-[32px] font-semibold leading-tight text-brand md:text-[40px]">
                Send Us a Message
              </h2>

              <p className="mt-6 max-w-[540px] text-[18px] leading-[1.5] text-[#5f6672]">
                Fill out the form below and our concierge team will get back to
                you shortly.
              </p>

              <form className="mt-10">
                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-[56px] w-full rounded-[14px] border-none bg-[#e9eef7] px-5 text-[16px] text-brand outline-none placeholder:text-[#8f97a6]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="h-[56px] w-full rounded-[14px] border-none bg-[#e9eef7] px-5 text-[16px] text-brand outline-none placeholder:text-[#8f97a6]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="07123 456789"
                      className="h-[56px] w-full rounded-[14px] border-none bg-[#e9eef7] px-5 text-[16px] text-brand outline-none placeholder:text-[#8f97a6]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                      Service Needed
                    </label>
                    <input
                      type="text"
                      placeholder="General Inquiry"
                      className="h-[56px] w-full rounded-[14px] border-none bg-[#e9eef7] px-5 text-[16px] text-brand outline-none placeholder:text-[#5f6672]"
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                    Pickup Address
                  </label>
                  <input
                    type="text"
                    placeholder="House number, Street, Coventry"
                    className="h-[56px] w-full rounded-[14px] border-none bg-[#e9eef7] px-5 text-[16px] text-brand outline-none placeholder:text-[#8f97a6]"
                  />
                </div>

                <div className="mt-7 max-w-[220px]">
                  <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                    Preferred Pickup Date
                  </label>
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="h-[56px] w-full rounded-[14px] border-none bg-[#e9eef7] px-5 text-[16px] text-brand outline-none placeholder:text-[#8f97a6]"
                  />
                </div>

                <div className="mt-7">
                  <label className="mb-3 block text-[15px] font-semibold text-[#4a4f57]">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-[14px] border-none bg-[#e9eef7] px-5 py-4 text-[16px] text-brand outline-none placeholder:text-[#8f97a6]"
                  />
                </div>

                <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center">
                  <button
                    type="submit"
                    className="flex h-[60px] min-w-[220px] items-center justify-center rounded-full bg-[#ff1f2d] px-8 text-[18px] font-semibold text-white transition duration-300 hover:translate-y-[-2px]"
                  >
                    Send Message
                  </button>

                  <a
                    href="https://wa.me/447731830701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[16px] font-semibold leading-[1.25] text-[#0b6c94]"
                  >
                    <FaWhatsapp className="text-[24px] text-[#25D366]" />
                    <span>
                      Prefer quick help?
                      <br />
                      Chat on WhatsApp
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
