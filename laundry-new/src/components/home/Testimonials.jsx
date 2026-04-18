import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { googleIcon, reviewBg } from "../../assets";
import { testimonial } from "../../data/siteData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function loadGoogleMaps(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.importLibrary) {
      resolve(window.google);
      return;
    }

    const existingScript = document.querySelector(
      'script[data-google-maps="true"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.google));
      existingScript.addEventListener("error", () =>
        reject(new Error("Failed to load Google Maps script")),
      );
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";

    script.onload = () => {
      if (window.google?.maps) {
        resolve(window.google);
      } else {
        reject(new Error("Google Maps loaded, but API is unavailable"));
      }
    };

    script.onerror = () =>
      reject(new Error("Failed to load Google Maps script"));

    document.head.appendChild(script);
  });
}

function formatGoogleReview(review, index) {
  const authorName =
    review?.authorAttribution?.displayName ||
    review?.author_name ||
    `Google User ${index + 1}`;

  const reviewText = review?.text?.text || review?.text || "";
  const rating = Number(review?.rating || 5);

  let date = "";
  if (review?.publishTime) {
    try {
      date = new Date(review.publishTime).toLocaleDateString();
    } catch {
      date = "";
    }
  } else if (review?.relativePublishTimeDescription) {
    date = review.relativePublishTimeDescription;
  } else if (review?.time) {
    try {
      date = new Date(review.time * 1000).toLocaleDateString();
    } catch {
      date = "";
    }
  }

  return {
    name: authorName,
    text: reviewText,
    date,
    rating,
  };
}

export default function Testimonials() {
  const staticTestimonials = useMemo(
    () => (Array.isArray(testimonial) ? testimonial : [testimonial]),
    [],
  );

  const [googleReviews, setGoogleReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const testimonials =
    googleReviews.length > 0 ? googleReviews : staticTestimonials;

  useEffect(() => {
    let isMounted = true;

    const fetchGoogleReviews = async () => {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
      const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

      if (!apiKey || !placeId) {
        setLoadingReviews(false);
        return;
      }

      try {
        await loadGoogleMaps(apiKey);

        if (!window.google?.maps?.importLibrary) {
          setLoadingReviews(false);
          return;
        }

        await window.google.maps.importLibrary("places");

        const place = new window.google.maps.places.Place({
          id: placeId,
        });

        await place.fetchFields({
          fields: ["displayName", "rating", "reviews"],
        });

        const mappedReviews = Array.isArray(place.reviews)
          ? place.reviews
              .filter((review) =>
                (review?.text?.text || review?.text || "").trim(),
              )
              .map(formatGoogleReview)
          : [];

        if (isMounted && mappedReviews.length > 0) {
          setGoogleReviews(mappedReviews);
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error("Failed to fetch Google reviews:", error);
      } finally {
        if (isMounted) {
          setLoadingReviews(false);
        }
      }
    };

    fetchGoogleReviews();

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
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (currentIndex > testimonials.length - 1) {
      setCurrentIndex(0);
    }
  }, [currentIndex, testimonials.length]);

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

  const currentTestimonial =
    testimonials[currentIndex] || staticTestimonials[0] || {};

  const stars = Math.max(
    1,
    Math.min(5, Number(currentTestimonial?.rating || 5)),
  );

  return (
    <AnimatedSection className="overflow-hidden bg-white py-2 sm:py-4 lg:py-6">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={reviewBg}
              alt="Happy customer"
              className="w-full max-w-[240px] object-contain sm:max-w-[320px] md:max-w-[390px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="max-w-[720px]"
          >
            <SectionTitle
              title="What Our Customers Say About Us"
              subtitle="Real feedback from customers who trust our laundry service."
              align="left"
            />

            <div className="mt-4 rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_36px_rgba(21,74,151,0.12)] sm:mt-6 sm:p-6 md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentTestimonial?.name || "review"}-${currentIndex}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#f3f7fc] text-[17px] font-semibold text-brand sm:h-12 sm:w-12 sm:text-[18px]">
                        {currentTestimonial?.name?.charAt(0) || "G"}
                      </div>

                      <div>
                        <h4 className="text-[18px] font-semibold leading-none text-[#2b2b2b] sm:text-[20px]">
                          {currentTestimonial?.name || "Google Review"}
                        </h4>
                        <p className="mt-2 text-[14px] text-[#8a8a8a] sm:text-[15px]">
                          {currentTestimonial?.date ||
                            (loadingReviews ? "Loading..." : "Google Review")}
                        </p>
                      </div>
                    </div>

                    <img
                      src={googleIcon}
                      alt="Google"
                      className="mt-1 h-6 w-6 object-contain sm:h-7 sm:w-7"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-[22px] leading-none text-[#f7b500] sm:text-[26px]">
                    {Array.from({ length: stars }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>

                  <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#353535] sm:text-[17px] md:text-[18px]">
                    {currentTestimonial?.text || "No review text available."}
                  </p>
                </motion.div>
              </AnimatePresence>

              {testimonials.length > 1 && (
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "w-8 bg-brand"
                            : "w-2.5 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="secondary-btn flex h-10 w-10 items-center justify-center rounded-full"
                      aria-label="Previous testimonial"
                    >
                      <FiChevronLeft className="text-lg" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="secondary-btn flex h-10 w-10 items-center justify-center rounded-full"
                      aria-label="Next testimonial"
                    >
                      <FiChevronRight className="text-lg" />
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
