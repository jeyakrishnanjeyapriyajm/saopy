import { motion } from "framer-motion";

export default function AnimatedSection({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
