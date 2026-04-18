import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import ThankYou from "../pages/ThankYou";
import ScrollToTop from "../components/common/ScrollToTop";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}
