/**
 * HeroWordCloud
 *
 * Decorative ambient background for the hero section.
 * Words live ONLY in four outer perimeter strips — nothing inside
 * the central content rectangle (heading / blurb / CTA).
 *
 * LEFT  strip — anchored with `left` ≥ 5 %, drift is positive-only (rightward)
 *               so words never slide off the left viewport edge.
 * RIGHT strip — anchored with `right` %, text extends LEFTWARD from that edge,
 *               so words are always fully visible regardless of viewport width.
 * TOP / BOTTOM strips — `left` anchored, full width available.
 *
 * pointer-events: none  |  aria-hidden: true  |  respects prefers-reduced-motion
 */

import { motion, useReducedMotion } from "framer-motion";

interface WordItem {
  text: string;
  tier: 1 | 2 | 3;
  /** % from LEFT edge — word extends rightward. Use for left/top/bottom strip words. */
  left?: number;
  /** % from RIGHT edge — word extends LEFTWARD. Use for right strip words. */
  right?: number;
  top: number;
  color: string;
  /** Drift magnitude in px. LEFT-strip words use positive dx only (drift right).
   *  RIGHT-strip words use positive dx only (drift further into right margin). */
  dx: number;
  dy: number;
  rotate: number;
  duration: number;
  delay: number;
  opacityFrom: number;
  opacityTo: number;
}

const WORDS: WordItem[] = [

  // ── TOP STRIP  (top 3 – 16 %, any left) ──────────────────────────────────
  { text: "women in business", tier: 3, left: 26, top:  6, color: "#2a9d8f", dx:  4, dy:  4, rotate:  2, duration: 14, delay: 3.8, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "employment",   tier: 3, left: 62, top: 10, color: "#1b7a6e", dx:  4, dy:  5, rotate:  3, duration: 17, delay: 2.8, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "organisation", tier: 3, left: 82, top:  4, color: "#1c3d5e", dx:  5, dy: -4, rotate: -2, duration: 12, delay: 3.0, opacityFrom: 0.09, opacityTo: 0.20 },
  // T1 — large corners of the top strip
  { text: "clarity",   tier: 1, left:  5, top:  9, color: "#0f2a44", dx:  6, dy:  5, rotate:  2, duration: 14, delay: 2.0, opacityFrom: 0.13, opacityTo: 0.27 },
  { text: "overwhelm", tier: 1, left: 57, top:  3, color: "#1b7a6e", dx:  8, dy: -5, rotate: -2, duration: 17, delay: 3.0, opacityFrom: 0.13, opacityTo: 0.27 },

  // ── LEFT STRIP  (left ≥ 5 %, top 20 – 84 %) ──────────────────────────────
  // All dx positive → words drift rightward, never slide off left edge.
  { text: "enterprise",    tier: 2, left:  5, top: 22, color: "#4a6483", dx:  5, dy:  5, rotate:  2, duration: 13, delay: 0.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "confusion",     tier: 3, left:  5, top: 30, color: "#4a6483", dx:  4, dy:  4, rotate:  2, duration: 15, delay: 1.0, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "18 - 24",       tier: 3, left:  6, top: 38, color: "#4a6483", dx:  4, dy: -4, rotate: -2, duration: 16, delay: 8.0, opacityFrom: 0.09, opacityTo: 0.19 },
  { text: "to-do-list",    tier: 3, left:  5, top: 46, color: "#5fb3a6", dx:  5, dy:  4, rotate:  2, duration: 14, delay: 5.5, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "social value",  tier: 2, left:  5, top: 54, color: "#4a6483", dx:  6, dy: -4, rotate: -2, duration: 11, delay: 0.8, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "redundancy",    tier: 3, left:  6, top: 62, color: "#4a6483", dx:  4, dy:  4, rotate:  2, duration: 15, delay: 7.5, opacityFrom: 0.09, opacityTo: 0.19 },
  { text: "funding",       tier: 3, left:  6, top: 70, color: "#2a9d8f", dx:  5, dy:  3, rotate:  2, duration: 16, delay: 4.0, opacityFrom: 0.09, opacityTo: 0.20 },
  { text: "impact reports",tier: 3, left:  5, top: 78, color: "#4a6483", dx:  5, dy: -4, rotate: -1, duration: 13, delay: 6.5, opacityFrom: 0.09, opacityTo: 0.20 },

  // ── RIGHT STRIP  (right %, top 20 – 84 %) ────────────────────────────────
  // Anchored from RIGHT edge — text extends leftward so it's always fully visible.
  // All dx positive → words drift further right (into margin), never toward content.
  { text: "coaching",           tier: 2, right:  2, top: 22, color: "#0f2a44", dx:  5, dy: -6, rotate: -1, duration: 14, delay: 3.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "project management", tier: 2, right:  2, top: 32, color: "#4a6483", dx:  6, dy: -5, rotate: -2, duration: 12, delay: 6.0, opacityFrom: 0.10, opacityTo: 0.20 },
  { text: "AI Training",        tier: 2, right:  2, top: 42, color: "#1b7a6e", dx:  5, dy:  5, rotate:  2, duration: 18, delay: 7.0, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "accountability",     tier: 2, right:  2, top: 52, color: "#4a6483", dx:  5, dy:  5, rotate:  2, duration: 17, delay: 4.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "pathways",           tier: 3, right:  3, top: 62, color: "#5fb3a6", dx:  4, dy: -4, rotate: -2, duration: 10, delay: 1.8, opacityFrom: 0.09, opacityTo: 0.18 },
  { text: "50+",                tier: 3, right:  3, top: 71, color: "#1c3d5e", dx:  4, dy: -4, rotate: -2, duration: 12, delay: 0.6, opacityFrom: 0.09, opacityTo: 0.18 },
  { text: "tasks",              tier: 3, right:  3, top: 80, color: "#0f2a44", dx:  4, dy: -4, rotate: -2, duration: 11, delay: 0.3, opacityFrom: 0.09, opacityTo: 0.18 },

  // ── BOTTOM STRIP  (top 88 – 97 %) ────────────────────────────────────────
  // Row A  ~89 %
  { text: "Elevated Living",     tier: 1, left:  6, top: 89, color: "#1b7a6e", dx:  7, dy: -6, rotate: -2, duration: 18, delay: 0.0, opacityFrom: 0.15, opacityTo: 0.30 },
  { text: "entrepreneur",        tier: 2, left: 44, top: 89, color: "#1c3d5e", dx:  6, dy: -5, rotate: -2, duration: 15, delay: 5.0, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "Elevated Edit",       tier: 1, left: 63, top: 89, color: "#1c3d5e", dx:  5, dy: -7, rotate: -1, duration: 20, delay: 4.0, opacityFrom: 0.13, opacityTo: 0.27 },
  // Row B  ~93 %
  { text: "small business owner",tier: 2, left: 18, top: 93, color: "#5fb3a6", dx:  5, dy:  5, rotate:  1, duration: 19, delay: 2.5, opacityFrom: 0.11, opacityTo: 0.23 },
  { text: "community",           tier: 1, left: 37, top: 93, color: "#2a9d8f", dx:  6, dy:  5, rotate:  2, duration: 16, delay: 1.0, opacityFrom: 0.15, opacityTo: 0.30 },
  // Row C  ~96 %
  { text: "business support",    tier: 2, left: 18, top: 96, color: "#2a9d8f", dx:  5, dy:  4, rotate:  2, duration: 16, delay: 1.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "business development",tier: 2, left: 47, top: 96, color: "#2a9d8f", dx:  5, dy: -4, rotate: -2, duration: 13, delay: 2.0, opacityFrom: 0.10, opacityTo: 0.21 },
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

        // Build the horizontal position — left% or right% depending on which side.
        const hPos: React.CSSProperties =
          word.right !== undefined
            ? { right: `${word.right}%` }
            : { left: `${word.left ?? 5}%` };

        return (
          <motion.span
            key={word.text}
            style={{
              position: "absolute",
              ...hPos,
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
                    x: [0, word.dx, word.dx * 0.4, word.dx * 0.1, 0],
                    y: [0, word.dy, -word.dy * 0.3, word.dy * 0.4, 0],
                    rotate: [0, word.rotate, word.rotate * 0.3, -word.rotate * 0.2, 0],
                    opacity: [
                      word.opacityFrom,
                      word.opacityTo,
                      word.opacityFrom * 1.1,
                      word.opacityTo * 0.9,
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
