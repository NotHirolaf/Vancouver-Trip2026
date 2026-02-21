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
        alt: "Arrival at YVR Airport",
        caption: "Touchdown in YVR ✈️",
        journalEntry:
            "The plane broke through a thick blanket of clouds and suddenly the mountains were right there — jagged, snow-capped, impossibly close. The air when we stepped outside was cool, damp, and smelled like cedar. We grabbed our bags and took the Canada Line downtown, watching the city skyline grow through rain-streaked windows.",
        rotation: -2.5,
        date: "July 14, 2026",
        section: "intro",
    },
    {
        id: "intro-2",
        src: "https://placehold.co/800x600/1a2f23/ededed?text=Hotel+View",
        alt: "View from the hotel window",
        caption: "Room with a view",
        journalEntry:
            "Our hotel room had this ridiculous floor-to-ceiling window facing the North Shore Mountains. We stood there for ten minutes doing nothing — just watching the clouds drift between the peaks. The harbor was full of cargo ships and tiny sailboats. Vancouver already felt cinematic.",
        rotation: 1.8,
        date: "July 14, 2026",
        section: "intro",
    },
    {
        id: "intro-3",
        src: "https://placehold.co/600x900/4299e1/FFF?text=Canada+Place",
        alt: "Canada Place waterfront",
        caption: "First walk along the waterfront",
        journalEntry:
            "We couldn't sit still, so we walked to Canada Place before sunset. The sails of the convention center glowed orange in the late afternoon light. Seaplanes took off from the harbor every few minutes, their pontoons skimming the water before lifting off toward the islands. A busker was playing acoustic guitar nearby. Perfect first evening.",
        rotation: -1.2,
        date: "July 14, 2026",
        section: "intro",
    },

    // ── Nature: "Into the Wild" ─────────────────────────────
    {
        id: "nature-1",
        src: "https://placehold.co/700x900/1a2f23/98d4a0?text=Lynn+Canyon",
        alt: "Suspension bridge over Lynn Canyon",
        caption: "Crossing Lynn Canyon",
        journalEntry:
            "The suspension bridge at Lynn Canyon swayed with every step, the turquoise creek roaring thirty metres below. Unlike Capilano, this one's free — and somehow more thrilling. We hiked the loop trail afterwards, surrounded by old-growth Douglas firs so tall they blurred into the mist above.",
        rotation: 2.1,
        date: "July 15, 2026",
        section: "nature",
        videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
        id: "nature-2",
        src: "https://placehold.co/600x800/2d5016/c6f6d5?text=Capilano",
        alt: "Towering trees in Capilano River Regional Park",
        caption: "Cathedral of trees",
        journalEntry:
            "Walking through Capilano felt like stepping into another century. The canopy was so dense the light barely reached the forest floor — just these golden shafts cutting through the green. Ferns everywhere, the smell of wet earth and cedar. We barely spoke the whole hike. Didn't need to.",
        rotation: -2.8,
        date: "July 15, 2026",
        section: "nature",
    },
    {
        id: "nature-3",
        src: "https://placehold.co/800x600/0f3d2e/88d8b0?text=Lighthouse+Park",
        alt: "Rocky shoreline at Lighthouse Park",
        caption: "Edge of the continent",
        journalEntry:
            "Lighthouse Park in West Van felt like the edge of the world. We scrambled over massive granite boulders to reach the shore, where waves crashed against rock smoothed by centuries of Pacific storms. The Atkinson Lighthouse stood white against the grey sky. A bald eagle watched us from a dead snag. Classic BC.",
        rotation: 1.5,
        date: "July 15, 2026",
        section: "nature",
    },
    {
        id: "nature-4",
        src: "https://placehold.co/600x750/1a3a2a/a0d2b0?text=Deep+Cove",
        alt: "Kayaks on the water at Deep Cove",
        caption: "Deep Cove golden hour",
        journalEntry:
            "We drove out to Deep Cove for sunset and it was worth every minute of traffic. The inlet was mirror-still, reflecting the mountains in perfect symmetry. Kayakers glided across the water leaving tiny ripples. We grabbed honey doughnuts from the famous bakery and ate them on the dock, feet dangling over the water.",
        rotation: -1.0,
        date: "July 15, 2026",
        section: "nature",
    },

    // ── Aquarium: "The Aquarium" ───────────────────────────
    {
        id: "aquarium-1",
        src: "https://placehold.co/600x800/1a3a5c/63c5ed?text=Jellyfish",
        alt: "Glowing jellyfish exhibit",
        caption: "Cosmic jellyfish 🪼",
        journalEntry:
            "The jellyfish gallery was pure magic. Moon jellies drifting in slow circles, lit by shifting blues and purples — it felt like floating through outer space. We stood there hypnotized for way too long. The kind of exhibit that makes you forget there's a world outside the glass.",
        rotation: -1.5,
        date: "July 15, 2026",
        section: "aquarium",
    },
    {
        id: "aquarium-2",
        src: "https://placehold.co/800x600/0f3d5e/e8d4a0?text=Sea+Otters",
        alt: "Sea otters floating on their backs",
        caption: "Otters being otters",
        journalEntry:
            "The sea otters stole the show. Two of them were floating on their backs, holding hands so they wouldn't drift apart — yes, they actually do that. One kept rolling over to groom itself, then flipping back with the most unbothered expression. We could have watched them all day.",
        rotation: 2.3,
        date: "July 15, 2026",
        section: "aquarium",
    },
    {
        id: "aquarium-3",
        src: "https://placehold.co/700x900/1a3a5c/b8d8e8?text=Beluga",
        alt: "Beluga whale swimming past the viewing window",
        caption: "A beluga hello",
        journalEntry:
            "A beluga whale swam right up to the viewing window and just... looked at us. Eye to eye, no rush, like it was studying us the way we were studying it. Its skin was this impossible shade of white against the deep blue water. The kids next to us screamed with joy. Honestly, so did we.",
        rotation: -2.0,
        date: "July 15, 2026",
        section: "aquarium",
    },
    {
        id: "aquarium-4",
        src: "https://placehold.co/600x750/2d6a8a/fefcf7?text=Touch+Pool",
        alt: "Touching starfish in the tidal pool exhibit",
        caption: "Starfish handshake 🌊",
        journalEntry:
            "The touch pool was weirdly one of the highlights. Sea stars, anemones, sea cucumbers — all just sitting there, letting you gently poke them. The texture of a sea star is nothing like what you'd expect — rough, almost like sandpaper. A docent explained how they regenerate lost arms. Nature is wild.",
        rotation: 1.0,
        date: "July 15, 2026",
        section: "aquarium",
    },

    // ── City: "Gastown & Downtown" ─────────────────────────
    {
        id: "city-1",
        src: "https://placehold.co/600x800/2d3748/f6ad55?text=Steam+Clock",
        alt: "Gastown Steam Clock",
        caption: "The famous steam clock",
        journalEntry:
            "Gastown's cobblestone streets have this moody, old-world charm — especially at dusk when the gas lamps come on. We timed our visit to catch the steam clock on the hour. It whistled and puffed and a crowd of tourists cheered. Kitschy? Sure. But we cheered too.",
        rotation: 2.5,
        date: "July 16, 2026",
        section: "city",
    },
    {
        id: "city-2",
        src: "https://placehold.co/800x600/1a1a2e/e2e8f0?text=Granville+Night",
        alt: "Granville Street neon signs at night",
        caption: "Neon nights on Granville",
        journalEntry:
            "Granville Street at night is pure energy — neon signs stacked on top of each other, street performers, the Orpheum Theatre glowing like a beacon. We ducked into a rooftop bar and watched the city lights reflect off the rain-slicked streets below. Vancouver does moody-urban exceptionally well.",
        rotation: -1.8,
        date: "July 16, 2026",
        section: "city",
    },
    {
        id: "city-3",
        src: "https://placehold.co/700x800/4a5568/f6ad55?text=Chinatown+Gate",
        alt: "Millennium Gate in Chinatown",
        caption: "Chinatown wandering",
        journalEntry:
            "Chinatown is one of the oldest in North America, and it shows — not in a rundown way, but in a layered, storied way. The Millennium Gate marks the entrance, and behind it you'll find herbal shops, dim sum joints, and the Dr. Sun Yat-Sen Classical Chinese Garden. We spent an afternoon getting wonderfully lost.",
        rotation: 0.8,
        date: "July 16, 2026",
        section: "city",
    },
    {
        id: "city-4",
        src: "https://placehold.co/600x900/374151/93c5fd?text=Science+World",
        alt: "Science World dome at twilight",
        caption: "Science World glow",
        journalEntry:
            "That geodesic dome — Science World — is iconic on the Vancouver skyline. We caught it at twilight from the Olympic Village waterfront, its LED patterns shifting colors against the darkening sky. It's one of those buildings that looks better in real life than in photos, which is saying something.",
        rotation: -2.2,
        date: "July 16, 2026",
        section: "city",
    },

    // ── Food: "Eats & Treats" ─────────────────────────────
    {
        id: "food-1",
        src: "https://placehold.co/600x800/f6ad55/1a2f23?text=Sushi+Platter",
        alt: "Sushi platter at a local restaurant",
        caption: "Sushi that changed us",
        journalEntry:
            "Vancouver sushi is no joke. We hit this tiny spot on Robson — no sign, just a door — and had the best salmon sashimi of our lives. Buttery, melt-on-your-tongue, paired with hand-rolled maki and the freshest wasabi. We went back the next day. And the day after.",
        rotation: 1.2,
        date: "July 17, 2026",
        section: "food",
    },
    {
        id: "food-2",
        src: "https://placehold.co/800x600/fcd34d/92400e?text=Granville+Market",
        alt: "Granville Island Public Market",
        caption: "Market morning magic",
        journalEntry:
            "Granville Island Market is sensory overload in the best way. Mountains of fresh berries, artisan cheese, wood-fired bread, samosas the size of your fist. We grazed our way through, sampling everything. Ended up on a bench outside eating empanadas and watching the boats. Bliss.",
        rotation: -2.0,
        date: "July 17, 2026",
        section: "food",
    },
    {
        id: "food-3",
        src: "https://placehold.co/700x800/fb923c/FFF?text=Ramen+Bowl",
        alt: "Steaming ramen bowl",
        caption: "Ramen weather ☔",
        journalEntry:
            "It started raining (of course) so we ducked into a ramen shop on Denman. The tonkotsu broth was rich and porky, the noodles had that perfect chew, and the soft-boiled egg was a work of art. Rain on the window, steam from the bowl. Some of the best comfort I've ever felt.",
        rotation: 2.8,
        date: "July 17, 2026",
        section: "food",
    },
    {
        id: "food-4",
        src: "https://placehold.co/600x750/fbbf24/451a03?text=Japadog",
        alt: "Japadog street food",
        caption: "Japadog — obviously",
        journalEntry:
            "You can't go to Vancouver and not get a Japadog. We got the Terimayo and the Okonomi. Standing on the sidewalk downtown, hot dog in one hand, matcha latte in the other — this is the Vancouver street food experience. Simple, weird, delicious.",
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
