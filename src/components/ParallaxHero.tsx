"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxHeroProps {
    title: string;
    subtitle: string;
    bgFrom: string;
    bgTo: string;
    accent?: string;
}

export default function ParallaxHero({
    title,
    subtitle,
    bgFrom,
    bgTo,
    accent = "#f6ad55",
}: ParallaxHeroProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <div
            ref={ref}
            className="relative overflow-hidden"
            style={{ height: "70vh", minHeight: "500px" }}
        >
            {/* Parallax gradient background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y,
                    background: `linear-gradient(135deg, ${bgFrom} 0%, ${bgTo} 50%, ${bgFrom} 100%)`,
                }}
            />

            {/* Decorative circles */}
            <motion.div
                className="absolute rounded-full opacity-10 blur-3xl"
                style={{
                    width: "600px",
                    height: "600px",
                    background: accent,
                    top: "20%",
                    left: "-10%",
                    y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
                }}
            />
            <motion.div
                className="absolute rounded-full opacity-8 blur-3xl"
                style={{
                    width: "400px",
                    height: "400px",
                    background: accent,
                    bottom: "10%",
                    right: "-5%",
                    y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
                style={{ opacity, scale }}
            >
                <motion.h2
                    className="font-hand text-5xl leading-tight tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h2>

                {/* Decorative divider line */}
                <motion.div
                    className="my-4 h-[2px] rounded-full"
                    style={{ background: accent, width: "80px" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                />

                <motion.p
                    className="max-w-md text-lg tracking-wide text-white/70 sm:text-xl"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 flex flex-col items-center gap-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="h-6 w-4 rounded-full border-2 border-white/30">
                        <motion.div
                            className="mx-auto mt-1 h-1.5 w-1 rounded-full bg-white/60"
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
