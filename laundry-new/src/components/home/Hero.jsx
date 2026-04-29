import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Shield,
  Truck,
  X,
  ArrowRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import PrimaryButton from "../common/PrimaryButton";
import useContactForm from "../../hooks/useContactForm";
import { bg } from "../../assets";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const features = [
  { icon: Clock, text: "Same Day Service" },
  { icon: Shield, text: "Quality Guaranteed" },
  { icon: Truck, text: "Click and Collect" },
];

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const { formData, handleChange, handleSubmit, isSubmitting, resetForm } =
    useContactForm({
      redirectTo: "/thank-you",
      resetAfterSubmit: true,
      closeAfterSubmit: () => setIsPopupOpen(false),
    });

  const handleOpenPopup = () => setIsPopupOpen(true);

  const handleClosePopup = () => {
    if (isSubmitting) return;
    setIsPopupOpen(false);
    resetForm();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-main">
        <div className="absolute inset-0">
          <motion.img
            src={bg}
            alt="Laundry service"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full w-full object-cover object-center opacity-[0.16]"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(21,74,151,0.22) 0%, rgba(21,74,151,0.10) 34%, rgba(255,255,255,0.78) 100%)",
            }}
          />

          <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-60px] h-[240px] w-[240px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        </div>

        <AnimatedSection className="relative z-10 flex min-h-[100svh] items-center">
          <div className="container-custom w-full pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_430px]">
              <motion.div
                variants={staggerWrap}
                initial="hidden"
                animate="visible"
                className="mx-auto w-full max-w-[720px] text-center lg:mx-0 lg:text-left"
              >
                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-main sm:mt-6 sm:text-[3.4rem] md:text-[4.4rem] lg:max-w-[680px]"
                  style={{
                    color: "var(--color-primary)",
                    textShadow: "0 4px 18px rgba(255,255,255,0.32)",
                  }}
                >
                  <span className="block">50 Years of</span>
                  <span className="block">Laundry Legacy</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mx-auto mt-5 max-w-[640px] text-sm leading-7 text-main sm:mt-6 sm:text-base md:text-lg md:leading-8 lg:mx-0"
                  style={{ color: "var(--color-text)" }}
                >
                  A Highly Recommended & Much Loved Laundry Service in Coventry
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start"
                >
                  <div className="w-full sm:w-auto" onClick={handleOpenPopup}>
                    <PrimaryButton className="!w-full !rounded-full !px-6 !py-3.5 sm:!w-auto">
                      BOOK PICKUP
                      <span className="btn-icon">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </PrimaryButton>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate("/services")}
                    className="w-full rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:w-auto"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      color: "var(--color-primary)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "0 10px 24px rgba(21,74,151,0.08)",
                    }}
                  >
                    VIEW SERVICES
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 lg:justify-start"
                >
                  {features.map((feature) => (
                    <div
                      key={feature.text}
                      className="inline-flex items-center gap-2.5 rounded-full px-4 py-2.5"
                      style={{
                        background: "rgba(255,255,255,0.88)",
                        color: "var(--color-text)",
                        boxShadow: "0 10px 22px rgba(21,74,151,0.07)",
                        border: "1px solid rgba(214,228,243,0.9)",
                      }}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)]/10">
                        <feature.icon
                          className="h-4 w-4 shrink-0"
                          style={{ color: "var(--color-secondary)" }}
                        />
                      </span>
                      <span className="text-xs font-semibold sm:text-sm">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="mx-auto hidden w-full max-w-[380px] lg:block xl:max-w-[430px]"
              >
                <div className="relative">
                  <div className="absolute -left-5 -top-5 h-24 w-24 rounded-[28px] bg-[var(--color-secondary)]/12 blur-2xl" />
                  <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-[var(--color-primary)]/12 blur-2xl" />

                  <div
                    className="relative overflow-hidden rounded-[30px] border border-white/70 p-4 backdrop-blur-sm"
                    style={{
                      background: "rgba(255,255,255,0.76)",
                      boxShadow: "0 18px 44px rgba(21,74,151,0.14)",
                    }}
                  >
                    <div className="overflow-hidden rounded-[22px]">
                      <img
                        src={bg}
                        alt="Laundry service"
                        className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 xl:h-[320px]"
                      />
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.16em]"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          Premium Care
                        </p>
                        <h3
                          className="mt-1 text-xl font-bold"
                          style={{ color: "var(--color-primary)" }}
                        >
                          Fast. Hygienic. Reliable.
                        </h3>
                        <p
                          className="mt-2 text-sm leading-6"
                          style={{ color: "var(--color-text-light)" }}
                        >
                          Professional laundry services with careful handling
                          for daily wear, bedding, and delicate fabrics.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-[18px] bg-white/90 px-3 py-3 text-center shadow-sm">
                        <p
                          className="text-lg font-bold"
                          style={{ color: "var(--color-primary)" }}
                        >
                          50+
                        </p>
                        <p
                          className="mt-1 text-[11px] font-medium"
                          style={{ color: "var(--color-text-light)" }}
                        >
                          Years
                        </p>
                      </div>

                      <div className="rounded-[18px] bg-white/90 px-3 py-3 text-center shadow-sm">
                        <p
                          className="text-lg font-bold"
                          style={{ color: "var(--color-primary)" }}
                        >
                          24h
                        </p>
                        <p
                          className="mt-1 text-[11px] font-medium"
                          style={{ color: "var(--color-text-light)" }}
                        >
                          Fast Turnaround
                        </p>
                      </div>

                      <div className="rounded-[18px] bg-white/90 px-3 py-3 text-center shadow-sm">
                        <p
                          className="text-lg font-bold"
                          style={{ color: "var(--color-primary)" }}
                        >
                          100%
                        </p>
                        <p
                          className="mt-1 text-[11px] font-medium"
                          style={{ color: "var(--color-text-light)" }}
                        >
                          Care
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <AnimatePresence>
        {isPopupOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[100] bg-black/45 backdrop-blur-[3px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePopup}
            />

            <motion.div
              className="fixed left-1/2 top-1/2 z-[101] flex max-h-[88svh] w-[94%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[26px] bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-[30px]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div
                className="border-b px-4 py-5 sm:px-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(234,244,251,0.9) 0%, rgba(255,255,255,1) 100%)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Pickup Request
                    </p>
                    <h3
                      className="text-xl font-bold sm:text-2xl"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Book a Pickup
                    </h3>
                    <p
                      className="mt-2 text-sm sm:text-base"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      Fill in your details and our team will contact you about
                      your laundry service request.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleClosePopup}
                    disabled={isSubmitting}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:bg-slate-100 disabled:opacity-60"
                    aria-label="Close popup"
                  >
                    <X size={20} style={{ color: "var(--color-text)" }} />
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5"
              >
                {/* NAME + PHONE */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="input-ui"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="input-ui"
                      required
                    />
                  </div>
                </div>

                {/* EMAIL + SERVICE */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="input-ui"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Service Type
                    </label>
                    <select
                      name="service_type"
                      value={formData.service_type}
                      onChange={handleChange}
                      className="input-ui"
                      required
                    >
                      <option value="Wash & Dry">Wash & Dry</option>
                      <option value="Ironing">Ironing</option>
                      <option value="Pickup & Delivery">
                        Pickup & Delivery
                      </option>
                      <option value="Commercial Laundry">
                        Commercial Laundry
                      </option>
                    </select>
                  </div>
                </div>

                {/* ADDRESS + POSTCODE (NEW) */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Pickup Address
                    </label>
                    <input
                      type="text"
                      name="pickup_address"
                      value={formData.pickup_address}
                      onChange={handleChange}
                      placeholder="Street / Area"
                      className="input-ui"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Postcode
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode || ""}
                      onChange={handleChange}
                      placeholder="e.g. CV3 5HW"
                      className="input-ui"
                      required
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what service you need"
                    className="input-ui resize-none"
                    required
                  />
                </div>

                {/* SEO LOCATION TEXT */}
                <p className="text-xs text-muted">
                  We serve Coventry areas including CV1, CV2, CV3, CV4, CV5 and
                  CV6.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="primary-btn flex w-full items-center justify-center gap-2 sm:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleClosePopup}
                    className="w-full rounded-full border px-6 py-3 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
