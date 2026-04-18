import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";
import { whyChooseData } from "../../data/siteData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="bg-main py-10 sm:py-12 lg:py-14">
      <Container>
        <SectionTitle
          title="Why Choose Us"
          subtitle="Reliable, professional, and convenient laundry care designed for modern lifestyles."
        />

        {/* MOBILE SLIDER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:hidden"
        >
          {whyChooseData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group min-w-[85%] snap-center rounded-[24px] border border-soft bg-surface p-5 text-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white shadow-[var(--color-shadow)]"
            >
              {/* ICON */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-soft)] transition-all duration-300 group-hover:bg-white/20">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* TITLE */}
              <h4 className="mt-5 text-lg font-semibold text-main transition group-hover:text-white">
                {item.title}
              </h4>

              {/* DESC */}
              <p className="mt-3 text-sm leading-6 text-muted transition group-hover:text-white/90">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* DESKTOP GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 hidden grid-cols-2 gap-5 md:grid lg:mt-10 lg:grid-cols-3 lg:gap-6"
        >
          {whyChooseData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-[24px] border border-soft bg-surface p-6 text-center shadow-[var(--color-shadow)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:shadow-xl"
            >
              {/* ICON */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-soft)] transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* TITLE */}
              <h4 className="mt-5 text-lg font-semibold text-main transition group-hover:text-white sm:text-xl">
                {item.title}
              </h4>

              {/* DESC */}
              <p className="mt-3 text-sm leading-6 text-muted transition group-hover:text-white/90 sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
