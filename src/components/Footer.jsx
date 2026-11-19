import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, CORE_SERVICES } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-carbon-950 text-zinc-300 border-t border-carbon-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-racing-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-carbon-800">
          
          {/* Col 1: Brand Info & Small-Town Roots */}
          <div className="space-y-4">
            <Logo size="large" />
            <p className="text-sm text-zinc-400 leading-relaxed pt-2">
              Honest auto repair with small-town roots in Historic Downtown Clayton. ASE-certified technicians keeping your family safe on the road since day one.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-carbon-900 border border-carbon-800 text-xs font-semibold text-amber-400">
                <Award className="w-3.5 h-3.5" /> ASE-Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-carbon-900 border border-carbon-800 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> NC Station #38192-S
              </span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white font-heading tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-racing-500"></span>
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/services#${s.id}`} 
                    className="text-zinc-400 hover:text-racing-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-zinc-600 group-hover:text-racing-400 transition-colors">›</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="text-racing-400 hover:text-racing-300 font-bold inline-flex items-center gap-1 mt-1 text-xs"
                >
                  View All Maintenance Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official NC Inspection Center Policy */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white font-heading tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              NC State Inspections
            </h3>
            <div className="p-4 rounded-2xl bg-carbon-900 border border-racing-500/30 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-amber-400">
                <span>INSPECTION HOURS</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/10 text-[10px]">MON–FRI</span>
              </div>
              <p className="text-zinc-200 font-bold text-sm">8:00 AM – 4:30 PM</p>
              <p className="text-racing-400 text-[11px] leading-snug">
                ⚠️ Strict policy: No inspections started after 4:30 PM to guarantee DMV server compliance.
              </p>
            </div>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              <li>✓ Safety & Emissions OBD-II Certified</li>
              <li>✓ First-come, first-served or reserve online</li>
              <li>✓ Walkable to Main St cafes while you wait</li>
            </ul>
            <Link
              to="/nc-inspections"
              className="inline-block text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              Inspection Checklist & Guidelines →
            </Link>
          </div>

          {/* Col 4: Downtown Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white font-heading tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Visit & Contact
            </h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-racing-500 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">420 E Main Street</p>
                  <p className="text-xs text-zinc-400">Historic Downtown Clayton, NC 27520</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-racing-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-racing-500 shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="font-extrabold text-white hover:text-racing-400 transition-colors"
                >
                  (919) 553-7300
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300 space-y-0.5">
                  <p><span className="font-semibold text-white">Shop:</span> Mon–Fri 7:30 AM – 5:30 PM</p>
                  <p><span className="font-semibold text-white">Weekends:</span> Closed for Family</p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/appointment"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 hover:from-racing-500 hover:to-amber-400 transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve A Bay Online</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Clayton Auto Repair. All rights reserved. 420 E Main Street, Clayton, NC.</p>
          <div className="flex items-center space-x-6">
            <Link to="/nc-inspections" className="hover:text-zinc-300 transition-colors">NC Inspection Policy</Link>
            <Link to="/about" className="hover:text-zinc-300 transition-colors">Downtown Heritage</Link>
            <Link to="/contact" className="hover:text-zinc-300 transition-colors">Directions & Parking</Link>
            <Link to="/appointment" className="hover:text-zinc-300 transition-colors">Online Scheduler</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
