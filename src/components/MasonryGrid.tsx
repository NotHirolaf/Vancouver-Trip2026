"use client";

import { motion } from "framer-motion";
import type { PhotoEntry } from "@/data/data";
import PhotoCard from "./PhotoCard";

interface MasonryGridProps {
    photos: PhotoEntry[];
    sectionTitle: string;
    sectionSubtitle: string;
    sectionKey: string;
    onSelectPhoto: (photo: PhotoEntry) => void;
}

export default function MasonryGrid({
    photos,
    sectionTitle,
    sectionSubtitle,
    sectionKey,
    onSelectPhoto,
}: MasonryGridProps) {
    return (
        <section
            className={`section-${sectionKey} relative px-4 py-16 sm:px-8 md:px-12 lg:px-20`}
        >
            {/* Section header */}
            <motion.div
                className="mb-12 text-center"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="font-hand text-4xl tracking-wide text-gold sm:text-5xl md:text-6xl">
                    {sectionTitle}
                </h2>
                <div className="mx-auto my-3 h-[1px] w-20 bg-gold/30" />
                <p className="text-sm tracking-widest text-cream/50 uppercase">
                    {sectionSubtitle}
                </p>
            </motion.div>

            {/* Masonry columns */}
            <div className="mx-auto max-w-6xl columns-1 gap-5 sm:columns-2 lg:columns-3">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <PhotoCard photo={photo} onSelect={onSelectPhoto} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
