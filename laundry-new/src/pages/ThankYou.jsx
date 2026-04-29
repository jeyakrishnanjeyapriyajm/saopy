import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home, Phone } from "lucide-react";
import { logo } from "../assets";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-[640px] overflow-hidden rounded-[28px] border border-border bg-surface shadow-lg"
      >
        {/* 🔥 Logo Header */}
        <div className="pt-20 flex flex-col items-center justify-center border-b border-border px-6 py-6">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* 🔥 Success Section */}
        <div className="px-6 py-8 text-center sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>

          <h1 className="mt-5 text-2xl font-extrabold text-text-primary sm:text-3xl">
            Request Sent Successfully
          </h1>

          <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
            Thank you for contacting us. Our team will review your request and
            get back to you shortly.
          </p>
        </div>

        {/* 🔥 Info Section */}
        <div className="px-6 pb-8 sm:px-10">
          <div className="rounded-[20px] border border-border bg-background p-5">
            <h2 className="text-lg font-bold text-text-primary">
              What happens next?
            </h2>

            <div className="mt-4 space-y-3">
              <p className="text-sm text-text-secondary">
                • Our team will review your request details.
              </p>
              <p className="text-sm text-text-secondary">
                • We will contact you shortly to confirm your booking.
              </p>
              <p className="text-sm text-text-secondary">
                • You will be redirected to the home page in a few seconds.
              </p>
            </div>
          </div>

          {/* 🔥 Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>
          </div>

          {/* 🔥 Redirect Notice */}
          <div className="mt-6 text-center">
            <p className="inline-flex items-center gap-2 text-sm text-text-secondary">
              Redirecting to home page
              <ArrowRight className="h-4 w-4" />
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
