import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { googleIcon, reviewBg } from "../../assets";
import { testimonial } from "../../data/siteData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const API_URL =
  "https://featurable.com/api/v1/widgets/d452ea1a-0f7d-46b3-9ab0-d02b14d3ee94";

function formatReview(review, index) {
  return {
    name: review?.reviewer?.displayName || `Customer ${index + 1}`,
    photo: review?.reviewer?.profilePhotoUrl || "",
    text: review?.comment || "",
    date: review?.createTime
      ? new Date(review.createTime).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "Google Review",
    rating: Math.max(1, Math.min(5, Number(review?.starRating || 5))),
  };
}

export default function Testimonials() {
  const staticTestimonials = useMemo(
    () => (Array.isArray(testimonial) ? testimonial : [testimonial]),
    [],
  );

  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const testimonials = reviews.length > 0 ? reviews : staticTestimonials;
  const current = testimonials[currentIndex] || {};

  useEffect(() => {
    let isMounted = true;

    const fetchReviews = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) throw new Error("Failed to fetch reviews");

        const data = await res.json();

        const mappedReviews = Array.isArray(data?.reviews)
          ? data.reviews
              .filter((review) => review?.comment?.trim())
              .map(formatReview)
          : [];

        if (isMounted && mappedReviews.length > 0) {
          setReviews(mappedReviews);
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error("Review fetch error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <AnimatedSection className="overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative hidden justify-center lg:flex"
          >
            <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full bg-[var(--color-bg-light)]/60 blur-2xl" />

            <img
              src={reviewBg}
              alt="Happy customer"
              className="relative z-10 w-full max-w-[360px] object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="mx-auto w-full max-w-[760px] lg:mx-0"
          >
            <SectionTitle
              title="What Our Customers Say"
              subtitle="Real Google reviews from happy customers who trust our laundry service."
              align="left"
            />

            <div className="relative mt-6 overflow-hidden rounded-[30px] border border-[var(--color-border-custom)] bg-white p-5 shadow-[0_22px_60px_rgba(13,42,82,0.12)] sm:p-7 md:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[var(--color-bg-light)]/70" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current?.name || "review"}-${currentIndex}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {current?.photo ? (
                        <img
                          src={current.photo}
                          alt={current.name}
                          referrerPolicy="no-referrer"
                          className="h-14 w-14 rounded-full border-4 border-white object-cover shadow-md sm:h-16 sm:w-16"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-bg-light)] text-xl font-bold text-[var(--color-primary)] shadow-md sm:h-16 sm:w-16">
                          {current?.name?.charAt(0) || "C"}
                        </div>
                      )}

                      <div>
                        <h4 className="text-[18px] font-bold text-[var(--color-primary)] sm:text-[21px]">
                          {current?.name || "Customer"}
                        </h4>

                        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                          {current?.date ||
                            (loading ? "Loading..." : "Google Review")}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <img
                        src={googleIcon}
                        alt="Google"
                        className="h-6 w-6 object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-[24px] leading-none text-[#f7b500] sm:text-[28px]">
                    {Array.from({ length: current?.rating || 5 }).map(
                      (_, index) => (
                        <span key={index}>★</span>
                      ),
                    )}
                  </div>

                  <p className="mt-5 text-[16px] leading-8 text-[var(--color-text-primary)] sm:text-[18px]">
                    “{current?.text || "No review available."}”
                  </p>
                </motion.div>
              </AnimatePresence>

              {testimonials.length > 1 && (
                <div className="relative z-10 mt-7 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                    {currentIndex + 1} / {testimonials.length}
                  </p>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous review"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-custom)] bg-white text-[var(--color-primary)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FiChevronLeft className="text-xl" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next review"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <FiChevronRight className="text-xl" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
