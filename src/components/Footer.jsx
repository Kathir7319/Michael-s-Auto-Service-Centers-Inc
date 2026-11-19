import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  Heart
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, CORE_SERVICES } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info & Small-Town Roots */}
          <div className="space-y-4">
            <Logo size="large" />
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Honest auto repair with small-town roots in Historic Downtown Clayton. ASE-certified technicians keeping your family safe on the road since day one.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-amber-400">
                <Award className="w-3.5 h-3.5" /> ASE-Certified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-sky-400">
                <ShieldCheck className="w-3.5 h-3.5" /> NC Station #38192-S
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> 24k-Mi Warranty
              </span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-heading tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/services#${s.id}`} 
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-amber-400 transition-colors">›</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 mt-1 text-xs"
                >
                  View All Maintenance Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official NC Inspection Center Policy */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-heading tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              NC Inspections
            </h3>
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-2">
              <div className="flex items-center justify-between font-bold text-amber-400">
                <span>INSPECTION HOURS</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-400/10 text-[10px]">MON–FRI</span>
              </div>
              <p className="text-slate-200 font-medium">8:00 AM – 4:30 PM</p>
              <p className="text-amber-300/90 text-[11px] leading-snug">
                ⚠️ Strict policy: No inspections started after 4:30 PM to ensure DMV server connection.
              </p>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5">
              <li>✓ Safety & Emissions OBD-II Certified</li>
              <li>✓ First-come, first-served or reserve online</li>
              <li>✓ Walkable to Main St cafes while you wait</li>
            </ul>
            <Link
              to="/nc-inspections"
              className="inline-block text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              Inspection Checklist & Guidelines →
            </Link>
          </div>

          {/* Col 4: Downtown Location & Hours */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-heading tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Visit & Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">420 E Main Street</p>
                  <p className="text-xs text-slate-400">Historic Downtown Clayton, NC 27520</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sky-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  (919) 553-7300
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 space-y-0.5">
                  <p><span className="font-semibold text-white">Shop Hours:</span> Mon–Fri 7:30 AM – 5:30 PM</p>
                  <p><span className="font-semibold text-white">Weekends:</span> Closed for Family</p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/appointment"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve A Bay Online</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Clayton Auto Repair. All rights reserved. 420 E Main Street, Clayton, NC.</p>
          <div className="flex items-center space-x-6">
            <Link to="/nc-inspections" className="hover:text-slate-300 transition-colors">NC Inspection Policy</Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">Downtown Heritage</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Directions & Parking</Link>
            <Link to="/appointment" className="hover:text-slate-300 transition-colors">Online Scheduler</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
