export const COMPANY_INFO = {
  name: "Clayton Auto Repair",
  address: "420 E Main Street",
  city: "Clayton",
  state: "NC",
  zip: "27520",
  fullAddress: "420 E Main Street, Clayton, NC 27520",
  phone: "(919) 553-7300",
  phoneRaw: "9195537300",
  emergencyPhone: "(919) 553-7300",
  email: "service@claytonautorepairnc.com",
  hours: {
    general: "Monday – Friday: 7:30 AM – 5:30 PM",
    inspections: "Monday – Friday: 8:00 AM – 4:30 PM",
    weekend: "Saturday – Sunday: Closed",
    cutoffNotice: "No NC state inspections started after 4:30 PM"
  },
  rating: 4.9,
  reviewsCount: 384,
  license: "Official NC Inspection Station #38192-S"
};

export const CORE_SERVICES = [
  {
    id: "brakes",
    title: "Brake Service & Repair",
    shortDesc: "Stay safe with precision pad and rotor replacements.",
    category: "Brake Systems",
    icon: "ShieldAlert",
    detailedCopy: "Squeaking or grinding? We provide complete brake inspections, pad replacement, rotor resurfacing, and fluid flushes to ensure optimal stopping power.",
    features: [
      "Ceramic & semi-metallic brake pad replacement",
      "Precision rotor resurfacing and replacement",
      "Hydraulic brake line & fluid flush",
      "Caliper rebuild & ABS sensor diagnostics"
    ],
    symptoms: ["High-pitched squealing or metal grinding", "Soft, spongy brake pedal feel", "Steering wheel shudder when slowing down", "Brake dashboard warning light"],
    priceRange: "Starting at $149",
    turnaround: "Same-Day Service Available"
  },
  {
    id: "oil-change",
    title: "Routine Oil Changes",
    shortDesc: "Synthetic and conventional options to extend engine life.",
    category: "Oil & Filter Care",
    icon: "Droplets",
    detailedCopy: "Keep your engine clean. We offer comprehensive oil changes tailored to your vehicle manufacturer’s exact specs, including premium filter updates.",
    features: [
      "Full synthetic, synthetic blend & high-mileage blends",
      "OEM-grade oil filter replacement",
      "Comprehensive 21-point vehicle safety check",
      "All underhood fluids topped off (coolant, washer, steering)"
    ],
    symptoms: ["Oil change indicator or maintenance lamp on", "Dark, gritty oil on the dipstick", "Engine running louder or knocking slightly", "Exceeded 5,000–7,500 mile interval"],
    priceRange: "From $49.95 (Conventional) / $79.95 (Full Synthetic)",
    turnaround: "30–45 Minute Express Bay"
  },
  {
    id: "nc-inspection",
    title: "NC Official Inspections",
    shortDesc: "Fast, certified safety and emissions checks.",
    category: "Official NC State Inspection",
    icon: "CheckCircle2",
    detailedCopy: "Clayton Auto Repair is a certified North Carolina Official Inspection Station. Avoid long lines and stay street-legal with fast, computerized safety and OBD-II emissions checks.",
    features: [
      "Official NC Safety & Emissions computerized testing",
      "Tire tread depth, wiper, and horn verification",
      "Headlight, brake light, and turn signal alignment",
      "Instant electronic transmission to NCDMV portal"
    ],
    symptoms: ["Vehicle registration renewal notice received from NCDMV", "Annual sticker expiring this calendar month", "Relocated into Johnston or Wake County"],
    priceRange: "State Mandated: $30.00 (Emissions + Safety) / $13.60 (Safety Only)",
    turnaround: "15–25 Minutes (Express Lane)"
  },
  {
    id: "ac-repair",
    title: "AC & Climate Control",
    shortDesc: "Keep your cabin cool through hot North Carolina summers.",
    category: "AC & Diagnostics",
    icon: "ThermometerSnowflake",
    detailedCopy: "From weak airflow to blowing warm air, our advanced diagnostic tools trace climate control and electrical faults efficiently without the guesswork.",
    features: [
      "R134a & modern R1234yf refrigerant system servicing",
      "Ultraviolet dye leak detection and seal repair",
      "A/C compressor, condenser, and evaporator testing",
      "Blower motor and cabin micro-filter replacement"
    ],
    symptoms: ["Vents blowing ambient or warm air on hot days", "Musty or mildew odors upon startup", "Clicking or rattling noises under the dash", "AC only works while driving at highway speeds"],
    priceRange: "System Evac & Recharge from $129",
    turnaround: "Same-Day Service"
  },
  {
    id: "engine-diagnostics",
    title: "Check Engine Diagnostics",
    shortDesc: "Translating complex codes into plain-language transparent estimates.",
    category: "Check Engine Diagnostics",
    icon: "Cpu",
    detailedCopy: "Don't ignore the dash. We read code faults instantly, translating complex issues into plain language with completely transparent repair estimates.",
    features: [
      "Snap-on & OEM dealer-grade OBD-II scanning",
      "Live sensor data streaming & freeze-frame evaluation",
      "Misfire, oxygen sensor, catalytic & EVAP leak testing",
      "Clear explanation before any wrench turns"
    ],
    symptoms: ["Solid or flashing Check Engine Light", "Sluggish acceleration or rough idle", "Unexplained drop in gas mileage", "Failed emissions test readiness monitors"],
    priceRange: "Complimentary initial scan / In-depth test $89",
    turnaround: "Under 1 Hour Diagnostic"
  },
  {
    id: "steering-suspension",
    title: "Steering & Suspension",
    shortDesc: "Smooth out bumpy roads and protect tire longevity.",
    category: "Chassis & Ride Control",
    icon: "Compass",
    detailedCopy: "Keep your ride steady and your tires wearing evenly with precision strut, shock, tie-rod, and ball-joint service.",
    features: [
      "Struts, shocks, and spring replacement",
      "Tie rods, ball joints, and control arm bushings",
      "Laser wheel alignment checks",
      "Power steering fluid exchange & pump service"
    ],
    symptoms: ["Car pulling noticeably to one side", "Excessive bouncing over speed bumps", "Clunking or popping when turning", "Uneven tire tread wear"],
    priceRange: "Free Safety Inspection",
    turnaround: "Same-Day Service"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Downtown Heritage",
    subtitle: "Conveniently located at 420 E Main Street",
    desc: "Drop your vehicle off and walk to your favorite downtown spots while we take care of the rest. Enjoy local coffee shops, eateries, and boutiques just steps away.",
    icon: "MapPin",
    highlight: "Walkable Downtown Location"
  },
  {
    title: "No Phone Tag",
    subtitle: "Direct online reservation system",
    desc: "Skip the hold music. Book routine maintenance, oil changes, or NC state inspections straight from your desk with instant SMS and email confirmations.",
    icon: "CalendarCheck",
    highlight: "Instant Booking"
  },
  {
    title: "Certified Experts",
    subtitle: "ASE-Certified Technicians",
    desc: "Our ASE-certified technicians use top-tier diagnostic equipment to catch problems right the first time. No guesswork, no unnecessary upsells.",
    icon: "Award",
    highlight: "ASE-Certified Mastery"
  }
];

export const NC_INSPECTION_GUIDELINES = {
  stationType: "North Carolina Certified Official Inspection Station",
  hours: "Monday – Friday: 8:00 AM – 4:30 PM",
  policy: "First-come, first-served basis for walk-ins, or lock in an express slot by scheduling online below. No inspections are started after 4:30 PM to guarantee state DMV server compliance.",
  checklist: [
    {
      item: "Current vehicle registration card",
      detail: "Physical card or official digital copy from NCDMV",
      required: true
    },
    {
      item: "Proof of active liability insurance coverage",
      detail: "Insurance card, policy declaration, or digital app proof",
      required: true
    },
    {
      item: "Photo ID",
      detail: "Valid driver's license or government-issued identification",
      required: true
    }
  ],
  testingComponents: [
    { name: "Safety Lights", desc: "Headlights, high beams, brake lights, reverse, turn signals & plate light" },
    { name: "Tire Tread & Wheels", desc: "Minimum 2/32-inch tread depth, no cord exposure, secure lug nuts" },
    { name: "Braking Performance", desc: "Service brake stopping power, emergency parking brake hold" },
    { name: "Windshield & Wipers", desc: "Wipers clear glass without tearing, unobstructed driver view" },
    { name: "Steering & Suspension", desc: "Steering linkages, ball joints, tie rods without excessive play" },
    { name: "OBD-II Emissions Check", desc: "Computerized scan checking catalytic converter, EVAP & O2 monitors" },
    { name: "Window Tinting", desc: "Net light transmittance must be 32% or greater on tinted passenger windows" }
  ],
  faqs: [
    {
      q: "Can I get my NC inspection done early?",
      a: "Yes! North Carolina allows you to inspect your vehicle up to 90 days before your registration expiration date. We recommend coming 2 to 3 weeks prior to avoid end-of-the-month rushes."
    },
    {
      q: "Why is the cutoff strictly at 4:30 PM?",
      a: "NCDMV state inspection computers take up to 25 minutes per vehicle and shut down processing precisely at 5:00 PM. Adhering to a 4:30 PM cutoff ensures your vehicle receives a thorough inspection without cutoff risk."
    },
    {
      q: "Will my vehicle fail if the Check Engine light is on?",
      a: "For emissions inspections (vehicles 1996 and newer), an illuminated Check Engine Light will automatically result in an inspection failure. We can diagnose and repair the fault right here."
    },
    {
      q: "Is an appointment required for NC Inspections?",
      a: "Walk-ins are welcomed on a first-come, first-served basis. However, scheduling an online Express Slot guarantees priority bay queueing so you're in and out quickly."
    }
  ]
};

export const DOWNTOWN_WALKABLE_SPOTS = [
  {
    name: "Boulevard West Coffee",
    category: "Coffee & Pastries",
    distance: "2 min walk (0.1 mi)",
    desc: "Artisanal espresso, iced matcha, and freshly baked muffins while you wait."
  },
  {
    name: "Clayton Bakery & Cafe",
    category: "Bakery & Lunch",
    distance: "3 min walk (0.2 mi)",
    desc: "Famous custom cakes, hearty sandwiches, and southern hospitality."
  },
  {
    name: "The Clayton Center",
    category: "Historic Arts & Park",
    distance: "4 min walk (0.2 mi)",
    desc: "Explore historic brick architecture, art gallery exhibits, and town square."
  },
  {
    name: "Main Street Boutiques & Antiques",
    category: "Shopping",
    distance: "1–5 min walk",
    desc: "Stroll along historic storefronts, local gift shops, and craft makers."
  }
];

export const TESTIMONIALS = [
  {
    name: "Marcus Sterling",
    location: "Clayton, NC",
    review: "Dropped my F-150 off for brakes and an NC inspection before walking down to Boulevard West for coffee. They texted me the digital inspection report and had everything done within 90 minutes. Honest, zero pressure, true small-town integrity.",
    rating: 5,
    service: "Brake Service & NC Inspection"
  },
  {
    name: "Sarah Jenkins",
    location: "Historic Downtown Clayton",
    review: "The online booking system is a breath of fresh air! No phone tag or holding forever. They diagnosed a tricky AC electrical issue that another shop misquoted by $500. Clayton Auto Repair has earned my business for life.",
    rating: 5,
    service: "AC & Climate Diagnostics"
  },
  {
    name: "David & Brenda Cooper",
    location: "Johnston County, NC",
    review: "We have brought all 3 of our family cars here for over 6 years. ASE-certified, crystal-clear explanations, and genuine respect for your hard-earned money. 420 E Main Street is the best shop in North Carolina.",
    rating: 5,
    service: "Routine Maintenance & Oil Care"
  }
];
