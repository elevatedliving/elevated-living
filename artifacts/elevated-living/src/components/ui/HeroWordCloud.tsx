/**
 * HeroWordCloud
 *
 * Decorative ambient background for the hero section.
 * Words live ONLY in four outer perimeter strips — nothing inside
 * the central content rectangle (heading / blurb / CTA).
 *
 * Exclusion zone (approximate):
 *   Horizontal: left 13 % → right 13 %   (matching max-w-4xl + padding)
 *   Vertical:   top  20 % → top  88 %    (heading top → CTA bottom)
 *
 * Zone definitions
 *   TOP    top  2 – 17 %   any left%
 *   BOTTOM top 88 – 97 %   any left%
 *   LEFT   left 0 – 9 %    top 20 – 84 %   (only words ≤ ~110 px wide at T2)
 *   RIGHT  left 87 – 100 % top 20 – 84 %   (words may clip off-screen right)
 *
 * pointer-events: none  |  aria-hidden: true  |  respects prefers-reduced-motion
 */

import { motion, useReducedMotion } from "framer-motion";

interface WordItem {
  text: string;
  tier: 1 | 2 | 3;
  left: number;
  top: number;
  color: string;
  dx: number;
  dy: number;
  rotate: number;
  duration: number;
  delay: number;
  opacityFrom: number;
  opacityTo: number;
}

const WORDS: WordItem[] = [

  // ── TOP STRIP  (top 2 – 17 %) ────────────────────────────────────────────
  // T3 — small words scattered across the full width
  { text: "confusion",    tier: 3, left:  5, top:  4, color: "#4a6483", dx: -5, dy:  4, rotate:  3, duration: 15, delay: 1.0, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "women",        tier: 3, left: 28, top:  7, color: "#2a9d8f", dx: -4, dy:  4, rotate:  2, duration: 14, delay: 3.8, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "to-do-list",   tier: 3, left: 43, top: 13, color: "#5fb3a6", dx: -4, dy:  5, rotate:  2, duration: 14, delay: 5.5, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "employment",   tier: 3, left: 65, top: 11, color: "#1b7a6e", dx: -4, dy:  5, rotate:  3, duration: 17, delay: 2.8, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "organisation", tier: 3, left: 84, top:  5, color: "#1c3d5e", dx:  5, dy: -4, rotate: -2, duration: 12, delay: 3.0, opacityFrom: 0.09, opacityTo: 0.20 },
  // T1 — large words anchored to the far left / far right corners of the top strip
  // "clarity" anchors at left:3 % → text extends ~140 px rightward (~11 %) — safely left of the 13 % content margin
  { text: "clarity",   tier: 1, left:  2, top: 10, color: "#0f2a44", dx: -8,  dy:  6, rotate:  3, duration: 14, delay: 2.0, opacityFrom: 0.13, opacityTo: 0.27 },
  // "overwhelm" anchors at left:60 % — extends rightward toward the right margin
  { text: "overwhelm", tier: 1, left: 60, top:  4, color: "#1b7a6e", dx:  9,  dy: -5, rotate: -3, duration: 17, delay: 3.0, opacityFrom: 0.13, opacityTo: 0.27 },

  // ── LEFT STRIP  (left 0 – 9 %, top 20 – 84 %) ────────────────────────────
  // Only short T2 / T3 words whose text width stays within ~110 px so they
  // don't bleed past the 13 % left margin of the content block.
  { text: "enterprise",   tier: 2, left:  1, top: 26, color: "#4a6483", dx: -5, dy:  5, rotate:  2, duration: 13, delay: 0.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "18 - 24",      tier: 3, left:  3, top: 38, color: "#4a6483", dx:  4, dy: -4, rotate: -2, duration: 16, delay: 8.0, opacityFrom: 0.09, opacityTo: 0.19 },
  { text: "social value", tier: 2, left:  0, top: 52, color: "#4a6483", dx:  6, dy: -5, rotate: -3, duration: 11, delay: 0.8, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "redundancy",   tier: 3, left:  2, top: 66, color: "#4a6483", dx: -4, dy:  4, rotate:  2, duration: 15, delay: 7.5, opacityFrom: 0.09, opacityTo: 0.19 },

  // ── RIGHT STRIP  (left 87 – 100 %, top 20 – 84 %) ────────────────────────
  // Words anchor at left ≥ 87 % and extend rightward — partial clipping is fine.
  { text: "coaching",           tier: 2, left: 87, top: 24, color: "#0f2a44", dx:  5, dy: -7, rotate: -1, duration: 14, delay: 3.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "project management", tier: 2, left: 86, top: 36, color: "#4a6483", dx:  7, dy: -5, rotate: -2, duration: 12, delay: 6.0, opacityFrom: 0.10, opacityTo: 0.20 },
  { text: "AI Training",        tier: 2, left: 87, top: 50, color: "#1b7a6e", dx: -6, dy:  5, rotate:  2, duration: 18, delay: 7.0, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "pathways",           tier: 3, left: 89, top: 61, color: "#5fb3a6", dx:  5, dy: -4, rotate: -2, duration: 10, delay: 1.8, opacityFrom: 0.09, opacityTo: 0.18 },
  { text: "50+",                tier: 3, left: 93, top: 70, color: "#1c3d5e", dx:  4, dy: -5, rotate: -3, duration: 12, delay: 0.6, opacityFrom: 0.09, opacityTo: 0.18 },
  { text: "tasks",              tier: 3, left: 91, top: 79, color: "#0f2a44", dx:  4, dy: -4, rotate: -2, duration: 11, delay: 0.3, opacityFrom: 0.09, opacityTo: 0.18 },

  // ── BOTTOM STRIP  (top 88 – 97 %) ────────────────────────────────────────
  // Row A  top ~89 %
  { text: "Elevated Living",     tier: 1, left:  6, top: 89, color: "#1b7a6e", dx:  8, dy: -6, rotate: -2, duration: 18, delay: 0.0, opacityFrom: 0.15, opacityTo: 0.30 },
  { text: "entrepreneur",        tier: 2, left: 44, top: 89, color: "#1c3d5e", dx:  7, dy: -5, rotate: -2, duration: 15, delay: 5.0, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "Elevated Edit",       tier: 1, left: 64, top: 89, color: "#1c3d5e", dx:  6, dy: -8, rotate: -1, duration: 20, delay: 4.0, opacityFrom: 0.13, opacityTo: 0.27 },
  { text: "accountability",      tier: 2, left: 82, top: 89, color: "#4a6483", dx: -6, dy:  5, rotate:  2, duration: 17, delay: 4.5, opacityFrom: 0.10, opacityTo: 0.22 },
  // Row B  top ~93 %
  { text: "small business owner",tier: 2, left: 18, top: 93, color: "#5fb3a6", dx: -5, dy:  6, rotate:  1, duration: 19, delay: 2.5, opacityFrom: 0.11, opacityTo: 0.23 },
  { text: "community",           tier: 1, left: 37, top: 93, color: "#2a9d8f", dx: -6, dy:  6, rotate:  2, duration: 16, delay: 1.0, opacityFrom: 0.15, opacityTo: 0.30 },
  { text: "impact reports",      tier: 3, left: 76, top: 93, color: "#4a6483", dx:  5, dy: -4, rotate: -1, duration: 13, delay: 6.5, opacityFrom: 0.09, opacityTo: 0.20 },
  // Row C  top ~96-97 %
  { text: "funding",             tier: 3, left:  2, top: 96, color: "#2a9d8f", dx: -5, dy:  3, rotate:  2, duration: 16, delay: 4.0, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "business support",    tier: 2, left: 18, top: 96, color: "#2a9d8f", dx: -6, dy:  5, rotate:  2, duration: 16, delay: 1.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "business development",tier: 2, left: 48, top: 96, color: "#2a9d8f", dx:  5, dy: -5, rotate: -2, duration: 13, delay: 2.0, opacityFrom: 0.10, opacityTo: 0.21 },
];

const FONT_SIZES: Record<1 | 2 | 3, string> = {
  1: "clamp(1.9rem, 3vw, 2.8rem)",
  2: "clamp(1.05rem, 1.6vw, 1.45rem)",
  3: "clamp(0.68rem, 1vw, 0.88rem)",
};

const FONT_WEIGHTS: Record<1 | 2 | 3, number> = { 1: 700, 2: 500, 3: 400 };

export function HeroWordCloud() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {WORDS.map((word) => {
        const midOpacity = (word.opacityFrom + word.opacityTo) / 2;

        return (
          <motion.span
            key={word.text}
            style={{
              position: "absolute",
              left: `${word.left}%`,
              top: `${word.top}%`,
              fontSize: FONT_SIZES[word.tier],
              color: word.color,
              fontWeight: FONT_WEIGHTS[word.tier],
              letterSpacing: "0.025em",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
            initial={{ opacity: word.opacityFrom, x: 0, y: 0, rotate: 0 }}
            animate={
              prefersReducedMotion
                ? { opacity: midOpacity }
                : {
                    x: [0, word.dx, word.dx * 0.3, -word.dx * 0.4, 0],
                    y: [0, word.dy, -word.dy * 0.3, word.dy * 0.4, 0],
                    rotate: [0, word.rotate, word.rotate * 0.3, -word.rotate * 0.4, 0],
                    opacity: [
                      word.opacityFrom,
                      word.opacityTo,
                      word.opacityFrom * 1.15,
                      word.opacityTo * 0.85,
                      word.opacityFrom,
                    ],
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: word.duration,
                    delay: word.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.35, 0.55, 0.8, 1],
                  }
            }
          >
            {word.text}
          </motion.span>
        );
      })}
    </div>
  );
}
