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
  Award,
  ChevronRight,
  Sparkles,
  ArrowRight
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

  // Clean, perfectly proportioned navigation links (eliminates clutter and duplicate CTAs)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'NC Inspections', path: '/nc-inspections', isSpecial: true },
    { name: 'Heritage & About', path: '/about' },
    { name: 'Contact & Directions', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full select-none transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-obsidian-950/95 text-slate-300 text-xs border-b border-obsidian-800/80 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-medium text-slate-200">420 E Main Street, Historic Downtown Clayton</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Mon–Fri 7:30 AM–5:30 PM <span className="text-amber-400/90 font-semibold">• NC Inspections Cut Off 4:30 PM</span></span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] bg-emerald-950/50 border border-emerald-800/60 px-2 py-0.5 rounded-full">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Official NC Station #38192-S</span>
            </div>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>(919) 553-7300</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-obsidian-900/95 backdrop-blur-xl shadow-2xl border-b border-obsidian-800/90 py-3' 
          : 'bg-obsidian-900/85 backdrop-blur-lg border-b border-white/5 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2
                    ${isActive 
                      ? 'text-amber-400 bg-obsidian-800/90 border border-amber-500/30 shadow-inner shadow-amber-500/5' 
                      : 'text-slate-300 hover:text-white hover:bg-obsidian-800/50 border border-transparent'}
                  `}
                >
                  <span>{link.name}</span>
                  {link.isSpecial && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Official NC Certified Station" />
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-obsidian-800 border border-obsidian-700/80 transition-all"
                title="Call Clayton Auto Repair"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>(919) 553-7300</span>
              </a>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-obsidian-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-obsidian-950" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Menu & Quick Phone Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2.5 text-amber-400 bg-obsidian-850 rounded-xl border border-obsidian-700 sm:hidden active:scale-95 transition-transform"
                aria-label="Call Shop"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-obsidian-850 border border-obsidian-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-obsidian-950 border-l border-obsidian-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-obsidian-800">
                <Logo size="small" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Location Badge */}
              <div className="mt-4 p-3.5 bg-obsidian-900 rounded-2xl border border-obsidian-800 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Historic Downtown Clayton
                  </span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    NC Station
                  </span>
                </div>
                <p className="text-xs text-slate-300">420 E Main Street • Drop off & walk to cafes</p>
              </div>

              {/* Navigation Links */}
              <nav className="mt-5 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `
                      flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all
                      ${isActive 
                        ? 'text-amber-400 bg-obsidian-900 border border-amber-500/30 font-bold shadow-md' 
                        : 'text-slate-200 hover:bg-obsidian-900/60 hover:text-white'}
                    `}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.isSpecial && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="mt-8 space-y-3 pt-5 border-t border-obsidian-800">
              <Link
                to="/appointment"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-extrabold text-obsidian-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-xl shadow-amber-500/25 active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4 text-obsidian-950" />
                <span>Book Appointment Online</span>
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-obsidian-850 hover:bg-obsidian-800 border border-obsidian-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call (919) 553-7300</span>
              </a>

              <p className="text-[11px] text-center text-slate-400 pt-2 leading-relaxed">
                Mon–Fri 7:30 AM–5:30 PM • NC Inspections Cut Off 4:30 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
