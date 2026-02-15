"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";
import type { PhotoEntry } from "@/data/data";

interface LightboxProps {
    photo: PhotoEntry | null;
    onClose: () => void;
}

export default function Lightbox({ photo, onClose }: LightboxProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (photo) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [photo, handleKeyDown]);

    return (
        <AnimatePresence>
            {photo && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-parchment shadow-2xl md:flex-row"
                        layoutId={`photo-card-${photo.id}`}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>

                        {/* Left: Image or Video */}
                        <div className="relative min-h-[250px] w-full flex-shrink-0 md:w-1/2">
                            {photo.videoSrc ? (
                                <motion.div
                                    className="h-full w-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                >
                                    <video
                                        src={photo.videoSrc}
                                        poster={photo.src}
                                        controls
                                        autoPlay
                                        className="h-full w-full object-cover"
                                        playsInline
                                    />
                                </motion.div>
                            ) : (
                                <motion.img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="h-full w-full object-cover"
                                    layoutId={`photo-image-${photo.id}`}
                                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                />
                            )}
                        </div>

                        {/* Right: Journal Entry */}
                        <div className="flex flex-1 flex-col justify-between overflow-y-auto p-6 sm:p-8">
                            <div>
                                <motion.h3
                                    className="font-hand text-3xl text-forest sm:text-4xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                >
                                    {photo.caption}
                                </motion.h3>

                                <motion.div
                                    className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-grey/60"
                                    initial={{ y: 15, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                >
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {photo.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        Vancouver, BC
                                    </span>
                                </motion.div>

                                <motion.div
                                    className="my-4 h-[1px] bg-forest/10"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.35, duration: 0.5 }}
                                />

                                <motion.p
                                    className="font-hand text-xl leading-relaxed text-slate-grey sm:text-2xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    {photo.journalEntry}
                                </motion.p>
                            </div>

                            <motion.p
                                className="mt-6 text-xs tracking-widest text-slate-grey/40 uppercase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                            >
                                Vancouver 2026 — Travel Journal
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
