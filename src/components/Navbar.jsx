import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/servicesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation or Escape
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean, crisp, non-wrapping navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'NC Inspections', path: '/nc-inspections', isSpecial: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full select-none transition-all duration-300">
      {/* Top Notification / Trust Bar - Pure Carbon with Gold & Red accents */}
      <div className="bg-carbon-950/95 text-zinc-300 text-xs border-b border-carbon-800/80 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6 whitespace-nowrap shrink-0">
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-medium text-zinc-200">420 E Main Street, Historic Downtown Clayton</span>
            </a>
            <div className="flex items-center gap-1.5 text-zinc-400 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-racing-400 shrink-0" />
              <span>Mon–Fri 7:30 AM–5:30 PM <span className="text-amber-400 font-semibold">• Inspections Cut Off 4:30 PM</span></span>
            </div>
          </div>

          <div className="flex items-center space-x-5 whitespace-nowrap shrink-0">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full whitespace-nowrap">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>NC Station #38192-S</span>
            </div>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 font-bold text-white hover:text-racing-400 transition-colors group whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-racing-500 group-hover:rotate-12 transition-transform shrink-0" />
              <span>(919) 553-7300</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-carbon-900/95 backdrop-blur-xl shadow-2xl border-b border-carbon-800/90 py-2.5' 
          : 'bg-carbon-900/90 backdrop-blur-lg border-b border-white/5 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 shrink-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    relative px-3.5 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0
                    ${isActive 
                      ? 'text-white bg-racing-600/20 border border-racing-500/50 shadow-inner' 
                      : 'text-zinc-300 hover:text-white hover:bg-carbon-800/60 border border-transparent'}
                  `}
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  {link.isSpecial && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" title="Official NC Certified Station" />
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Section */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-zinc-200 hover:text-white bg-carbon-850 hover:bg-carbon-800 border border-carbon-750 transition-all whitespace-nowrap shrink-0"
                title="Call Clayton Auto Repair"
              >
                <Phone className="w-3.5 h-3.5 text-racing-400 shrink-0" />
                <span className="whitespace-nowrap">(919) 553-7300</span>
              </a>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 hover:from-racing-500 hover:to-amber-400 shadow-md shadow-racing-600/30 hover:shadow-racing-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white shrink-0" />
                <span className="whitespace-nowrap">Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2 text-racing-400 bg-carbon-850 rounded-xl border border-carbon-700 sm:hidden active:scale-95 transition-transform shrink-0"
                aria-label="Call Shop"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-300 hover:text-white bg-carbon-850 border border-carbon-700 focus:outline-none focus:ring-2 focus:ring-racing-500 transition-colors shrink-0"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-racing-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-carbon-950 border-l border-carbon-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-carbon-800">
                <Logo size="small" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-carbon-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Location Badge */}
              <div className="mt-4 p-3.5 bg-carbon-900 rounded-2xl border border-carbon-800 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5 whitespace-nowrap">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    Historic Downtown Clayton
                  </span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                    NC Station
                  </span>
                </div>
                <p className="text-xs text-zinc-300">420 E Main Street • Drop off & walk to cafes</p>
              </div>

              {/* Navigation Links */}
              <nav className="mt-5 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap
                      ${isActive 
                        ? 'text-white bg-racing-600/20 border border-racing-500/50 font-bold shadow-md' 
                        : 'text-zinc-200 hover:bg-carbon-900/60 hover:text-white'}
                    `}
                  >
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      {link.name}
                      {link.isSpecial && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="mt-8 space-y-3 pt-5 border-t border-carbon-800">
              <Link
                to="/appointment"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 shadow-xl shadow-racing-600/30 active:scale-95 transition-transform whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-white shrink-0" />
                <span className="whitespace-nowrap">Book Appointment Online</span>
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-carbon-850 hover:bg-carbon-800 border border-carbon-700 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-racing-400 shrink-0" />
                <span className="whitespace-nowrap">Call (919) 553-7300</span>
              </a>

              <p className="text-[11px] text-center text-zinc-400 pt-2 leading-relaxed">
                Mon–Fri 7:30 AM–5:30 PM • Inspections Cut Off 4:30 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
