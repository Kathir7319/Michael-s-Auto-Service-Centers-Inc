# Clayton Auto Repair — Official Modern Web Application

> **Honest Auto Repair with Small-Town Roots in Historic Downtown Clayton**  
> ASE-Certified Technicians • Official NC State Inspection Station #38192-S  
> **Location:** 420 E Main Street, Clayton, NC 27520 • **Phone:** (919) 553-7300

---

## 🌟 Highlights & Architecture

Built with **React 18**, **Vite**, **Tailwind CSS**, **React Router 6**, and **Lucide Icons**, this multi-page web application implements the complete website content architecture with high-fidelity, mobile-responsive design.

### 📄 Pages & Routes Included
1. **Home Page (`/`)**
   - High-impact Hero with verbatim client copy, quick trust badges (4.9★, ASE Master Techs, NC Inspection Station).
   - **Why Choose Us** grid featuring *Downtown Heritage*, *No Phone Tag*, and *Certified Experts*.
   - **Core Services Overview** with quick specs for Brakes, Oil Changes, NC State Inspections, AC & Climate Control, Diagnostics, and Steering/Suspension.
   - **Downtown Clayton Walkable District Guide** (coffee shops, bakeries, parks within 200 yards).
   - Real local customer testimonials and Google review highlights.
   - Direct online reservation calls-to-action.

2. **Maintenance Services (`/services`)**
   - Introductory client copy: *"At Clayton Auto Repair, we believe preventative maintenance is the key to vehicle longevity..."*
   - Interactive service category switcher with detailed procedural scope.
   - Full service comparison table with estimated turnarounds.
   - Symptom checklist ("What's your car doing right now?").
   - 24-Month / 24,000-Mile Nationwide Peace of Mind Warranty details.

3. **Official NC Inspection Info (`/nc-inspections`)**
   - Official NC Inspection Station Guidelines.
   - **What to Bring Checklist** with interactive check-off:
     1. Current vehicle registration card.
     2. Proof of active liability insurance coverage.
     3. Photo ID.
   - **Inspection Operating Hours & Policy:**
     - Monday – Friday: 8:00 AM – 4:30 PM (No inspections started after 4:30 PM).
     - First-come, first-served walk-ins, or lock in an express slot online.
   - Explanation of the strict 4:30 PM DMV server cutoff.
   - Comprehensive NC state inspection scope & FAQ accordion.

4. **Schedule Appointment (`/appointment`)**
   - Frictionless 5-step online booking wizard:
     - **Step 1:** Select Service Type (Brakes, Oil Change, NC Inspection, AC Repair, Diagnostics)
     - **Step 2:** Vehicle Information (Year, Make, Model, Approximate Mileage)
     - **Step 3:** Choose Date & Time (Interactive Calendar Matrix with real-time slot selection)
     - **Step 4:** Contact Details (Full Name, Phone Number with `[SMS updates opt-in check]`, Email Address)
     - **Step 5:** Final Review & Submission Button `[Secure Confirmation & Book Now]`
   - Real-time confirmation screen with simulated booking reservation number, summary details, and celebration confetti.

5. **Downtown Heritage & About (`/about`)**
   - The heritage of 420 E Main Street.
   - Code of Ethics and master mechanic credentials.
   - Walkable spots directory for customers dropping off their cars.

6. **Contact & Location (`/contact`)**
   - 420 E Main Street interactive map card with Google Maps turn-by-turn directions.
   - Shop phone, direct email, and operating hours.
   - 24/7 After-Hours Key Drop Box instructions.
   - Online message inquiry form.

---

## 🎨 Custom Logo Design
The brand features a custom modern automotive SVG emblem designed specifically for Clayton Auto Repair:
- An aerodynamic crest badge pairing precision automotive lines with an ASE star and master wrench element.
- Bold typography with high-contrast amber, sky-blue, and platinum chrome styling.
- Available in header, icon, and favicon formats (`/public/clayton-logo.svg`, `/public/logo-icon.svg`, and `<Logo />` React component).

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local dev server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 How to Push to GitHub

1. Create a new repository on your GitHub account (e.g. `clayton-auto-repair`).
2. Run the following commands in this project folder:
   ```bash
   # If you haven't set your git user details yet:
   git config user.name "Your Name"
   git config user.email "your.email@example.com"

   # Add your remote GitHub repository URL:
   git remote add origin https://github.com/YOUR_USERNAME/clayton-auto-repair.git

   # Push the main branch:
   git branch -M main
   git push -u origin main
   ```

---

## 🌐 How to Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository (`clayton-auto-repair`).
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
6. Your site is live with global edge caching and instant SSL!

### Method 2: Deploy via Vercel CLI
If you have the Vercel CLI installed:
```bash
npx vercel
```
Follow the interactive prompts to link and deploy. For production deployment:
```bash
npx vercel --prod
```

> **Note on Client-Side Routing:**  
> A pre-configured `vercel.json` file is already included with SPA rewrites (`"source": "/(.*)", "destination": "/index.html"`), guaranteeing that deep links (like `/services`, `/nc-inspections`, `/appointment`) will load without 404 errors.
