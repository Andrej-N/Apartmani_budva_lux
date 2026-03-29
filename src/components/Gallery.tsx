"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

type GalleryTab = "all" | "302" | "1106" | "1102-1104";

const tabs: { id: GalleryTab; label: string }[] = [
  { id: "all", label: "Svi" },
  { id: "302", label: "Apt 302" },
  { id: "1106", label: "Apt 1106" },
  { id: "1102-1104", label: "Apt 1102–1104" },
];

interface GalleryImage {
  src: string;
  alt: string;
  group: "302" | "1106" | "1102-1104";
  span?: string;
}

const images: GalleryImage[] = [
  // 302
  { src: `${bp}/images/apartments/302/living-room.jpg`, alt: "Apt 302 — Dnevni boravak", group: "302", span: "md:col-span-2 md:row-span-2" },
  { src: `${bp}/images/apartments/302/bedroom.jpg`, alt: "Apt 302 — Spavaća soba", group: "302" },
  { src: `${bp}/images/apartments/302/balcony-view.jpg`, alt: "Apt 302 — Pogled sa balkona", group: "302" },
  { src: `${bp}/images/apartments/302/kitchen.jpg`, alt: "Apt 302 — Kuhinja", group: "302" },
  { src: `${bp}/images/apartments/302/full-overview.jpg`, alt: "Apt 302 — Pregled", group: "302" },
  { src: `${bp}/images/apartments/302/bathroom.jpg`, alt: "Apt 302 — Kupatilo", group: "302" },
  // 1106
  { src: `${bp}/images/apartments/1106/room-with-view.jpg`, alt: "Apt 1106 — Soba sa pogledom", group: "1106", span: "md:col-span-2 md:row-span-2" },
  { src: `${bp}/images/apartments/1106/full-overview.jpg`, alt: "Apt 1106 — Pregled", group: "1106" },
  { src: `${bp}/images/apartments/1106/kitchen.jpg`, alt: "Apt 1106 — Kuhinja", group: "1106" },
  { src: `${bp}/images/apartments/1106/city-panorama.jpg`, alt: "Apt 1106 — Panorama grada", group: "1106" },
  { src: `${bp}/images/apartments/1106/living-room.jpg`, alt: "Apt 1106 — Dnevni boravak", group: "1106" },
  { src: `${bp}/images/apartments/1106/bathroom.jpg`, alt: "Apt 1106 — Kupatilo", group: "1106" },
  // 1102-1104
  { src: `${bp}/images/apartments/1102-1104/room-balcony.jpg`, alt: "Apt 1102–1104 — Soba sa balkonom", group: "1102-1104", span: "md:col-span-2 md:row-span-2" },
  { src: `${bp}/images/apartments/1102-1104/living-room.jpg`, alt: "Apt 1102–1104 — Dnevni boravak", group: "1102-1104" },
  { src: `${bp}/images/apartments/1102-1104/bedroom.jpg`, alt: "Apt 1102–1104 — Spavaća soba", group: "1102-1104" },
  { src: `${bp}/images/apartments/1102-1104/balcony-sea-view.jpg`, alt: "Apt 1102–1104 — Pogled na more", group: "1102-1104" },
  { src: `${bp}/images/apartments/1102-1104/kitchen.jpg`, alt: "Apt 1102–1104 — Kuhinja", group: "1102-1104" },
  { src: `${bp}/images/apartments/1102-1104/bathroom.jpg`, alt: "Apt 1102–1104 — Kupatilo", group: "1102-1104" },
  { src: `${bp}/images/apartments/1102-1104/night-view.jpg`, alt: "Apt 1102–1104 — Noćni pogled", group: "1102-1104" },
  { src: `${bp}/images/apartments/1102-1104/city-sea-panorama.jpg`, alt: "Apt 1102–1104 — Panorama", group: "1102-1104" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("all");

  const filtered = activeTab === "all"
    ? images
    : images.filter((img) => img.group === activeTab);

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Galerija
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite">
              Pogledajte naše <span className="text-gold italic">apartmane</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Tabs */}
        <RevealOnScroll delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gold text-charcoal font-semibold"
                    : "border border-charcoal-lighter text-offwhite-dim hover:border-gold/40 hover:text-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className={`${img.span || ""} relative overflow-hidden group cursor-pointer aspect-square`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={img.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end justify-start p-4">
                <p className="text-offwhite text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
