import React, { useState } from 'react';
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
  Car,
  Play,
  Gauge,
  Activity
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  CORE_SERVICES, 
  WHY_CHOOSE_US, 
  TESTIMONIALS, 
  DOWNTOWN_WALKABLE_SPOTS 
} from '../data/servicesData';

export default function HomePage() {
  const [activeBayIndex, setActiveBayIndex] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldCheck className="w-6 h-6 text-racing-500" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-amber-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="w-6 h-6 text-racing-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-500" />;
      default:
        return <Wrench className="w-6 h-6 text-racing-500" />;
    }
  };

  const bayShowcase = [
    {
      title: "Underhood Engine Diagnostics & Repair",
      subtitle: "Bay 01 • Master Technician Diagnostics",
      gif: "/mechanic-working-1.gif",
      desc: "Our ASE-certified mechanics working directly under the hood with Snap-on OEM diagnostic scanners, tracing code faults and tuning ignition timing.",
      badge: "LIVE BAY 01",
      stats: ["OBD-II Code Analysis", "Sensor Stream Validated", "OEM Spec Precision"]
    },
    {
      title: "Chassis, Lift & Brake System Overhaul",
      subtitle: "Bay 02 • High-Capacity Rotary Lift",
      gif: "/garage-mechanic.gif",
      desc: "Vehicle hoisted on our high-clearance garage lift for ceramic pad replacement, precision rotor runout calibration, and suspension inspection.",
      badge: "LIVE BAY 02",
      stats: ["Hydraulic Fluid Flushed", "Caliper Piston Checked", "Rotors Resurfaced"]
    },
    {
      title: "Precision Mechanical & Powerplant Service",
      subtitle: "Bay 03 • Mechanical Bay",
      gif: "/mechanic-engine.gif",
      desc: "Detailed engine assembly and timing belt service performed with micro-torque wrenches to manufacturer tolerance standards.",
      badge: "LIVE BAY 03",
      stats: ["Torque Angle Gauged", "Gasket Sealed", "Oil Pressure Verified"]
    },
    {
      title: "State Inspection & Express Bay",
      subtitle: "Bay 04 • Official NC Inspection Station",
      gif: "/garage-bay.gif",
      desc: "Fast computerized emissions & safety testing connected directly to NCDMV state servers. In and out in 15–25 minutes.",
      badge: "LIVE BAY 04",
      stats: ["Computerized DMV Uplink", "Safety Lights Verified", "Emissions Passed"]
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-32 overflow-hidden bg-carbon-950 text-zinc-100">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-36 bg-mesh-dark border-b border-carbon-800/80">
        {/* Ambient lighting - Red & Warm Gold */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-racing-600/15 via-amber-500/10 to-racing-700/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-racing-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              {/* Location Tag Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-carbon-900/90 border border-racing-500/30 text-xs sm:text-sm text-zinc-200 shadow-glass">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-amber-400 tracking-wide">Historic Downtown Clayton</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-300 font-medium">420 E Main Street</span>
              </div>

              {/* Main Headline (Word Document verbatim) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
                Honest Auto Repair with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-500 via-amber-400 to-amber-200">
                  Small-Town Roots
                </span>{' '}
                in Historic Downtown Clayton
              </h1>

              {/* Subheadline (Word Document verbatim) */}
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                ASE-certified technicians keeping your family safe on the road since day one. Quality you can trust, convenience you deserve.
              </p>

              {/* Primary & Secondary CTAs (Word Document verbatim) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 hover:from-racing-500 hover:to-amber-400 shadow-xl shadow-racing-600/30 hover:shadow-racing-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book an Appointment Online</span>
                </Link>

                <Link
                  to="/nc-inspections"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-zinc-200 bg-carbon-900/90 hover:bg-carbon-850 border border-carbon-700/80 hover:border-racing-500/40 shadow-lg hover:shadow-racing-500/10 transition-all"
                >
                  <Clock className="w-5 h-5 text-racing-400" />
                  <span>View Inspection Hours</span>
                </Link>
              </div>

              {/* Key Highlights Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-carbon-800/80 max-w-xl mx-auto lg:mx-0">
                <div className="p-3.5 rounded-2xl bg-carbon-900/80 border border-carbon-800 text-left shadow-sm">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white mt-1.5">4.9 / 5.0 Rating</p>
                  <p className="text-[11px] text-zinc-400">380+ Verified Reviews</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-carbon-900/80 border border-carbon-800 text-left shadow-sm">
                  <div className="flex items-center gap-1 text-racing-400 font-bold text-xs">
                    <Award className="w-4 h-4" /> ASE-Certified
                  </div>
                  <p className="text-xs font-bold text-white mt-1.5">Master Technicians</p>
                  <p className="text-[11px] text-zinc-400">Zero Guesswork Repairs</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-carbon-900/80 border border-carbon-800 text-left shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" /> NC Station
                  </div>
                  <p className="text-xs font-bold text-white mt-1.5">Safety & Emissions</p>
                  <p className="text-[11px] text-zinc-400">Cut Off 4:30 PM Sharp</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card with Animated Mechanic GIF */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glassmorphic Card */}
                <div className="relative rounded-3xl p-5 sm:p-7 bg-carbon-900/95 backdrop-blur-2xl border border-carbon-750 shadow-2xl space-y-4">
                  {/* Card Header with Live Bay Indicator */}
                  <div className="flex items-center justify-between pb-3 border-b border-carbon-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-racing-500 animate-ping" />
                      <div>
                        <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                          Live From Bay 02 • Clayton Auto Repair
                        </h2>
                        <p className="text-[10px] text-amber-400 font-semibold">420 E Main Street • ASE Master Tech at Work</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Bay Active
                    </span>
                  </div>

                  {/* MECHANIC WORKING IN CAR GIF DISPLAY */}
                  <div className="relative rounded-2xl overflow-hidden border border-carbon-750 shadow-2xl group bg-carbon-950">
                    <img 
                      src="/mechanic-working-1.gif" 
                      alt="Mechanic working on car engine at Clayton Auto Repair garage"
                      className="w-full h-52 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    
                    {/* Dark gradient overlay for HUD telemetry */}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/20 to-transparent pointer-events-none" />

                    {/* Live Telemetry Overlay on GIF */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white">
                      <Activity className="w-3 h-3 text-racing-500 animate-pulse" />
                      <span>Diagnostics In Progress</span>
                    </div>

                    <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-[10px] text-zinc-300 font-medium px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                      <span className="text-amber-400 font-bold">Snap-on Scanner Linked</span>
                      <span className="text-emerald-400 font-bold">Live Sensor Data OK</span>
                    </div>
                  </div>

                  {/* Highlights Mini List */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-carbon-950/80 border border-carbon-800">
                      <span className="text-zinc-300 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Walk to Downtown while we work</span>
                      </span>
                      <span className="text-amber-400 font-bold text-[11px]">2 min walk</span>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-carbon-950/80 border border-carbon-800">
                      <span className="text-zinc-300 font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-racing-400 shrink-0" />
                        <span>Instant SMS Inspection Report</span>
                      </span>
                      <span className="text-zinc-400 text-[11px]">Direct to Phone</span>
                    </div>
                  </div>

                  {/* Quick Action in Card */}
                  <div className="pt-1">
                    <Link
                      to="/appointment"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 hover:from-racing-500 hover:to-amber-400 transition-all shadow-md"
                    >
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Reserve Your Bay Slot</span>
                    </Link>
                  </div>
                </div>

                {/* Floating badge for Downtown charm */}
                <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 p-3.5 rounded-2xl bg-carbon-950/95 border border-amber-500/40 shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <p className="font-extrabold text-white">Historic Clayton District</p>
                    <p className="text-zinc-400">Coffee & shops 2 mins away</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW FEATURED SECTION: LIVE GARAGE & MECHANICS AT WORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-carbon-900 border border-carbon-800 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-carbon-800 pb-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-racing-500/10 border border-racing-500/30 text-xs font-bold text-racing-400 uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                Live From Our Bays
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                Inside Our Historic Clayton Garage
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base">
                Watch our ASE-certified technicians wrenching, diagnosing, and inspecting vehicles inside our 420 E Main Street bays.
              </p>
            </div>

            {/* Bay selector tabs */}
            <div className="flex flex-wrap gap-2">
              {bayShowcase.map((bay, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBayIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeBayIndex === idx
                      ? 'bg-racing-600 text-white shadow-lg shadow-racing-600/30 ring-1 ring-racing-500'
                      : 'bg-carbon-850 text-zinc-400 hover:text-white hover:bg-carbon-800'
                  }`}
                >
                  Bay {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Bay Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Animated GIF Display */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden border border-carbon-750 shadow-2xl bg-carbon-950">
                <img 
                  src={bayShowcase[activeBayIndex].gif} 
                  alt={bayShowcase[activeBayIndex].title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-racing-500 animate-ping" />
                  <span>{bayShowcase[activeBayIndex].badge}</span>
                </div>

                <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-carbon-950/85 backdrop-blur-md border border-carbon-800 text-xs">
                  <span className="font-bold text-white">{bayShowcase[activeBayIndex].subtitle}</span>
                  <span className="text-amber-400 font-semibold">Active Service Window</span>
                </div>
              </div>
            </div>

            {/* Right: Bay Details & Action */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Real Equipment • Certified Master Mechanics
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {bayShowcase[activeBayIndex].title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {bayShowcase[activeBayIndex].desc}
                </p>
              </div>

              {/* Quality Checklist */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Quality Checkpoints:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {bayShowcase[activeBayIndex].stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-carbon-950 border border-carbon-800 text-xs font-medium text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-racing-600 to-amber-500 hover:from-racing-500 hover:to-amber-400 transition-all shadow-lg shadow-racing-600/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Bay Slot</span>
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-carbon-800 hover:bg-carbon-750 transition-colors"
                >
                  <span>All Bay Procedures</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (Word Document verbatim) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-carbon-900 border border-carbon-800 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            The Clayton Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Why Choose Clayton Auto Repair?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Old-school small-town integrity backed by advanced digital diagnostic technology.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Downtown Heritage */}
          <div className="rounded-3xl p-8 bg-carbon-900/80 border border-carbon-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {WHY_CHOOSE_US[0].highlight}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
              {WHY_CHOOSE_US[0].title}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              {WHY_CHOOSE_US[0].desc}
            </p>
            <div className="pt-3 border-t border-carbon-800 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <Coffee className="w-3.5 h-3.5" />
              <span>Boulevard West Coffee just 200 yards away</span>
            </div>
          </div>

          {/* Card 2: No Phone Tag */}
          <div className="rounded-3xl p-8 bg-carbon-900/80 border border-carbon-800 hover:border-racing-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-racing-500/10 border border-racing-500/30 flex items-center justify-center text-racing-400 mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-racing-400 uppercase tracking-wider">
              {WHY_CHOOSE_US[1].highlight}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
              {WHY_CHOOSE_US[1].title}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              {WHY_CHOOSE_US[1].desc}
            </p>
            <div className="pt-3 border-t border-carbon-800 flex items-center gap-2 text-xs text-racing-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Direct online scheduling with SMS confirmation</span>
            </div>
          </div>

          {/* Card 3: Certified Experts */}
          <div className="rounded-3xl p-8 bg-carbon-900/80 border border-carbon-800 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              {WHY_CHOOSE_US[2].highlight}
            </span>
            <h3 className="text-xl font-bold font-heading text-white mt-2 mb-3">
              {WHY_CHOOSE_US[2].title}
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              {WHY_CHOOSE_US[2].desc}
            </p>
            <div className="pt-3 border-t border-carbon-800 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dealer-level diagnostic scanners & tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW GRID (Word Document verbatim) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-carbon-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-racing-500 uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" />
              Precision Service Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Core Services Overview Grid
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mt-2">
              From everyday preventative care to complex diagnostic troubleshooting on all domestic and import vehicles.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-racing-400 hover:text-racing-300 group"
          >
            <span>Explore All Maintenance Services</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* The 4 Core Services requested from document */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="rounded-3xl p-6 sm:p-7 bg-carbon-900/90 border border-carbon-800 hover:border-racing-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-carbon-850 border border-carbon-750 group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-carbon-800 px-2.5 py-0.5 rounded-full border border-carbon-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-racing-400 transition-colors">
                  {service.title}
                </h3>

                {/* Core short description from document */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features bullets */}
                <ul className="space-y-2 pt-3 border-t border-carbon-800 text-xs text-zinc-400">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-carbon-800 flex items-center justify-between">
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Scope & Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-racing-400" />
                </Link>

                <Link
                  to={`/appointment?service=${service.id}`}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-racing-500/15 text-racing-400 hover:bg-racing-600 hover:text-white transition-colors"
                >
                  Book Slot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNTOWN CLAYTON SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-carbon-900 via-carbon-900 to-carbon-950 border border-carbon-800 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Coffee className="w-3.5 h-3.5" />
                Drop Off & Enjoy Main Street
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                No Waiting Room Traps. <br />
                <span className="text-racing-500">Historic Clayton</span> Is At Your Doorstep.
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Located at <strong>420 E Main Street</strong>, drop off your vehicle for routine maintenance or an NC inspection, and stroll to Clayton's finest cafes, bakeries, and boutiques. We will send an SMS update when your car is ready!
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Wi-Fi Customer Lounge
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 200 Yards to Coffee & Cafes
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DOWNTOWN_WALKABLE_SPOTS.map((spot, i) => (
                <div key={i} className="p-4 rounded-2xl bg-carbon-950/80 border border-carbon-800 space-y-1.5 hover:border-racing-500/30 transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{spot.name}</span>
                    <span className="text-amber-400 font-bold text-[11px]">{spot.distance}</span>
                  </div>
                  <p className="text-[11px] text-racing-400 font-semibold">{spot.category}</p>
                  <p className="text-xs text-zinc-400 leading-snug">{spot.desc}</p>
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
            Trusted by Clayton Drivers
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Honest service and clear quotes keep our neighbors coming back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="rounded-3xl p-7 bg-carbon-900/80 border border-carbon-800 flex flex-col justify-between shadow-xl hover:border-carbon-700 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-carbon-800">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.location}</p>
                <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-carbon-950 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL APPOINTMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-carbon-900 via-carbon-850 to-carbon-900 border border-racing-500/30 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-carbon-950 border border-racing-500/40 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-amber-400" />
            No Phone Tag • Direct Online Booking
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl mx-auto">
            Ready to Experience Honest, Friendly Auto Care in Clayton?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto">
            Skip the hold music. Pick your exact date, time, and service window online in under 90 seconds. Our service advisor will text your confirmation right away.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 hover:from-racing-500 hover:to-amber-400 shadow-xl shadow-racing-600/30 transition-all"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book an Appointment Online</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-carbon-800 hover:bg-carbon-750 border border-carbon-700 transition-colors"
            >
              <Phone className="w-5 h-5 text-racing-400" />
              <span>Call (919) 553-7300</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
