import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  CreditCard, 
  UserCheck, 
  HelpCircle, 
  ChevronDown, 
  Calendar, 
  ArrowRight,
  ExternalLink,
  Car,
  Sparkles
} from 'lucide-react';
import { NC_INSPECTION_GUIDELINES, COMPANY_INFO } from '../data/servicesData';

export default function NcInspectionPage() {
  const [checkedItems, setCheckedItems] = useState({});
  const [openFaq, setOpenFaq] = useState(0);

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const allItemsChecked = NC_INSPECTION_GUIDELINES.checklist.every((_, i) => checkedItems[i]);

  return (
    <div className="space-y-16 lg:space-y-24 py-12 bg-obsidian-950 text-slate-100">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            NCDMV Certified Official Station #38192-S
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Official NC Inspection Station Guidelines
          </h1>
          
          {/* Introductory Text (Verbatim from Word Document) */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Clayton Auto Repair is a certified North Carolina Official Inspection Station. Avoid long lines and stay street-legal by understanding requirements ahead of time.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-300">
            <span className="px-3.5 py-1.5 rounded-xl bg-obsidian-900 border border-obsidian-800">
              ⚡ Safety & Emissions OBD-II Certified
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-obsidian-900 border border-obsidian-800">
              📍 420 E Main St, Clayton, NC
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-obsidian-900 border border-obsidian-800">
              ⏱ Express Bay: 15–25 Mins
            </span>
          </div>
        </div>
      </section>

      {/* INSPECTION OPERATING HOURS & STRICT CUTOFF POLICY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <Clock className="w-3.5 h-3.5" />
                State Mandated Operating Hours
              </div>

              {/* Operating Hours & Policy (Verbatim from Word Document) */}
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Inspection Operating Hours & Policy
              </h2>

              <div className="text-slate-200 text-base space-y-2">
                <p className="font-bold text-lg text-amber-400">
                  • Monday – Friday: 8:00 AM – 4:30 PM (No inspections started after 4:30 PM)
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  • First-come, first-served basis for walk-ins, or lock in an express slot by scheduling online below.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-amber-500/30 text-xs text-amber-200/90 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-amber-300">Why the 4:30 PM Cutoff?</strong> The North Carolina State DMV electronic inspection portal process takes 20+ minutes and server connectivity halts right at 5:00 PM. Our 4:30 PM cutoff ensures your vehicle completes certification without system timeouts.
                </span>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-950 border border-obsidian-800 space-y-4 shrink-0 text-center lg:w-80 shadow-2xl">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Skip The Waiting Line
              </p>
              <p className="text-xl font-extrabold text-white">
                Reserve An Express Inspection Slot
              </p>
              <Link
                to="/appointment?service=nc-inspection"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-extrabold text-obsidian-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Express Slot</span>
              </Link>
              <p className="text-[11px] text-slate-400">
                Walk-ins welcomed until 4:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO BRING SECTION (Verbatim from Word Document + Interactive Checklist) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              Pre-Inspection Checklist
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              What to Bring
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To keep your inspection under 20 minutes, make sure you have these three essential documents ready before pulling into our bay.
            </p>

            <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800 text-xs text-slate-400 space-y-2">
              <p className="font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Interactive Check-Off:
              </p>
              <p>Click each document below to verify you have everything in your glovebox or wallet!</p>
            </div>

            {allItemsChecked && (
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>You're 100% prepared! Drop by or reserve your express slot below.</span>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            {NC_INSPECTION_GUIDELINES.checklist.map((item, idx) => {
              const isChecked = !!checkedItems[idx];
              const getDocIcon = (i) => {
                if (i === 0) return <FileText className="w-6 h-6 text-sky-400" />;
                if (i === 1) return <CreditCard className="w-6 h-6 text-amber-400" />;
                return <UserCheck className="w-6 h-6 text-emerald-400" />;
              };

              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all flex items-start gap-4 ${
                    isChecked
                      ? 'bg-obsidian-850 border-emerald-500/60 shadow-lg'
                      : 'bg-obsidian-900/80 border-obsidian-800 hover:border-obsidian-700 hover:bg-obsidian-850'
                  }`}
                >
                  <div className="pt-0.5">
                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${
                      isChecked 
                        ? 'bg-emerald-500 border-emerald-400 text-obsidian-950 font-bold' 
                        : 'border-obsidian-700 bg-obsidian-950'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-obsidian-950 border border-obsidian-800 shrink-0">
                    {getDocIcon(idx)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      {/* Verbatim list items from document */}
                      <h3 className={`text-base font-bold font-heading transition-colors ${
                        isChecked ? 'text-emerald-300 line-through' : 'text-white'
                      }`}>
                        {idx + 1}. {item.item}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Required
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHAT GETS TESTED: SAFETY & EMISSIONS BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian-900/90 rounded-3xl border border-obsidian-800 p-8 sm:p-10 space-y-8 shadow-2xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Official North Carolina Inspection Scope
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Every official inspection covers computerized state diagnostic checks and rigorous safety parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NC_INSPECTION_GUIDELINES.testingComponents.map((comp, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-obsidian-950/70 border border-obsidian-800 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h4 className="text-sm font-bold text-white font-heading">{comp.name}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="pt-4 border-t border-obsidian-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>
              <span className="text-white font-semibold">State Mandated Inspection Fees: </span>
              <span className="text-amber-400 font-bold">$30.00</span> for Safety + Emissions (OBD-II) | <span className="text-amber-400 font-bold">$13.60</span> for Safety-Only (Vehicles 20+ years old)
            </div>
            <Link
              to="/appointment?service=nc-inspection"
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-obsidian-950 font-extrabold transition-colors"
            >
              Lock in Express Slot
            </Link>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            NC State Inspection FAQ
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know to pass your annual inspection without hassle.
          </p>
        </div>

        <div className="space-y-4">
          {NC_INSPECTION_GUIDELINES.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-obsidian-900/80 border border-obsidian-800 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-obsidian-850 transition-colors"
              >
                <span className="font-bold text-white text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-obsidian-800/80 bg-obsidian-950/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="text-center rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-amber-500/30 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            Ready for Your Official NC State Inspection?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Drop by 420 E Main Street Monday through Friday between 8:00 AM and 4:30 PM, or reserve your express slot online now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/appointment?service=nc-inspection"
              className="px-8 py-3.5 rounded-xl text-base font-extrabold text-obsidian-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-colors shadow-xl shadow-amber-500/25"
            >
              Lock in Express Slot Online
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-obsidian-800 hover:bg-obsidian-750 border border-obsidian-700 transition-colors"
            >
              Call (919) 553-7300
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
