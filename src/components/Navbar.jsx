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
  Sparkles
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/servicesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Maintenance Services', path: '/services' },
    { name: 'NC Inspection Info', path: '/nc-inspections', badge: 'Cutoff 4:30 PM' },
    { name: 'Book Appointment', path: '/appointment' },
    { name: 'Downtown Heritage', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Trust Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>420 E Main Street, Historic Downtown Clayton</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Mon–Fri: 7:30 AM – 5:30 PM (NC Inspections cut off at 4:30 PM)</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>ASE-Certified Technicians</span>
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
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3' 
          : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/60 py-4'
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
                    relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5
                    ${isActive 
                      ? 'text-sky-400 bg-sky-950/60 border border-sky-800/60 font-semibold shadow-inner' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}
                  `}
                >
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-colors"
                title="Call Clayton Auto Repair"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">{COMPANY_INFO.phone}</span>
              </a>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Online</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2 text-amber-400 bg-slate-800/80 rounded-lg border border-slate-700 sm:hidden"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] sm:top-[77px] bottom-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 overflow-y-auto p-4 flex flex-col justify-between">
          <div className="space-y-2 pt-2">
            <div className="px-3 py-2 bg-slate-900 rounded-xl border border-slate-800 mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Historic Downtown Clayton</p>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  420 E Main Street
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded">
                  ASE-CERTIFIED
                </span>
              </div>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all
                  ${isActive 
                    ? 'text-sky-400 bg-sky-950/70 border border-sky-800/80 font-bold' 
                    : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'}
                `}
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ChevronRight className="w-5 h-5 text-slate-500" />
              </NavLink>
            ))}
          </div>

          <div className="mt-8 space-y-3 pt-4 border-t border-slate-800 pb-8">
            <Link
              to="/appointment"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call (919) 553-7300</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-xs text-slate-400">
                Official NC Inspection Station • No inspections started after 4:30 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
