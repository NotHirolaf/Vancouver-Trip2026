"use client";

import { motion } from "framer-motion";
import type { PhotoEntry } from "@/data/data";

interface PhotoCardProps {
    photo: PhotoEntry;
    onSelect: (photo: PhotoEntry) => void;
}

export default function PhotoCard({ photo, onSelect }: PhotoCardProps) {
    return (
        <motion.div
            className="group mb-5 cursor-pointer break-inside-avoid"
            style={{ rotate: photo.rotation }}
            whileHover={{
                rotate: 0,
                scale: 1.05,
                zIndex: 20,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            onClick={() => onSelect(photo)}
            layout
        >
            <motion.div
                className="relative overflow-hidden rounded-sm bg-parchment p-2 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl sm:p-3"
                layoutId={`photo-card-${photo.id}`}
            >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-sm">
                    <motion.img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-auto w-full object-cover"
                        layoutId={`photo-image-${photo.id}`}
                        loading="lazy"
                    />

                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                </div>

                {/* Caption strip */}
                <div className="mt-2 px-1">
                    <p className="font-hand text-lg leading-snug text-forest sm:text-xl">
                        {photo.caption}
                    </p>
                    <p className="mt-0.5 text-xs tracking-wide text-slate-grey/60">
                        {photo.date}
                    </p>
                </div>

                {/* Tape effect — decorative */}
                <div className="absolute -right-3 -top-2 h-8 w-16 rotate-12 bg-gold/20 blur-[0.5px]" />
            </motion.div>
        </motion.div>
    );
}
