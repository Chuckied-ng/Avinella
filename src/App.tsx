import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Offshore from "@/pages/services/Offshore";
import Procurement from "@/pages/services/Procurement";
import Logistics from "@/pages/services/Logistics";
import HSE from "@/pages/HSE";
import Training from "@/pages/Training";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import AdminLayout from "@/pages/admin/AdminLayout";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/offshore" element={<Offshore />} />
        <Route path="/services/procurement" element={<Procurement />} />
        <Route path="/services/logistics" element={<Logistics />} />
        <Route path="/hse" element={<HSE />} />
        <Route path="/training" element={<Training />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
