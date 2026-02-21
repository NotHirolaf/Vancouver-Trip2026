export interface PhotoEntry {
    id: string;
    src: string;
    alt: string;
    caption: string;
    journalEntry: string;
    rotation: number;
    date: string;
    section: "intro" | "nature" | "city" | "food" | "aquarium";
    videoSrc?: string; // Optional video URL — if present, lightbox will play this video
}

export const photos: PhotoEntry[] = [
    // ── Intro: "Touchdown in YVR" ──────────────────────────
    {
        id: "intro-1",
        src: "https://placehold.co/600x800/2d3748/f6ad55?text=YVR+Arrival",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -2.5,
        date: "July 14, 2026",
        section: "intro",
    },
    {
        id: "intro-2",
        src: "https://placehold.co/800x600/1a2f23/ededed?text=Hotel+View",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 1.8,
        date: "July 14, 2026",
        section: "intro",
    },
    {
        id: "intro-3",
        src: "https://placehold.co/600x900/4299e1/FFF?text=Canada+Place",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -1.2,
        date: "July 14, 2026",
        section: "intro",
    },

    // ── Nature: "Into the Wild" ─────────────────────────────
    {
        id: "nature-1",
        src: "https://placehold.co/700x900/1a2f23/98d4a0?text=Lynn+Canyon",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 2.1,
        date: "July 15, 2026",
        section: "nature",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
        id: "nature-2",
        src: "https://placehold.co/600x800/2d5016/c6f6d5?text=Capilano",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -2.8,
        date: "July 15, 2026",
        section: "nature",
    },
    {
        id: "nature-3",
        src: "https://placehold.co/800x600/0f3d2e/88d8b0?text=Lighthouse+Park",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 1.5,
        date: "July 15, 2026",
        section: "nature",
    },
    {
        id: "nature-4",
        src: "https://placehold.co/600x750/1a3a2a/a0d2b0?text=Deep+Cove",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -1.0,
        date: "July 15, 2026",
        section: "nature",
    },

    // ── Aquarium: "The Aquarium" ───────────────────────────
    {
        id: "aquarium-1",
        src: "https://placehold.co/600x800/1a3a5c/63c5ed?text=Jellyfish",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -1.5,
        date: "July 15, 2026",
        section: "aquarium",
    },
    {
        id: "aquarium-2",
        src: "https://placehold.co/800x600/0f3d5e/e8d4a0?text=Sea+Otters",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 2.3,
        date: "July 15, 2026",
        section: "aquarium",
    },
    {
        id: "aquarium-3",
        src: "https://placehold.co/700x900/1a3a5c/b8d8e8?text=Beluga",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -2.0,
        date: "July 15, 2026",
        section: "aquarium",
    },
    {
        id: "aquarium-4",
        src: "https://placehold.co/600x750/2d6a8a/fefcf7?text=Touch+Pool",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 1.0,
        date: "July 15, 2026",
        section: "aquarium",
    },

    // ── City: "Gastown & Downtown" ─────────────────────────
    {
        id: "city-1",
        src: "https://placehold.co/600x800/2d3748/f6ad55?text=Steam+Clock",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 2.5,
        date: "July 16, 2026",
        section: "city",
    },
    {
        id: "city-2",
        src: "https://placehold.co/800x600/1a1a2e/e2e8f0?text=Granville+Night",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -1.8,
        date: "July 16, 2026",
        section: "city",
    },
    {
        id: "city-3",
        src: "https://placehold.co/700x800/4a5568/f6ad55?text=Chinatown+Gate",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 0.8,
        date: "July 16, 2026",
        section: "city",
    },
    {
        id: "city-4",
        src: "https://placehold.co/600x900/374151/93c5fd?text=Science+World",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -2.2,
        date: "July 16, 2026",
        section: "city",
    },

    // ── Food: "Eats & Treats" ─────────────────────────────
    {
        id: "food-1",
        src: "https://placehold.co/600x800/f6ad55/1a2f23?text=Sushi+Platter",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 1.2,
        date: "July 17, 2026",
        section: "food",
    },
    {
        id: "food-2",
        src: "https://placehold.co/800x600/fcd34d/92400e?text=Granville+Market",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -2.0,
        date: "July 17, 2026",
        section: "food",
    },
    {
        id: "food-3",
        src: "https://placehold.co/700x800/fb923c/FFF?text=Ramen+Bowl",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: 2.8,
        date: "July 17, 2026",
        section: "food",
    },
    {
        id: "food-4",
        src: "https://placehold.co/600x750/fbbf24/451a03?text=Japadog",
        alt: "Filler",
        caption: "Filler",
        journalEntry: "Filler",
        rotation: -0.5,
        date: "July 17, 2026",
        section: "food",
    },
];

export const sections = {
    intro: {
        title: "Touchdown in YVR",
        subtitle: "July 2026 — The adventure begins",
        theme: "slate" as const,
    },
    nature: {
        title: "Into the Wild",
        subtitle: "Rainforest trails, canyon crossings & coastal wanders",
        theme: "forest" as const,
    },
    aquarium: {
        title: "The Aquarium",
        subtitle: "Jellyfish, sea otters & ocean wonder",
        theme: "deep" as const,
    },
    city: {
        title: "Gastown & Downtown",
        subtitle: "Neon lights and cobblestone nights",
        theme: "urban" as const,
    },
    food: {
        title: "Eats & Treats",
        subtitle: "A love letter to Vancouver food",
        theme: "warm" as const,
    },
};

export function getPhotosBySection(section: PhotoEntry["section"]): PhotoEntry[] {
    return photos.filter((p) => p.section === section);
}
