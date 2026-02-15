"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music } from "lucide-react";

const MOCK_SONGS = [
    "Pacific Breeze — City Pop Vibes",
    "Sunset on English Bay — Lo-fi Waves",
    "Raincouver — Ambient Drift",
];

export default function MusicWidget() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSong] = useState(0);

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-[90]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                className="flex items-center gap-3 rounded-full border border-forest/15 bg-white/80 px-4 py-2.5 shadow-lg backdrop-blur-md"
                layout
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Music icon / expand toggle */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors hover:bg-gold/30"
                    aria-label="Toggle player"
                >
                    <Music size={16} />
                </button>

                <AnimatePresence mode="wait">
                    {isExpanded && (
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Marquee song title */}
                            <div className="w-36 overflow-hidden">
                                <div className="animate-marquee whitespace-nowrap">
                                    <span className="mr-8 text-sm text-slate-grey">
                                        {MOCK_SONGS[currentSong]}
                                    </span>
                                    <span className="mr-8 text-sm text-slate-grey">
                                        {MOCK_SONGS[currentSong]}
                                    </span>
                                </div>
                            </div>

                            {/* Visualizer bars */}
                            <div className="flex items-end gap-[3px]">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-[3px] rounded-full bg-gold"
                                        style={{
                                            height: isPlaying ? undefined : "4px",
                                            animationDelay: `${i * 0.15}s`,
                                        }}
                                    >
                                        {isPlaying && (
                                            <motion.div
                                                className="visualizer-bar w-full rounded-full bg-gold"
                                                style={{
                                                    animationDelay: `${i * 0.15}s`,
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Play/Pause button */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors hover:bg-forest/20"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
            </motion.div>
        </motion.div>
    );
}
