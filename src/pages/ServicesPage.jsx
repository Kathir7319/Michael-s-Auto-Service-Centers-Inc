import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Droplets, 
  ThermometerSnowflake, 
  Cpu, 
  Wrench, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Shield, 
  Gauge
} from 'lucide-react';
import { CORE_SERVICES, COMPANY_INFO } from '../data/servicesData';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('brakes');

  const currentService = CORE_SERVICES.find(s => s.id === selectedService) || CORE_SERVICES[0];

  const getServiceIcon = (id) => {
    switch (id) {
      case 'brakes':
        return <ShieldCheck className="w-6 h-6 text-racing-500" />;
      case 'oil-change':
        return <Droplets className="w-6 h-6 text-amber-400" />;
      case 'nc-inspection':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'ac-repair':
        return <ThermometerSnowflake className="w-6 h-6 text-racing-400" />;
      case 'engine-diagnostics':
        return <Cpu className="w-6 h-6 text-amber-500" />;
      default:
        return <Wrench className="w-6 h-6 text-racing-500" />;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-12 bg-carbon-950 text-zinc-100">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-carbon-900 border border-racing-500/30 text-xs font-bold text-racing-400 uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 text-racing-500" />
            ASE-Certified Precision Maintenance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Maintenance Services & Diagnostics
          </h1>
          {/* Introductory Text (Verbatim from Word Document) */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            At Clayton Auto Repair, we believe preventative maintenance is the key to vehicle longevity. Our crew brings decades of combined experience to every bay, ensuring your car, truck, or SUV runs smoothly.
          </p>
        </div>
      </section>

      {/* CORE SERVICE CATEGORY TABLE & SCOPE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-carbon-900/90 rounded-3xl border border-carbon-800 p-6 sm:p-10 shadow-2xl">
          <div className="border-b border-carbon-800 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold font-heading text-white">
                Detailed Website Copy & Scope
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Explore individual service categories, diagnostic scopes, and procedures.
              </p>
            </div>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-racing-600 to-amber-500 hover:from-racing-500 hover:to-amber-400 transition-all shadow-md shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Service Online</span>
            </Link>
          </div>

          {/* Interactive Navigation Tabs for Service Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
            {CORE_SERVICES.map((serv) => (
              <button
                key={serv.id}
                onClick={() => setSelectedService(serv.id)}
                className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  selectedService === serv.id
                    ? 'bg-carbon-800 border-racing-500/60 shadow-lg shadow-racing-600/15 ring-1 ring-racing-500/40'
                    : 'bg-carbon-950/60 border-carbon-800 hover:bg-carbon-850 hover:border-carbon-700'
                }`}
              >
                <div className="mb-2.5">
                  {getServiceIcon(serv.id)}
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    {serv.title}
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 truncate">
                    {serv.category}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Active Service Scope Box */}
          <div id={currentService.id} className="rounded-3xl p-6 sm:p-8 bg-carbon-950/80 border border-carbon-800 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-carbon-800">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-carbon-900 border border-carbon-800">
                  {getServiceIcon(currentService.id)}
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {currentService.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 rounded-xl bg-carbon-900 border border-carbon-800 text-xs font-semibold text-zinc-300">
                  ⏱ {currentService.turnaround}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                  {currentService.priceRange}
                </span>
              </div>
            </div>

            {/* Scope Copy */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Service Scope & Procedure
              </h4>
              <p className="text-base text-zinc-200 leading-relaxed bg-carbon-900/60 p-5 rounded-2xl border border-carbon-800">
                {currentService.detailedCopy}
              </p>
            </div>

            {/* What's Included & Symptoms Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-racing-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  What's Included in This Service
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {currentService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-carbon-900/50 border border-carbon-800/70">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Common Warning Signs & Symptoms
                </h4>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {currentService.symptoms.map((symp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-carbon-900/50 border border-carbon-800/70">
                      <span className="text-amber-400 font-bold">!</span>
                      <span>{symp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book This Specific Service CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-carbon-800">
              <div className="text-xs text-zinc-400">
                <span>Backed by our </span>
                <strong className="text-white">24-Month / 24,000-Mile Warranty</strong>
                <span> on qualified parts & labor.</span>
              </div>
              <Link
                to={`/appointment?service=${currentService.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-racing-600 to-amber-500 hover:from-racing-500 hover:to-amber-400 transition-all shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Bay for {currentService.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL SERVICE TABLE (Word Document Specification) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Full Maintenance Comparison & Scope
          </h2>
          <p className="text-zinc-400 text-sm">
            Quick reference guide for vehicle care categories, diagnostic scopes, and scheduled intervals.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-carbon-800 shadow-2xl bg-carbon-900/80">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-carbon-950 text-xs uppercase tracking-wider text-zinc-400 border-b border-carbon-800">
              <tr>
                <th className="py-4 px-6 font-bold text-white">Service Category</th>
                <th className="py-4 px-6 font-bold text-white">Detailed Website Copy & Scope</th>
                <th className="py-4 px-6 font-bold text-white">Est. Turnaround</th>
                <th className="py-4 px-6 font-bold text-white text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-carbon-800/80">
              {CORE_SERVICES.map((row) => (
                <tr key={row.id} className="hover:bg-carbon-850/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-racing-500" />
                      {row.category}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-zinc-300 max-w-xl">
                    <p className="font-bold text-white text-sm mb-1">{row.title}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{row.detailedCopy}</p>
                  </td>
                  <td className="py-4 px-6 text-xs text-zinc-400 whitespace-nowrap">
                    {row.turnaround}
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <Link
                      to={`/appointment?service=${row.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold text-white bg-racing-600 hover:bg-racing-500 transition-colors"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TRANSPARENT PRICING & WARRANTY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-carbon-900/90 border border-carbon-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-racing-500/10 border border-racing-500/30 flex items-center justify-center text-racing-500">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              24-Month / 24,000-Mile Warranty
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              We stand behind every repair. All qualified parts and labor installed at Clayton Auto Repair are covered for 24 months or 24,000 miles, giving you complete peace of mind on every journey.
            </p>
            <ul className="text-xs text-zinc-400 space-y-1.5 pt-2">
              <li>✓ Nationwide warranty coverage honored at thousands of shops</li>
              <li>✓ Genuine OEM & premium grade replacement parts</li>
              <li>✓ Zero hassle claims process</li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-carbon-900/90 border border-carbon-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Transparent Digital Estimates
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Before a single bolt is turned, you receive a full digital breakdown of parts, labor, and priorities directly on your phone with clear photos and explanations. You approve only what you want done.
            </p>
            <ul className="text-xs text-zinc-400 space-y-1.5 pt-2">
              <li>✓ No surprise fees or unauthorized work</li>
              <li>✓ High-resolution inspection photos sent to SMS</li>
              <li>✓ Plain-language explanations without confusing jargon</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
