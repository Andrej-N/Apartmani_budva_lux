"use client";

import Image from "next/image";
import { Building2, Eye, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export type ApartmentId = "302" | "1102" | "1103" | "1104" | "1106";

export interface ApartmentInfo {
  id: ApartmentId;
  name: string;
  floor: string;
  floorNumber: number;
  description: string;
  image: string;
  view: string;
  guests: number;
}

export const apartments: ApartmentInfo[] = [
  {
    id: "302",
    name: "Apartman 302",
    floor: "3. sprat",
    floorNumber: 3,
    description: "Prostran apartman sa pogledom na grad i more, topli drveni tonovi i moderan dizajn.",
    image: `${bp}/images/apartments/302/living-room.jpg`,
    view: "Grad i more",
    guests: 4,
  },
  {
    id: "1106",
    name: "Apartman 1106",
    floor: "11. sprat",
    floorNumber: 11,
    description: "Premium apartman na vrhu zgrade sa panoramskim pogledom na planine i grad.",
    image: `${bp}/images/apartments/1106/room-with-view.jpg`,
    view: "Panorama",
    guests: 4,
  },
  {
    id: "1102",
    name: "Apartman 1102",
    floor: "11. sprat",
    floorNumber: 11,
    description: "Elegantan apartman sa pogledom na more i Stari grad, moderan enterijer.",
    image: `${bp}/images/apartments/1102-1104/balcony-sea-view.jpg`,
    view: "More i Stari grad",
    guests: 4,
  },
  {
    id: "1103",
    name: "Apartman 1103",
    floor: "11. sprat",
    floorNumber: 11,
    description: "Luksuzno opremljen sa direktnim pogledom na Budvansku rivijeru.",
    image: `${bp}/images/apartments/1102-1104/living-room.jpg`,
    view: "More i Stari grad",
    guests: 4,
  },
  {
    id: "1104",
    name: "Apartman 1104",
    floor: "11. sprat",
    floorNumber: 11,
    description: "Savršen spoj udobnosti i pogleda — more, marina i Stari grad na dlanu.",
    image: `${bp}/images/apartments/1102-1104/room-balcony.jpg`,
    view: "More i Stari grad",
    guests: 4,
  },
];

export default function Apartments({
  onSelectApartment,
  onOpenGallery,
}: {
  onSelectApartment: (id: ApartmentId) => void;
  onOpenGallery: (id: ApartmentId) => void;
}) {
  return (
    <section id="apartments" className="py-24 md:py-32 px-6 bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Naša ponuda
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite">
              Izaberite vaš <span className="text-gold italic">apartman</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Top row: 2 featured apartments */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {apartments.slice(0, 2).map((apt, i) => (
            <RevealOnScroll key={apt.id} delay={i * 0.1}>
              <div className="group border border-charcoal-lighter hover:border-gold/40 transition-all duration-500 overflow-hidden bg-charcoal">
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                  onClick={() => onOpenGallery(apt.id)}
                >
                  <Image
                    src={apt.image}
                    alt={apt.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Pogledajte galeriju
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1.5">
                    <span className="text-gold text-xs uppercase tracking-wider font-semibold">
                      {apt.floor}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-offwhite mb-2">
                    {apt.name}
                  </h3>
                  <p className="text-offwhite-dim text-sm leading-relaxed mb-4">
                    {apt.description}
                  </p>
                  <div className="flex items-center gap-6 mb-5 text-offwhite-dim text-xs uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Eye size={14} className="text-gold" />
                      {apt.view}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-gold" />
                      {apt.guests} gostiju
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} className="text-gold" />
                      {apt.floor}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectApartment(apt.id)}
                    className="w-full py-3 border border-gold text-gold text-sm uppercase tracking-wider hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
                  >
                    Rezervišite ovaj apartman
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom row: 3 identical-type apartments */}
        <div className="grid md:grid-cols-3 gap-6">
          {apartments.slice(2).map((apt, i) => (
            <RevealOnScroll key={apt.id} delay={(i + 2) * 0.1}>
              <div className="group border border-charcoal-lighter hover:border-gold/40 transition-all duration-500 overflow-hidden bg-charcoal">
                <div
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                  onClick={() => onOpenGallery(apt.id)}
                >
                  <Image
                    src={apt.image}
                    alt={apt.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Pogledajte galeriju
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1.5">
                    <span className="text-gold text-xs uppercase tracking-wider font-semibold">
                      {apt.floor}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-offwhite mb-2">
                    {apt.name}
                  </h3>
                  <p className="text-offwhite-dim text-sm leading-relaxed mb-4">
                    {apt.description}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-offwhite-dim text-xs uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Eye size={14} className="text-gold" />
                      {apt.view}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-gold" />
                      {apt.guests}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectApartment(apt.id)}
                    className="w-full py-3 border border-gold text-gold text-sm uppercase tracking-wider hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
                  >
                    Rezervišite
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
