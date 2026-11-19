import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Award, 
  ShieldCheck, 
  Heart, 
  Coffee, 
  Wrench, 
  Users, 
  CheckCircle2, 
  Calendar,
  ExternalLink,
  Clock
} from 'lucide-react';
import { COMPANY_INFO, DOWNTOWN_WALKABLE_SPOTS } from '../data/servicesData';

export default function AboutPage() {
  return (
    <div className="space-y-16 lg:space-y-24 py-10">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            Downtown Heritage Since Day One
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Small-Town Roots, Master-Level Craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Conveniently located at <strong>420 E Main Street</strong> in Historic Downtown Clayton. We’re proud to be the trusted neighborhood garage where you’re always greeted by name.
          </p>
        </div>
      </section>

      {/* Heritage Story & Location Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Our Downtown Story
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Built on Trust, Right on Main Street
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                When Clayton Auto Repair opened its bay doors at <strong>420 E Main Street</strong>, our mission was simple: eliminate the high-pressure sales tactics and mystery pricing that plagued the automotive industry, and replace it with honest, small-town neighborliness.
              </p>
              <p>
                Decades later, Clayton has grown, but our founding philosophy hasn't changed. Every technician in our facility is ASE-certified and equipped with dealer-grade diagnostic scanners. We treat every vehicle—from family minivans to work trucks and commuter sedans—like our own kids were riding in the back.
              </p>
              <p>
                Plus, our location in the heart of Downtown Clayton means you don’t have to suffer through fluorescent-lit waiting rooms. Drop your keys off, stroll down Main Street, grab a warm coffee or sandwich, and we'll text you when your vehicle is ready to roll.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-2xl font-extrabold text-amber-400">100%</p>
                <p className="text-xs text-slate-400 mt-0.5">ASE-Certified Crew</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-2xl font-extrabold text-sky-400">24k Mi</p>
                <p className="text-xs text-slate-400 mt-0.5">Nationwide Warranty</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                <p className="text-2xl font-extrabold text-emerald-400">4.9 ★</p>
                <p className="text-xs text-slate-400 mt-0.5">380+ Local Reviews</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Historic Downtown Clayton</h3>
                  <p className="text-xs text-amber-400">420 E Main Street</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Shop Hours: Mon–Fri 7:30 AM – 5:30 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NC Inspections: Mon–Fri 8:00 AM – 4:30 PM Cutoff</span>
                </p>
                <p className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span>Steps away from Boulevard West Coffee & Downtown cafes</span>
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Service at Main Street</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR 4 CORE PROMISES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            The Clayton Auto Repair Code of Ethics
          </h2>
          <p className="text-slate-400 text-sm">
            We operate by principles that put people ahead of profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold">1</div>
            <h3 className="text-base font-bold text-white">Never Confuse with Jargon</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We translate diagnostic trouble codes into plain English so you know exactly why a repair is recommended.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">2</div>
            <h3 className="text-base font-bold text-white">No Phone Tag Policy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book online instantly. We keep you updated via text and digital inspection reports with clear photos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">3</div>
            <h3 className="text-base font-bold text-white">Zero Pressure Up-selling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We prioritize safety items first and clearly distinguish between urgent fixes and future maintenance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">4</div>
            <h3 className="text-base font-bold text-white">24k-Mile Guarantee</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every qualified repair is backed by a 24-month or 24,000-mile nationwide peace of mind warranty.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNTOWN WALKABILITY GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Explore While We Service Your Car
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
              Historic Downtown Clayton Walkable Spots
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              All of these local Clayton treasures are within a 5-minute stroll from our service counter at 420 E Main Street.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DOWNTOWN_WALKABLE_SPOTS.map((spot, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{spot.name}</span>
                  <span className="text-amber-400 font-semibold">{spot.distance}</span>
                </div>
                <p className="text-xs text-sky-400 font-medium">{spot.category}</p>
                <p className="text-xs text-slate-400 leading-snug">{spot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
