"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/data/data";

const SECTION_KEYS = Object.keys(sections) as Array<keyof typeof sections>;

/* ── Section accent colours for active dot ───────────────── */
const SECTION_COLORS: Record<string, string> = {
    intro: "#63c5ed",
    nature: "#7cc49a",
    aquarium: "#63c5ed",
    city: "#fbc95e",
    food: "#f6a623",
};

export default function DriftingNav() {
    const [activeSection, setActiveSection] = useState<string>("intro");
    const [hoveredSlide, setHoveredSlide] = useState<string | null>(null);
    const [pastHero, setPastHero] = useState(false);

    /* ── Show nav only after scrolling past the landing hero ── */
    useEffect(() => {
        const handleScroll = () => {
            setPastHero(window.scrollY > window.innerHeight * 0.85);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ── IntersectionObserver for active-section detection ──── */
    useEffect(() => {
        const sectionEls = SECTION_KEYS.map((key) =>
            document.getElementById(`section-${key}`)
        ).filter(Boolean) as HTMLElement[];

        if (sectionEls.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let best: IntersectionObserverEntry | null = null;
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        if (!best || entry.intersectionRatio > best.intersectionRatio) {
                            best = entry;
                        }
                    }
                }
                if (best) {
                    const id = best.target.id.replace("section-", "");
                    setActiveSection(id);
                }
            },
            { threshold: [0.1, 0.3, 0.5, 0.7] }
        );

        sectionEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── Click handler ───────────────────────────────────────── */
    const scrollToSection = (key: string) => {
        const el = document.getElementById(`section-${key}`);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AnimatePresence>
            {pastHero && (
                <motion.nav
                    className="fixed right-5 top-1/2 z-40 -translate-y-1/2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    aria-label="Section navigation"
                >
                    <div className="flex flex-col items-end gap-5">
                        {SECTION_KEYS.map((key) => {
                            const isActive = activeSection === key;
                            const isHovered = hoveredSlide === key;
                            const sectionInfo = sections[key];
                            const color = SECTION_COLORS[key] ?? "#f6a623";

                            return (
                                <motion.button
                                    key={key}
                                    className="group relative flex items-center gap-3 cursor-pointer outline-none"
                                    onHoverStart={() => setHoveredSlide(key)}
                                    onHoverEnd={() => setHoveredSlide(null)}
                                    onClick={() => scrollToSection(key)}
                                    aria-label={`Navigate to ${sectionInfo.title}`}
                                    aria-current={isActive ? "true" : undefined}
                                >
                                    {/* ── Label (slides in on hover) ─────────── */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.span
                                                className="whitespace-nowrap rounded-lg bg-forest-dark/85 px-3 py-1.5 text-xs font-medium tracking-wide text-white shadow-lg backdrop-blur-md"
                                                initial={{ opacity: 0, x: 8, scale: 0.9 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                exit={{ opacity: 0, x: 8, scale: 0.9 }}
                                                transition={{ duration: 0.18 }}
                                            >
                                                {sectionInfo.title}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>

                                    {/* ── Dot ────────────────────────────────── */}
                                    <motion.span
                                        className="relative block rounded-full"
                                        animate={{
                                            width: isActive ? 12 : 8,
                                            height: isActive ? 12 : 8,
                                            backgroundColor: isActive ? color : "rgba(74, 85, 104, 0.35)",
                                        }}
                                        whileHover={{
                                            scale: 1.4,
                                            backgroundColor: color,
                                        }}
                                        transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                    >
                                        {/* Glow ring for active dot */}
                                        {isActive && (
                                            <motion.span
                                                className="absolute inset-[-4px] rounded-full"
                                                style={{
                                                    border: `1.5px solid ${color}`,
                                                    opacity: 0.4,
                                                }}
                                                layoutId="nav-ring"
                                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            />
                                        )}
                                    </motion.span>
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
