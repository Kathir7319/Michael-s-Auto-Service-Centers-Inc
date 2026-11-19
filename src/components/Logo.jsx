import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'full', size = 'default', className = '' }) {
  // Sizes: small, default, large
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  if (variant === 'icon') {
    return (
      <Link to="/" className={`inline-flex items-center group ${className}`} aria-label="Clayton Auto Repair Home">
        <div className="relative flex items-center justify-center">
          <svg
            className={`${isSmall ? 'w-8 h-8' : isLarge ? 'w-14 h-14' : 'w-10 h-10'} transition-transform duration-300 group-hover:scale-105`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="navShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="60%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="navSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <path
              d="M 50,5 L 88,18 C 88,60 50,92 50,95 C 50,92 12,60 12,18 Z"
              fill="url(#navShieldGrad)"
              stroke="url(#navGoldGrad)"
              strokeWidth="3.5"
            />
            <path
              d="M 50,11 L 82,22 C 82,56 50,84 50,86 C 50,84 18,56 18,22 Z"
              fill="#0f172a"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <path
              d="M 26,48 Q 36,36 46,35 L 58,35 Q 70,36 76,46 L 79,52 C 79,52 75,50 68,50 L 32,50 Q 27,50 26,48 Z"
              fill="url(#navGoldGrad)"
            />
            <path d="M 38,46 L 46,38 L 56,38 L 64,46 Z" fill="#0f172a" opacity="0.85" />
            <g transform="translate(50, 62) rotate(-35) scale(0.68)">
              <path
                d="M -8,-24 C -16,-20 -20,-10 -16,-2 C -14,2 -10,4 -6,5 L -6,22 C -6,25 -3,28 0,28 C 3,28 6,25 6,22 L 6,5 C 10,4 14,2 16,-2 C 20,-10 16,-20 8,-24 L 2,-16 L -2,-16 Z"
                fill="url(#navSilverGrad)"
                stroke="#0f172a"
                strokeWidth="1"
              />
              <circle cx="0" cy="22" r="2.5" fill="#0f172a" />
            </g>
            <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="url(#navGoldGrad)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Clayton Auto Repair Home">
      {/* Shield Icon Graphic */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          className={`${isSmall ? 'w-8 h-8' : isLarge ? 'w-13 h-13' : 'w-10 h-10'} transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fullNavShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="60%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="fullNavGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="fullNavSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <path
            d="M 50,5 L 88,18 C 88,60 50,92 50,95 C 50,92 12,60 12,18 Z"
            fill="url(#fullNavShieldGrad)"
            stroke="url(#fullNavGoldGrad)"
            strokeWidth="3.5"
          />
          <path
            d="M 50,11 L 82,22 C 82,56 50,84 50,86 C 50,84 18,56 18,22 Z"
            fill="#0f172a"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
          <path
            d="M 26,48 Q 36,36 46,35 L 58,35 Q 70,36 76,46 L 79,52 C 79,52 75,50 68,50 L 32,50 Q 27,50 26,48 Z"
            fill="url(#fullNavGoldGrad)"
          />
          <path d="M 38,46 L 46,38 L 56,38 L 64,46 Z" fill="#0f172a" opacity="0.85" />
          <g transform="translate(50, 62) rotate(-35) scale(0.68)">
            <path
              d="M -8,-24 C -16,-20 -20,-10 -16,-2 C -14,2 -10,4 -6,5 L -6,22 C -6,25 -3,28 0,28 C 3,28 6,25 6,22 L 6,5 C 10,4 14,2 16,-2 C 20,-10 16,-20 8,-24 L 2,-16 L -2,-16 Z"
              fill="url(#fullNavSilverGrad)"
              stroke="#0f172a"
              strokeWidth="1"
            />
            <circle cx="0" cy="22" r="2.5" fill="#0f172a" />
          </g>
          <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="url(#fullNavGoldGrad)" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-wider font-extrabold font-heading text-lg sm:text-xl text-white">
          <span>CLAYTON</span>
          <span className="text-amber-400 ml-1.5 font-bold">AUTO</span>
          <span className="text-sky-400 text-xs ml-1 px-1.5 py-0.5 rounded bg-sky-950/80 border border-sky-800/80 font-mono hidden sm:inline-block">REPAIR</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
          <span className="text-amber-400/90 font-bold">ASE-CERTIFIED</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">HISTORIC DOWNTOWN</span>
        </div>
      </div>
    </Link>
  );
}
