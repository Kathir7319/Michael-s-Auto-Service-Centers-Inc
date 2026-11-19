import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Key,
  Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Question',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-12 bg-carbon-950 text-zinc-100">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-carbon-900 border border-racing-500/30 text-xs font-bold text-racing-400 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            Historic Downtown Clayton Location
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Visit Our Main Street Shop
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Conveniently located at <strong>420 E Main Street</strong> in downtown Clayton. Stop by for an inspection, call us directly, or send an inquiry below.
          </p>
        </div>
      </section>

      {/* Main Grid: Location Cards & Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Directions Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-carbon-900/90 border border-carbon-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Shop Address</h3>
                  <p className="text-xs text-amber-400 font-semibold">Historic Downtown District</p>
                </div>
              </div>

              <div className="text-sm text-zinc-300 space-y-1">
                <p className="font-extrabold text-white text-base">Clayton Auto Repair</p>
                <p>420 E Main Street</p>
                <p>Clayton, NC 27520</p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-racing-600 hover:bg-racing-500 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Turn-by-Turn Directions</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Phone & Direct Contact */}
            <div className="p-6 sm:p-8 rounded-3xl bg-carbon-900/90 border border-carbon-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-racing-500/10 text-racing-400 border border-racing-500/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Call or Text</h3>
                  <p className="text-xs text-racing-400 font-semibold">Direct Service Advisor Desk</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-zinc-400 text-xs font-medium">Direct Phone Line:</p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-2xl font-extrabold text-white hover:text-racing-400 transition-colors block"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-xs text-zinc-400">
                  Email: <span className="text-zinc-200">{COMPANY_INFO.email}</span>
                </p>
              </div>
            </div>

            {/* Operating Hours & Cutoff Notice */}
            <div className="p-6 sm:p-8 rounded-3xl bg-carbon-900/90 border border-carbon-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Service Hours</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Monday through Friday</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex justify-between border-b border-carbon-800 pb-2">
                  <span className="font-semibold text-white">General Shop Hours:</span>
                  <span>7:30 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-carbon-800 pb-2">
                  <span className="font-semibold text-white">Official NC Inspections:</span>
                  <span className="text-amber-400 font-bold">8:00 AM – 4:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Saturday & Sunday:</span>
                  <span className="text-zinc-500">Closed for Family</span>
                </div>

                <div className="p-3 rounded-2xl bg-carbon-950 border border-racing-500/30 text-[11px] text-zinc-300 leading-snug">
                  ⚠️ <strong>State DMV Notice:</strong> No NC vehicle inspections started after 4:30 PM.
                </div>
              </div>
            </div>

            {/* After-Hours Key Drop Box */}
            <div className="p-5 rounded-2xl bg-carbon-950 border border-carbon-800 flex items-start gap-3 text-xs text-zinc-300">
              <Key className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">24/7 Secure Key Drop Box</p>
                <p className="text-zinc-400 text-[11px] mt-0.5">
                  Dropping off early in the morning or after hours? Use our secure lighted drop box located beside bay door #1 on the east wall.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form & Map View */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-carbon-900/90 border border-carbon-800 shadow-2xl space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-racing-400 uppercase tracking-wider">
                  Quick Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Send Our Service Advisor a Note
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Have a question before booking? We reply promptly during shop hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase text-zinc-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-carbon-950 border border-carbon-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-racing-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase text-zinc-300">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(919) 555-0100"
                        className="w-full px-4 py-3 rounded-2xl bg-carbon-950 border border-carbon-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-racing-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase text-zinc-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-carbon-950 border border-carbon-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-racing-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-bold uppercase text-zinc-300">Subject / Category</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-carbon-950 border border-carbon-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-racing-500 font-medium"
                      >
                        <option value="General Question">General Question</option>
                        <option value="NC State Inspection">NC State Inspection</option>
                        <option value="Brake Service Quote">Brake Service Quote</option>
                        <option value="Check Engine Code">Check Engine Code</option>
                        <option value="AC & Climate Repair">AC & Climate Repair</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase text-zinc-300">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need help with, vehicle details, or any questions..."
                      className="w-full px-4 py-3 rounded-2xl bg-carbon-950 border border-carbon-750 text-white text-sm focus:outline-none focus:ring-2 focus:ring-racing-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-racing-600 via-racing-500 to-amber-500 hover:from-racing-500 hover:to-amber-400 transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>

                    <Link
                      to="/appointment"
                      className="text-xs text-amber-400 hover:underline font-bold"
                    >
                      Want to reserve a specific bay time slot instead? →
                    </Link>
                  </div>
                </form>
              ) : (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Thank you {formData.name}. Our service advisor at 420 E Main Street has received your inquiry and will follow up shortly.
                  </p>
                </div>
              )}
            </div>

            {/* Embedded Visual Map Card */}
            <div className="rounded-3xl p-6 bg-carbon-900 border border-carbon-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-white text-sm">Main Street Bay Location</h3>
                  <p className="text-xs text-zinc-400">420 E Main St, Clayton, NC 27520</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-racing-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Mock Map Frame */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-carbon-800 bg-carbon-950 flex items-center justify-center group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Visual Location Pin Center */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-3.5 rounded-full bg-racing-600 text-white shadow-xl shadow-racing-600/50 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2 px-3.5 py-1.5 rounded-xl bg-carbon-900/95 border border-racing-500/30 text-xs font-bold text-white shadow-2xl">
                    420 E Main Street • Clayton Auto Repair
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-carbon-950/70 backdrop-blur-xs"
                >
                  <span className="px-5 py-2.5 rounded-xl bg-racing-600 text-white font-extrabold text-xs shadow-xl">
                    Click to Open Full Interactive Navigation
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
