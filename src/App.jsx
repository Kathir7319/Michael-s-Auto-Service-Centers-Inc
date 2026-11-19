import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import NcInspectionPage from './pages/NcInspectionPage';
import AppointmentPage from './pages/AppointmentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { COMPANY_INFO } from './data/servicesData';

function FloatingMobileCTA() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on appointment page
  if (location.pathname === '/appointment' || !show) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:hidden flex items-center gap-2 animate-fadeIn">
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="p-3.5 rounded-full bg-slate-900 border border-slate-700 text-amber-400 shadow-xl flex items-center justify-center active:scale-95"
        aria-label="Call Shop"
      >
        <Phone className="w-5 h-5" />
      </a>
      <Link
        to="/appointment"
        className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-xl shadow-amber-500/30 active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4 text-slate-950" />
        <span>Book Bay Slot</span>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/nc-inspections" element={<NcInspectionPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingMobileCTA />
      </div>
    </Router>
  );
}
