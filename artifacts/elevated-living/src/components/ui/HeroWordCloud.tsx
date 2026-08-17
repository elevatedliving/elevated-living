import { motion, useReducedMotion } from "framer-motion";

interface WordItem {
  text: string;
  tier: 1 | 2 | 3;
  left: number;   // % from left edge
  top: number;    // % from top edge
  color: string;
  dx: number;     // drift x in px
  dy: number;     // drift y in px
  rotate: number; // max degrees
  duration: number; // animation cycle seconds
  delay: number;    // start delay seconds
  opacityFrom: number;
  opacityTo: number;
}

const WORDS: WordItem[] = [
  // ── Tier 1 — largest, gravitating toward centre ──────────────────────────
  { text: "Elevated Living", tier: 1, left: 42, top: 28, color: "#1b7a6e", dx:  8, dy: -6, rotate: -2, duration: 18, delay: 0,   opacityFrom: 0.14, opacityTo: 0.30 },
  { text: "clarity",         tier: 1, left: 11, top: 22, color: "#0f2a44", dx: -10, dy: 8, rotate:  3, duration: 14, delay: 2,   opacityFrom: 0.13, opacityTo: 0.27 },
  { text: "Elevated Edit",   tier: 1, left: 67, top: 58, color: "#1c3d5e", dx:  6, dy: -8, rotate: -1, duration: 20, delay: 4,   opacityFrom: 0.12, opacityTo: 0.26 },
  { text: "community",       tier: 1, left: 22, top: 70, color: "#2a9d8f", dx: -8,  dy: 6, rotate:  2, duration: 16, delay: 1,   opacityFrom: 0.15, opacityTo: 0.30 },
  { text: "overwhelm",       tier: 1, left: 60, top: 18, color: "#1b7a6e", dx: 10, dy: -5, rotate: -3, duration: 17, delay: 3,   opacityFrom: 0.12, opacityTo: 0.25 },

  // ── Tier 2 — medium ───────────────────────────────────────────────────────
  { text: "enterprise",           tier: 2, left:  6, top: 43, color: "#4a6483", dx: -6, dy:  5, rotate:  2, duration: 13, delay: 0.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "entrepreneur",         tier: 2, left: 53, top: 78, color: "#1c3d5e", dx:  8, dy: -6, rotate: -2, duration: 15, delay: 5,   opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "small business owner", tier: 2, left: 27, top: 87, color: "#5fb3a6", dx: -5, dy:  7, rotate:  1, duration: 19, delay: 2.5, opacityFrom: 0.12, opacityTo: 0.24 },
  { text: "project management",   tier: 2, left: 70, top: 34, color: "#4a6483", dx:  7, dy: -5, rotate: -2, duration: 12, delay: 6,   opacityFrom: 0.10, opacityTo: 0.20 },
  { text: "business support",     tier: 2, left:  3, top: 68, color: "#2a9d8f", dx: -8, dy:  6, rotate:  3, duration: 16, delay: 1.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "coaching",             tier: 2, left: 83, top: 20, color: "#0f2a44", dx:  5, dy: -7, rotate: -1, duration: 14, delay: 3.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "AI Training",          tier: 2, left: 38, top: 52, color: "#1b7a6e", dx: -6, dy:  5, rotate:  2, duration: 18, delay: 7,   opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "social value",         tier: 2, left: 16, top: 53, color: "#4a6483", dx:  7, dy: -5, rotate: -3, duration: 11, delay: 0.8, opacityFrom: 0.10, opacityTo: 0.20 },
  { text: "accountability",       tier: 2, left: 76, top: 81, color: "#1c3d5e", dx: -7, dy:  6, rotate:  2, duration: 17, delay: 4.5, opacityFrom: 0.10, opacityTo: 0.22 },
  { text: "business development", tier: 2, left: 48, top: 91, color: "#2a9d8f", dx:  6, dy: -5, rotate: -2, duration: 13, delay: 2,   opacityFrom: 0.10, opacityTo: 0.20 },

  // ── Tier 3 — smallest, fill edges ─────────────────────────────────────────
  { text: "confusion",      tier: 3, left:  5, top:  8, color: "#4a6483", dx: -5, dy:  4, rotate:  3, duration: 15, delay: 1,   opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "organisation",   tier: 3, left: 85, top:  8, color: "#1c3d5e", dx:  5, dy: -4, rotate: -2, duration: 12, delay: 3,   opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "to-do-list",     tier: 3, left: 43, top:  4, color: "#5fb3a6", dx: -4, dy:  5, rotate:  2, duration: 14, delay: 5.5, opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "tasks",          tier: 3, left: 93, top: 48, color: "#0f2a44", dx:  4, dy: -5, rotate: -3, duration: 11, delay: 0.3, opacityFrom: 0.08, opacityTo: 0.16 },
  { text: "funding",        tier: 3, left:  2, top: 85, color: "#2a9d8f", dx: -5, dy:  4, rotate:  2, duration: 16, delay: 4,   opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "impact reports", tier: 3, left: 65, top: 93, color: "#4a6483", dx:  5, dy: -4, rotate: -1, duration: 13, delay: 6.5, opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "employment",     tier: 3, left: 53, top:  6, color: "#1b7a6e", dx: -4, dy:  5, rotate:  3, duration: 17, delay: 2.8, opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "pathways",       tier: 3, left: 79, top: 64, color: "#5fb3a6", dx:  5, dy: -4, rotate: -2, duration: 10, delay: 1.8, opacityFrom: 0.08, opacityTo: 0.16 },
  { text: "redundancy",     tier: 3, left: 10, top: 56, color: "#4a6483", dx: -5, dy:  4, rotate:  2, duration: 15, delay: 7.5, opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "50+",            tier: 3, left: 95, top: 33, color: "#1c3d5e", dx:  4, dy: -5, rotate: -3, duration: 12, delay: 0.6, opacityFrom: 0.08, opacityTo: 0.16 },
  { text: "women",          tier: 3, left: 33, top: 11, color: "#2a9d8f", dx: -4, dy:  5, rotate:  2, duration: 14, delay: 3.8, opacityFrom: 0.08, opacityTo: 0.18 },
  { text: "18 - 24",        tier: 3, left: 20, top: 37, color: "#4a6483", dx:  5, dy: -4, rotate: -2, duration: 16, delay: 8,   opacityFrom: 0.08, opacityTo: 0.16 },
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
            initial={{
              opacity: word.opacityFrom,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={
              prefersReducedMotion
                ? { opacity: midOpacity }
                : {
                    x: [0, word.dx, word.dx * 0.3, -word.dx * 0.4, 0],
                    y: [0, word.dy, -word.dy * 0.3,  word.dy * 0.4, 0],
                    rotate: [0, word.rotate, word.rotate * 0.3, -word.rotate * 0.4, 0],
                    opacity: [
                      word.opacityFrom,
                      word.opacityTo,
                      word.opacityFrom * 1.2,
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
