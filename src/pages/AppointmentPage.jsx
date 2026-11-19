import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Car, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  MapPin, 
  AlertCircle,
  Download,
  Check,
  Wrench,
  Droplets,
  ThermometerSnowflake,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/servicesData';

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'nc-inspection';

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Form State matching Step 1 to Step 5 wireframe
  const [formData, setFormData] = useState({
    // Step 1: Select Service Type (Dropdown: Brakes, Oil Change, NC Inspection, AC Repair, Diagnostics)
    serviceType: initialService,
    serviceNotes: '',
    
    // Step 2: Vehicle Information (Fields: Year, Make, Model, Approximate Mileage)
    year: '2021',
    make: '',
    model: '',
    mileage: '',
    transmission: 'Automatic',
    
    // Step 3: Choose Date & Time (Interactive Calendar Matrix with real-time slot selection)
    selectedDate: '',
    selectedTimeSlot: '09:00 AM',
    dropOffPreference: 'Drop off & walk downtown',

    // Step 4: Contact Details (Fields: Full Name, Phone Number [SMS updates opt-in check], Email Address)
    fullName: '',
    phoneNumber: '',
    smsOptIn: true,
    emailAddress: '',
    preferredContact: 'Text / SMS'
  });

  const [errors, setErrors] = useState({});

  // Populate smart dates (next 7 weekdays)
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let dayOffset = 1;

    while (count < 7) {
      const d = new Date(today);
      d.setDate(today.getDate() + dayOffset);
      const dayOfWeek = d.getDay();
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          dateStr: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          monthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          raw: d
        });
        count++;
      }
      dayOffset++;
    }

    setAvailableDates(dates);
    if (dates.length > 0) {
      setFormData(prev => ({
        ...prev,
        selectedDate: dates[0].dateStr
      }));
    }
  }, []);

  const serviceOptions = [
    { id: 'nc-inspection', label: 'NC Inspection', desc: 'Safety & Emissions OBD-II Express Lane', icon: CheckCircle2, badge: 'Cutoff 4:30 PM' },
    { id: 'brakes', label: 'Brakes', desc: 'Pads, Rotors, Calipers & Fluid Flushes', icon: ShieldCheck, badge: 'Same Day' },
    { id: 'oil-change', label: 'Oil Change', desc: 'Full Synthetic & Filter Service', icon: Droplets, badge: 'Express 30m' },
    { id: 'ac-repair', label: 'AC Repair', desc: 'Climate Control, Leak Check & Recharge', icon: ThermometerSnowflake, badge: 'A/C Special' },
    { id: 'engine-diagnostics', label: 'Diagnostics', desc: 'Check Engine Code Scanning & Testing', icon: Cpu, badge: 'Dealer Level' },
  ];

  const timeSlots = [
    { time: '08:00 AM', tag: 'Early Bird Drop' },
    { time: '09:00 AM', tag: 'Popular Slot' },
    { time: '10:30 AM', tag: 'Mid-Morning' },
    { time: '01:00 PM', tag: 'Afternoon' },
    { time: '02:30 PM', tag: 'Afternoon' },
    { time: '03:45 PM', tag: 'Express Slot (Before 4:30 PM Cutoff)' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service type.';
    } else if (step === 2) {
      if (!formData.year) newErrors.year = 'Vehicle year is required.';
      if (!formData.make.trim()) newErrors.make = 'Vehicle make is required (e.g. Ford, Toyota).';
      if (!formData.model.trim()) newErrors.model = 'Vehicle model is required (e.g. F-150, Camry).';
      if (!formData.mileage.trim()) newErrors.mileage = 'Approximate mileage is required.';
    } else if (step === 3) {
      if (!formData.selectedDate) newErrors.selectedDate = 'Please pick a service date.';
      if (!formData.selectedTimeSlot) newErrors.selectedTimeSlot = 'Please pick a time slot.';
    } else if (step === 4) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
      if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 7) {
        newErrors.phoneNumber = 'Valid phone number is required.';
      }
      if (!formData.emailAddress.trim() || !formData.emailAddress.includes('@')) {
        newErrors.emailAddress = 'Valid email address is required.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 250, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  // Step 5: Final Submission [Secure Confirmation & Book Now]
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setCurrentStep(4);
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `CAR-${randomNum}`;
    setConfirmationCode(code);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const selectedServiceObj = serviceOptions.find(s => s.id === formData.serviceType) || serviceOptions[0];

  return (
    <div className="space-y-12 py-12 bg-obsidian-950 text-slate-100">
      
      {/* Intro Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian-900 border border-amber-500/30 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
          Frictionless Online Scheduler
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
          Schedule Your Service Window
        </h1>
        {/* Verbatim copy from Word Document */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          Skip the phone tag. Fill out our multi-step secure form below to reserve an explicit service window at our Main Street location. Our service advisor will text or email confirmation within minutes.
        </p>
      </section>

      {/* Main Booking Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isSubmitted ? (
          <div className="bg-obsidian-900/90 rounded-3xl border border-obsidian-800 p-6 sm:p-10 shadow-2xl space-y-8">
            
            {/* Step Progress Indicator (Steps 1 to 5) */}
            <div className="border-b border-obsidian-800 pb-6">
              <div className="flex items-center justify-between max-w-2xl mx-auto">
                {[
                  { num: 1, label: 'Service' },
                  { num: 2, label: 'Vehicle' },
                  { num: 3, label: 'Date & Time' },
                  { num: 4, label: 'Contact' },
                  { num: 5, label: 'Confirm' }
                ].map((s) => (
                  <div key={s.num} className="flex flex-col items-center">
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                      currentStep === s.num
                        ? 'bg-amber-400 text-obsidian-950 ring-4 ring-amber-400/20 shadow-lg shadow-amber-500/20'
                        : currentStep > s.num
                        ? 'bg-emerald-500 text-obsidian-950 font-extrabold'
                        : 'bg-obsidian-950 text-slate-500 border border-obsidian-800'
                    }`}>
                      {currentStep > s.num ? <Check className="w-5 h-5" /> : s.num}
                    </div>
                    <span className={`text-[10px] sm:text-xs font-semibold mt-2 hidden sm:block ${
                      currentStep === s.num ? 'text-amber-400 font-bold' : 'text-slate-400'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM BODY */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* STEP 1: Select Service Type */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 1 of 5</span>
                    <h2 className="text-2xl font-bold font-heading text-white">Select Service Type</h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Choose your primary service requirement or pick multiple notes below.
                    </p>
                  </div>

                  {/* Dropdown Requirement from Word doc */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Service Category Dropdown:
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-750 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-semibold"
                    >
                      <option value="nc-inspection">NC Inspection (Safety & Emissions Official)</option>
                      <option value="brakes">Brakes (Inspection, Pads & Rotors)</option>
                      <option value="oil-change">Oil Change (Synthetic & Filter Care)</option>
                      <option value="ac-repair">AC Repair (Climate Diagnostics & Recharge)</option>
                      <option value="engine-diagnostics">Diagnostics (Check Engine Light Scanning)</option>
                    </select>
                  </div>

                  {/* Visual Service Selection Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {serviceOptions.map((serv) => {
                      const IconComp = serv.icon;
                      const isSelected = formData.serviceType === serv.id;
                      return (
                        <div
                          key={serv.id}
                          onClick={() => setFormData(p => ({ ...p, serviceType: serv.id }))}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                            isSelected
                              ? 'bg-obsidian-850 border-amber-400/80 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/30'
                              : 'bg-obsidian-950/70 border-obsidian-800 hover:border-obsidian-700 hover:bg-obsidian-850/60'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl shrink-0 ${
                            isSelected ? 'bg-amber-400 text-obsidian-950' : 'bg-obsidian-900 text-slate-300 border border-obsidian-800'
                          }`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-bold text-white">{serv.label}</p>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-obsidian-900 text-amber-400 border border-obsidian-700">
                                {serv.badge}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{serv.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Optional Service Notes */}
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Additional Symptoms or Specific Notes (Optional):
                    </label>
                    <textarea
                      name="serviceNotes"
                      value={formData.serviceNotes}
                      onChange={handleChange}
                      rows={2}
                      placeholder="e.g. Squeaking noise when braking, or AC blowing ambient air at stoplights..."
                      className="w-full px-4 py-3 rounded-2xl bg-obsidian-950 border border-obsidian-750 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Vehicle Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 2 of 5</span>
                    <h2 className="text-2xl font-bold font-heading text-white">Vehicle Information</h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Tell our ASE-certified technicians about your car, truck, or SUV.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Year */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Year *
                      </label>
                      <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        min="1980"
                        max="2026"
                        placeholder="e.g. 2021"
                        className={`w-full px-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          errors.year ? 'border-racing-500' : 'border-obsidian-750'
                        }`}
                      />
                      {errors.year && <p className="text-xs text-racing-400">{errors.year}</p>}
                    </div>

                    {/* Make */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Make *
                      </label>
                      <input
                        type="text"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        placeholder="e.g. Ford, Toyota, Chevrolet, Honda"
                        className={`w-full px-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          errors.make ? 'border-racing-500' : 'border-obsidian-750'
                        }`}
                      />
                      {errors.make && <p className="text-xs text-racing-400">{errors.make}</p>}
                    </div>

                    {/* Model */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Model *
                      </label>
                      <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="e.g. F-150, Camry, Silverado, Civic"
                        className={`w-full px-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          errors.model ? 'border-racing-500' : 'border-obsidian-750'
                        }`}
                      />
                      {errors.model && <p className="text-xs text-racing-400">{errors.model}</p>}
                    </div>

                    {/* Approximate Mileage */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Approximate Mileage *
                      </label>
                      <input
                        type="text"
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleChange}
                        placeholder="e.g. 64,500"
                        className={`w-full px-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          errors.mileage ? 'border-racing-500' : 'border-obsidian-750'
                        }`}
                      />
                      {errors.mileage && <p className="text-xs text-racing-400">{errors.mileage}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Choose Date & Time */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 3 of 5</span>
                    <h2 className="text-2xl font-bold font-heading text-white">Choose Date & Time</h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Interactive Calendar Matrix with real-time slot selection.
                    </p>
                  </div>

                  {/* Date Matrix */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Select Service Day (Mon–Fri):
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                      {availableDates.map((item) => {
                        const isDateSelected = formData.selectedDate === item.dateStr;
                        return (
                          <button
                            type="button"
                            key={item.dateStr}
                            onClick={() => setFormData(p => ({ ...p, selectedDate: item.dateStr }))}
                            className={`p-3.5 rounded-2xl border text-center transition-all ${
                              isDateSelected
                                ? 'bg-amber-400 text-obsidian-950 font-bold border-amber-400 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/30'
                                : 'bg-obsidian-950 border-obsidian-800 text-slate-300 hover:border-obsidian-700'
                            }`}
                          >
                            <p className="text-[11px] uppercase tracking-wider">{item.dayName}</p>
                            <p className="text-sm font-extrabold mt-1">{item.monthDay}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Matrix */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      Select Explicit Service Window:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => {
                        const isSlotSelected = formData.selectedTimeSlot === slot.time;
                        return (
                          <button
                            type="button"
                            key={slot.time}
                            onClick={() => setFormData(p => ({ ...p, selectedTimeSlot: slot.time }))}
                            className={`p-3.5 rounded-2xl border text-left transition-all ${
                              isSlotSelected
                                ? 'bg-amber-400 text-obsidian-950 font-extrabold border-amber-400 shadow-lg shadow-amber-500/25'
                                : 'bg-obsidian-950 border-obsidian-800 text-slate-300 hover:border-obsidian-700'
                            }`}
                          >
                            <p className="text-sm font-bold flex items-center justify-between">
                              <span>{slot.time}</span>
                              <Clock className="w-3.5 h-3.5" />
                            </p>
                            <p className={`text-[10px] mt-0.5 ${isSlotSelected ? 'text-obsidian-900 font-semibold' : 'text-slate-400'}`}>
                              {slot.tag}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Drop-off preference */}
                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-obsidian-800 space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      While Your Vehicle Is Serviced:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <label className="flex items-center gap-2 p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-800 cursor-pointer">
                        <input
                          type="radio"
                          name="dropOffPreference"
                          value="Drop off & walk downtown"
                          checked={formData.dropOffPreference === 'Drop off & walk downtown'}
                          onChange={handleChange}
                          className="text-amber-400 focus:ring-amber-400"
                        />
                        <span className="text-white font-medium">I'll drop off & walk to Downtown cafes</span>
                      </label>
                      <label className="flex items-center gap-2 p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-800 cursor-pointer">
                        <input
                          type="radio"
                          name="dropOffPreference"
                          value="Wait in Customer Lounge"
                          checked={formData.dropOffPreference === 'Wait in Customer Lounge'}
                          onChange={handleChange}
                          className="text-amber-400 focus:ring-amber-400"
                        />
                        <span className="text-white font-medium">I'll wait in the Wi-Fi customer lounge</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Details */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 4 of 5</span>
                    <h2 className="text-2xl font-bold font-heading text-white">Contact Details</h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Our service advisor will text or email confirmation within minutes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Robert Miller"
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                            errors.fullName ? 'border-racing-500' : 'border-obsidian-750'
                          }`}
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-racing-400">{errors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Phone Number (for SMS confirmation) *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="e.g. (919) 555-0199"
                            className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                              errors.phoneNumber ? 'border-racing-500' : 'border-obsidian-750'
                            }`}
                          />
                        </div>
                        {errors.phoneNumber && <p className="text-xs text-racing-400">{errors.phoneNumber}</p>}
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            placeholder="e.g. robert@gmail.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-obsidian-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                              errors.emailAddress ? 'border-racing-500' : 'border-obsidian-750'
                            }`}
                          />
                        </div>
                        {errors.emailAddress && <p className="text-xs text-racing-400">{errors.emailAddress}</p>}
                      </div>
                    </div>

                    {/* SMS updates opt-in check (Explicit wireframe requirement) */}
                    <div className="p-4 rounded-2xl bg-obsidian-950 border border-obsidian-800 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="smsOptIn"
                        name="smsOptIn"
                        checked={formData.smsOptIn}
                        onChange={handleChange}
                        className="w-4 h-4 mt-0.5 rounded text-amber-400 focus:ring-amber-400 bg-obsidian-900 border-obsidian-700"
                      />
                      <label htmlFor="smsOptIn" className="text-xs text-slate-300 cursor-pointer">
                        <strong className="text-white">[SMS updates opt-in]</strong> Send me real-time SMS text updates when my vehicle check-in starts, inspection finishes, and digital estimates are ready.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Live Review & Submission Button [Secure Confirmation & Book Now] */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 5 of 5</span>
                    <h2 className="text-2xl font-bold font-heading text-white">Review & Secure Confirmation</h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Verify your reservation details below before locking in your bay slot.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-obsidian-950 border border-obsidian-800 space-y-4 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-obsidian-800">
                      <div>
                        <p className="text-xs text-slate-400">Selected Service:</p>
                        <p className="font-extrabold text-amber-400 text-base">{selectedServiceObj.label}</p>
                        <p className="text-xs text-slate-300">{selectedServiceObj.desc}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Target Vehicle:</p>
                        <p className="font-bold text-white text-base">
                          {formData.year} {formData.make} {formData.model}
                        </p>
                        <p className="text-xs text-slate-300">Approx. {formData.mileage} miles</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-obsidian-800">
                      <div>
                        <p className="text-xs text-slate-400">Service Window:</p>
                        <p className="font-extrabold text-sky-400 text-base">
                          {formData.selectedDate} at {formData.selectedTimeSlot}
                        </p>
                        <p className="text-xs text-slate-300">{formData.dropOffPreference}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Contact & Notifications:</p>
                        <p className="font-bold text-white text-base">{formData.fullName}</p>
                        <p className="text-xs text-slate-300">{formData.phoneNumber} • {formData.emailAddress}</p>
                        {formData.smsOptIn && (
                          <span className="inline-block mt-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                            ✓ SMS Updates Enabled
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Shop Bay Location: <strong>420 E Main Street, Historic Downtown Clayton, NC 27520</strong></span>
                    </div>
                  </div>

                  {/* Submission Button [Secure Confirmation & Book Now] (Verbatim requirement) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl text-base font-extrabold text-obsidian-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5 text-obsidian-950" />
                      <span>Secure Confirmation & Book Now</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      🔒 No payment required now. Pay upon pickup after reviewing your itemized invoice.
                    </p>
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-obsidian-800">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-obsidian-800 hover:bg-obsidian-750 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {currentStep < 5 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs font-extrabold text-obsidian-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
                  >
                    <span>Next: {
                      currentStep === 1 ? 'Vehicle Details' :
                      currentStep === 2 ? 'Date & Time' :
                      currentStep === 3 ? 'Contact Info' : 'Final Review'
                    }</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          </div>
        ) : (
          /* CONFIRMATION SCREEN */
          <div className="bg-obsidian-900/95 rounded-3xl border border-emerald-500/40 p-8 sm:p-12 shadow-2xl text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Reservation Confirmed
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                You're Locked In, {formData.fullName.split(' ')[0]}!
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
                Confirmation code: <strong className="text-amber-400 font-mono text-lg">{confirmationCode}</strong>. Our service advisor has dispatched confirmation to <strong className="text-white">{formData.phoneNumber}</strong>.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-obsidian-950 border border-obsidian-800 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-obsidian-800 pb-2">
                <span className="text-slate-400">Service:</span>
                <span className="font-bold text-white">{selectedServiceObj.label}</span>
              </div>
              <div className="flex justify-between border-b border-obsidian-800 pb-2">
                <span className="text-slate-400">Scheduled Date:</span>
                <span className="font-bold text-amber-400">{formData.selectedDate} at {formData.selectedTimeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-obsidian-800 pb-2">
                <span className="text-slate-400">Vehicle:</span>
                <span className="font-bold text-white">{formData.year} {formData.make} {formData.model}</span>
              </div>
              <div className="flex justify-between border-b border-obsidian-800 pb-2">
                <span className="text-slate-400">Location:</span>
                <span className="font-bold text-white">420 E Main Street, Clayton, NC</span>
              </div>
              <div className="flex justify-between pt-1 text-[11px] text-slate-400">
                <span>Key Drop Box:</span>
                <span>Available 24/7 on side entrance</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-obsidian-800 hover:bg-obsidian-750 border border-obsidian-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Print Confirmation</span>
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold text-obsidian-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Trust guarantees bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <p className="text-xs font-bold text-white">Zero Pressure Quotes</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Approve only what you want done</p>
          </div>
          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <p className="text-xs font-bold text-white">24/7 Key Drop Box</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Early morning or late night drop off</p>
          </div>
          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <p className="text-xs font-bold text-white">Digital Multi-Point Check</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Complimentary with every appointment</p>
          </div>
        </div>
      </section>
    </div>
  );
}
