"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";
import MasonryGrid from "@/components/MasonryGrid";
import Lightbox from "@/components/Lightbox";
import MusicWidget from "@/components/MusicWidget";
import DriftingNav from "@/components/DriftingNav";
import { getPhotosBySection, sections, type PhotoEntry } from "@/data/data";

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);

  const introPhotos = getPhotosBySection("intro");
  const naturePhotos = getPhotosBySection("nature");
  const aquariumPhotos = getPhotosBySection("aquarium");
  const cityPhotos = getPhotosBySection("city");
  const foodPhotos = getPhotosBySection("food");

  return (
    <main className="relative min-h-screen">
      {/* ── Landing Hero ─────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a7c5e] via-[#5a9470] to-[#7ab893]" />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-ocean/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] h-48 w-48 rounded-full bg-gold-bright/20 blur-3xl"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.div
            className="mb-6 flex items-center justify-center gap-2 text-gold-bright"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Plane size={16} className="rotate-[-30deg]" />
            <span className="text-sm tracking-[0.3em] uppercase">
              Summer 2026
            </span>
          </motion.div>

          <motion.h1
            className="font-hand text-6xl leading-tight tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Vancouver
          </motion.h1>

          <motion.div
            className="mx-auto my-4 h-[2px] w-24 rounded-full bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.p
            className="mx-auto max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A travel scrapbook — rain-soaked forests, neon city lights,
            unforgettable eats, and everything in between.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-1.5 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <MapPin size={14} />
            <span className="text-xs tracking-widest uppercase">
              British Columbia, Canada
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            className="h-8 w-5 rounded-full border-2 border-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-gold/60"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Intro Section ────────────────────────────────── */}
      <div id="section-intro">
        <ParallaxHero
          title={sections.intro.title}
          subtitle={sections.intro.subtitle}
          bgFrom="#5b8fa8"
          bgTo="#7ab893"
          accent="#63c5ed"
        />
        <MasonryGrid
          photos={introPhotos}
          sectionTitle={sections.intro.title}
          sectionSubtitle={sections.intro.subtitle}
          sectionKey="intro"
          onSelectPhoto={setSelectedPhoto}
        />
      </div>

      {/* ── Nature Section ───────────────────────────────── */}
      <div id="section-nature">
        <ParallaxHero
          title={sections.nature.title}
          subtitle={sections.nature.subtitle}
          bgFrom="#5a9470"
          bgTo="#7cc49a"
          accent="#a8e6b8"
        />
        <MasonryGrid
          photos={naturePhotos}
          sectionTitle={sections.nature.title}
          sectionSubtitle={sections.nature.subtitle}
          sectionKey="nature"
          onSelectPhoto={setSelectedPhoto}
        />
      </div>

      {/* ── Aquarium Section ──────────────────────────────── */}
      <div id="section-aquarium">
        <ParallaxHero
          title={sections.aquarium.title}
          subtitle={sections.aquarium.subtitle}
          bgFrom="#1a3a5c"
          bgTo="#2d6a8a"
          accent="#63c5ed"
        />
        <MasonryGrid
          photos={aquariumPhotos}
          sectionTitle={sections.aquarium.title}
          sectionSubtitle={sections.aquarium.subtitle}
          sectionKey="aquarium"
          onSelectPhoto={setSelectedPhoto}
        />
      </div>

      {/* ── City Section ─────────────────────────────────── */}
      <div id="section-city">
        <ParallaxHero
          title={sections.city.title}
          subtitle={sections.city.subtitle}
          bgFrom="#2d3148"
          bgTo="#4a5578"
          accent="#f6ad55"
        />
        <MasonryGrid
          photos={cityPhotos}
          sectionTitle={sections.city.title}
          sectionSubtitle={sections.city.subtitle}
          sectionKey="city"
          onSelectPhoto={setSelectedPhoto}
        />
      </div>

      {/* ── Food Section ─────────────────────────────────── */}
      <div id="section-food">
        <ParallaxHero
          title={sections.food.title}
          subtitle={sections.food.subtitle}
          bgFrom="#d4956b"
          bgTo="#e8b88a"
          accent="#fbd38d"
        />
        <MasonryGrid
          photos={foodPhotos}
          sectionTitle={sections.food.title}
          sectionSubtitle={sections.food.subtitle}
          sectionKey="food"
          onSelectPhoto={setSelectedPhoto}
        />
      </div>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-hand text-3xl text-forest sm:text-4xl">
            Until next time, Vancouver.
          </p>
          <p className="mt-3 text-xs tracking-widest text-slate-grey/50 uppercase">
            February 2026 — A journey documented
          </p>
        </motion.div>
      </footer>

      {/* ── Global Overlays ──────────────────────────────── */}
      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      <MusicWidget />
      <DriftingNav />
    </main>
  );
}
