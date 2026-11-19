import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'full', size = 'default', className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  if (variant === 'icon') {
    return (
      <Link to="/" className={`inline-flex items-center shrink-0 group ${className}`} aria-label="Clayton Auto Repair Home">
        <div className="relative flex items-center justify-center shrink-0">
          <svg
            className={`${isSmall ? 'w-8 h-8' : isLarge ? 'w-12 h-12' : 'w-10 h-10'} transition-transform duration-300 group-hover:scale-105 shrink-0`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="navRedShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="60%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#111116" />
              </linearGradient>
              <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="navSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#a1a1aa" />
              </linearGradient>
            </defs>
            <path
              d="M 50,5 L 88,18 C 88,60 50,92 50,95 C 50,92 12,60 12,18 Z"
              fill="url(#navRedShieldGrad)"
              stroke="url(#navGoldGrad)"
              strokeWidth="3.5"
            />
            <path
              d="M 50,11 L 82,22 C 82,56 50,84 50,86 C 50,84 18,56 18,22 Z"
              fill="#111116"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <path
              d="M 26,48 Q 36,36 46,35 L 58,35 Q 70,36 76,46 L 79,52 C 79,52 75,50 68,50 L 32,50 Q 27,50 26,48 Z"
              fill="url(#navGoldGrad)"
            />
            <path d="M 38,46 L 46,38 L 56,38 L 64,46 Z" fill="#111116" opacity="0.85" />
            <g transform="translate(50, 62) rotate(-35) scale(0.68)">
              <path
                d="M -8,-24 C -16,-20 -20,-10 -16,-2 C -14,2 -10,4 -6,5 L -6,22 C -6,25 -3,28 0,28 C 3,28 6,25 6,22 L 6,5 C 10,4 14,2 16,-2 C 20,-10 16,-20 8,-24 L 2,-16 L -2,-16 Z"
                fill="url(#navSilverGrad)"
                stroke="#111116"
                strokeWidth="1"
              />
              <circle cx="0" cy="22" r="2.5" fill="#111116" />
            </g>
            <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="url(#navGoldGrad)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 shrink-0 whitespace-nowrap group ${className}`} aria-label="Clayton Auto Repair Home">
      {/* Racing Red & Gold Shield Icon Graphic */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          className={`${isSmall ? 'w-8 h-8' : isLarge ? 'w-12 h-12' : 'w-9 h-9 sm:w-10 sm:h-10'} transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md shrink-0`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fullRedShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="60%" stopColor="#b91c1c" />
              <stop offset="100%" stopColor="#111116" />
            </linearGradient>
            <linearGradient id="fullGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="fullSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#a1a1aa" />
            </linearGradient>
          </defs>
          <path
            d="M 50,5 L 88,18 C 88,60 50,92 50,95 C 50,92 12,60 12,18 Z"
            fill="url(#fullRedShieldGrad)"
            stroke="url(#fullGoldGrad)"
            strokeWidth="3.5"
          />
          <path
            d="M 50,11 L 82,22 C 82,56 50,84 50,86 C 50,84 18,56 18,22 Z"
            fill="#111116"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
          <path
            d="M 26,48 Q 36,36 46,35 L 58,35 Q 70,36 76,46 L 79,52 C 79,52 75,50 68,50 L 32,50 Q 27,50 26,48 Z"
            fill="url(#fullGoldGrad)"
          />
          <path d="M 38,46 L 46,38 L 56,38 L 64,46 Z" fill="#111116" opacity="0.85" />
          <g transform="translate(50, 62) rotate(-35) scale(0.68)">
            <path
              d="M -8,-24 C -16,-20 -20,-10 -16,-2 C -14,2 -10,4 -6,5 L -6,22 C -6,25 -3,28 0,28 C 3,28 6,25 6,22 L 6,5 C 10,4 14,2 16,-2 C 20,-10 16,-20 8,-24 L 2,-16 L -2,-16 Z"
              fill="url(#fullSilverGrad)"
              stroke="#111116"
              strokeWidth="1"
            />
            <circle cx="0" cy="22" r="2.5" fill="#111116" />
          </g>
          <polygon points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21" fill="url(#fullGoldGrad)" />
        </svg>
      </div>

      {/* Typography - Strict single-line, zero wrapping */}
      <div className="flex flex-col whitespace-nowrap shrink-0">
        <div className="flex items-center tracking-wider font-extrabold font-heading text-base sm:text-lg text-white leading-tight">
          <span>CLAYTON</span>
          <span className="text-racing-500 ml-1 font-extrabold">AUTO</span>
          <span className="text-amber-400 text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/35 font-mono tracking-normal font-bold">REPAIR</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9.5px] font-bold text-zinc-400 tracking-wider uppercase leading-none mt-0.5">
          <span className="text-amber-400">ASE-CERTIFIED</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-300">HISTORIC DOWNTOWN</span>
        </div>
      </div>
    </Link>
  );
}
