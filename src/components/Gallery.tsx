"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const images = [
  { src: `${bp}/images/room-overview.jpg`, alt: "Pregled apartmana", span: "md:col-span-2 md:row-span-2" },
  { src: `${bp}/images/dining-table.jpg`, alt: "Trpezarija", span: "" },
  { src: `${bp}/images/kitchen.jpg`, alt: "Kuhinja", span: "" },
  { src: `${bp}/images/sofa-art.jpg`, alt: "Dnevni boravak", span: "" },
  { src: `${bp}/images/coffee-set.jpg`, alt: "Tradicionalni srpski kafu set", span: "" },
  { src: `${bp}/images/tea-station.jpg`, alt: "Čaj i kafa kutak", span: "" },
  { src: `${bp}/images/laundry-sink.jpg`, alt: "Kuhinja i pranje", span: "" },
  { src: `${bp}/images/bathroom.jpg`, alt: "Kupatilo", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Galerija
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite">
              Pogledajte <span className="text-gold italic">apartman</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <RevealOnScroll
              key={img.src}
              delay={i * 0.05}
              className={`${img.span} relative overflow-hidden group cursor-pointer ${
                img.span ? "aspect-square" : "aspect-square"
              }`}
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
