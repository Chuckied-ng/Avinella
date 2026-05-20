import { Routes, Route, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    );
  }

  return (
    <>
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
