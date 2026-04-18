import AnimatedSection from "../common/AnimatedSection";
import { FiPhone, FiMail, FiMapPin, FiInfo } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, Loader2 } from "lucide-react";
import useContactForm from "../../hooks/useContactForm";

export default function ContactPreview() {
  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm(
    {
      redirectTo: "/thank-you",
    },
  );

  return (
    <AnimatedSection className="section-space pt-0 ">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-[0_24px_60px_rgba(21,74,151,0.14)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT PANEL */}
            <div className="blue-panel px-8 py-10 md:px-12 md:py-14">
              <h2 className="text-[32px] font-semibold text-white md:text-[40px]">
                Get in Touch
              </h2>

              <p className="mt-8 text-[18px] text-white/85">
                We’re here to help with bookings, service questions, and pickup
                requests.
              </p>

              <div className="mt-12 space-y-9">
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="icon-badge">
                    <FiPhone className="text-[20px] text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Phone</p>
                    <p className="text-lg text-white">02476502101</p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="icon-badge">
                    <FiMail className="text-[20px] text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Email</p>
                    <p className="text-lg text-white break-all">
                      info.soapysudsshine@gmail.com
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="icon-badge">
                    <FiMapPin className="text-[20px] text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Address</p>
                    <p className="text-lg text-white">
                      3 Quinton Parade, Coventry, CV3 5HW, UK
                    </p>
                  </div>
                </div>
              </div>

              {/* HOURS */}
              <div className="mt-12 border-t border-white/30 pt-6">
                <h3 className="text-lg text-white">Service Hours</h3>

                <div className="mt-4 space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Mon–Fri</span>
                    <span>7:30 am – 14:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 am – 16:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#7bd3ff]">
                  <FiInfo />
                  Response during service hours
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (FORM) */}
            <div className="bg-[#f7f7f7] px-8 py-10 md:px-12 md:py-14">
              <h2 className="text-[32px] text-brand md:text-[40px]">
                Send Us a Message
              </h2>

              <p className="mt-4 text-[16px] text-muted">
                Fill out the form below and we will get back shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-10">
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="input-ui"
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="input-ui"
                  />

                  <input
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="input-ui"
                  />

                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className="input-ui"
                  >
                    <option>Wash </option>
                    <option>Ironing</option>
                    <option>Pickup & Delivery</option>
                  </select>
                </div>

                <input
                  name="pickup_address"
                  value={formData.pickup_address}
                  onChange={handleChange}
                  placeholder="Pickup Address"
                  className="input-ui mt-6"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="input-ui mt-6 resize-none"
                />

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="primary-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="btn-icon">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/+447731830701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[16px] font-semibold text-brand"
                  >
                    <FaWhatsapp className="text-[24px] text-[#25D366]" />
                    Chat on WhatsApp
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
