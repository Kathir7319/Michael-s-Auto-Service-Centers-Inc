import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ChevronRight, 
  Star, 
  Wrench, 
  Droplets, 
  ThermometerSnowflake, 
  Cpu, 
  ArrowRight,
  Coffee,
  Sparkles,
  Car
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  CORE_SERVICES, 
  WHY_CHOOSE_US, 
  TESTIMONIALS, 
  DOWNTOWN_WALKABLE_SPOTS 
} from '../data/servicesData';

export default function HomePage() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldCheck className="w-7 h-7 text-sky-400" />;
      case 'Droplets':
        return <Droplets className="w-7 h-7 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-emerald-400" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="w-7 h-7 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-indigo-400" />;
      default:
        return <Wrench className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-20 lg:space-y-28 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-mesh">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 left-5 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Location Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-amber-400">Historic Downtown Clayton</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">420 E Main Street</span>
              </div>

              {/* Main Headline (Word Document verbatim) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                Honest Auto Repair with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-sky-400">
                  Small-Town Roots
                </span>{' '}
                in Historic Downtown Clayton
              </h1>

              {/* Subheadline (Word Document verbatim) */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ASE-certified technicians keeping your family safe on the road since day one. Quality you can trust, convenience you deserve.
              </p>

              {/* Primary & Secondary CTAs (Word Document verbatim) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Book an Appointment Online</span>
                </Link>

                <Link
                  to="/nc-inspections"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-sky-500/50 shadow-md transition-all"
                >
                  <Clock className="w-5 h-5 text-sky-400" />
                  <span>View Inspection Hours</span>
                </Link>
              </div>

              {/* Key Highlights Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white mt-1">4.9 / 5.0 Rating</p>
                  <p className="text-[11px] text-slate-400">Over 380+ Local Reviews</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-left">
                  <div className="flex items-center gap-1 text-sky-400 font-bold text-xs">
                    <Award className="w-4 h-4" /> ASE-Certified
                  </div>
                  <p className="text-xs font-bold text-white mt-1">Master Techs</p>
                  <p className="text-[11px] text-slate-400">No Guesswork Repairs</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-left col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" /> NC Station
                  </div>
                  <p className="text-xs font-bold text-white mt-1">Safety & Emissions</p>
                  <p className="text-[11px] text-slate-400">State Certified Bay</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card / Interactive Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glassmorphic Card */}
                <div className="relative rounded-2xl p-6 sm:p-8 bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 shadow-2xl space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 p-0.5 flex items-center justify-center shadow-lg">
                        <Wrench className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white font-heading">Clayton Auto Repair</h2>
                        <p className="text-xs text-amber-400 font-medium">420 E Main Street • Downtown</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Bays Open
                    </span>
                  </div>

                  {/* Express Features List */}
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">Walkable While You Wait</p>
                        <p className="text-xs text-slate-400">Drop off your car and enjoy Downtown Clayton’s coffee shops & dining.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">Instant SMS Repair Progress</p>
                        <p className="text-xs text-slate-400">Receive live technician updates and digital photos directly on your phone.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">Official NC State Inspection</p>
                        <p className="text-xs text-slate-400">Computerized safety & emissions lane open Mon–Fri 8:00 AM – 4:30 PM.</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action in Card */}
                  <div className="pt-2">
                    <Link
                      to="/appointment"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Reserve Your Service Slot</span>
                    </Link>
                  </div>
                </div>

                {/* Floating badge for Downtown charm */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 p-3.5 rounded-xl bg-slate-950/95 border border-amber-500/40 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-white">Historic Clayton District</p>
                    <p className="text-slate-400">Walk to cafes in 2 mins</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (Word Document verbatim) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/80 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            The Clayton Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Why Choose Clayton Auto Repair?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We combined old-school neighborhood accountability with modern digital convenience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Downtown Heritage */}
          <div className="rounded-2xl p-8 bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {WHY_CHOOSE_US[0].highlight}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
              {WHY_CHOOSE_US[0].title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {WHY_CHOOSE_US[0].desc}
            </p>
            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
              <Coffee className="w-3.5 h-3.5" />
              <span>Boulevard West Coffee just 200 yards away</span>
            </div>
          </div>

          {/* Card 2: No Phone Tag */}
          <div className="rounded-2xl p-8 bg-slate-900/70 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              {WHY_CHOOSE_US[1].highlight}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
              {WHY_CHOOSE_US[1].title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {WHY_CHOOSE_US[1].desc}
            </p>
            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-sky-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Instant SMS confirmation within minutes</span>
            </div>
          </div>

          {/* Card 3: Certified Experts */}
          <div className="rounded-2xl p-8 bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              {WHY_CHOOSE_US[2].highlight}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
              {WHY_CHOOSE_US[2].title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {WHY_CHOOSE_US[2].desc}
            </p>
            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Snap-on & OEM dealer diagnostic equipment</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW GRID (Word Document verbatim) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" />
              Precision Automotive Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Core Services Overview
            </h2>
            <p className="text-slate-400 text-base max-w-xl mt-2">
              From routine maintenance to complex diagnostics, our ASE-certified bays handle all domestic and import vehicles.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 group"
          >
            <span>Explore Full Maintenance Catalog</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* The 4 Core Services requested + Diagnostic and Suspension additions */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Core short description from document */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features bullets */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-800/60 text-xs text-slate-400">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="text-emerald-400">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Scope & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/appointment"
                  className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400/10 text-amber-400 hover:bg-amber-400 hover:text-slate-950 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNTOWN CLAYTON SPOTLIGHT (Drop off & walk) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Coffee className="w-3.5 h-3.5" />
                Drop Off & Enjoy Main Street
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                No Waiting Room Traps. <br />
                <span className="text-amber-400">Historic Clayton</span> Is At Your Doorstep.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Located at <strong>420 E Main Street</strong>, you don't have to sit on stale waiting room chairs. Drop off your vehicle for routine maintenance or an NC inspection, and stroll to Clayton's finest cafes, bakeries, and boutiques.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Customer Wi-Fi & Lounge
                </span>
                <span className="flex items-center gap-1 text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Walkable to Coffee Shops
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DOWNTOWN_WALKABLE_SPOTS.map((spot, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{spot.name}</span>
                    <span className="text-amber-400 font-semibold text-[11px]">{spot.distance}</span>
                  </div>
                  <p className="text-[11px] text-sky-400 font-medium">{spot.category}</p>
                  <p className="text-xs text-slate-400 leading-snug">{spot.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold uppercase tracking-wider">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
            <span className="ml-1 text-white">4.9 Star Verified Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Trusted by Clayton Families & Commuters
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See what our neighbors have to say about our transparent estimates and friendly service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="rounded-2xl p-7 bg-slate-900/80 border border-slate-800 flex flex-col justify-between shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-400">{t.location}</p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-sky-400 bg-sky-950/80 border border-sky-800/60 px-2 py-0.5 rounded">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL APPOINTMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-sky-950 via-slate-900 to-amber-950/70 border border-slate-700/80 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            No Phone Tag • Direct Online Booking
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl mx-auto">
            Ready to Experience Honest, Friendly Auto Care in Clayton?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Skip the hold music. Pick your exact date, time, and service window online in under 90 seconds. Our service advisor will text your confirmation right away.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl transition-all"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Book an Appointment Online</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call (919) 553-7300</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
