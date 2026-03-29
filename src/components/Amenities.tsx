"use client";

import {
  Wifi,
  AirVent,
  UtensilsCrossed,
  WashingMachine,
  ShowerHead,
  Tv,
  Mountain,
  Coffee,
  BedDouble,
  Waves,
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const amenities = [
  { icon: Wifi, label: "Besplatan WiFi" },
  { icon: AirVent, label: "Klima uređaj" },
  { icon: UtensilsCrossed, label: "Opremljena kuhinja" },
  { icon: WashingMachine, label: "Veš mašina" },
  { icon: ShowerHead, label: "Moderno kupatilo" },
  { icon: Tv, label: "Smart TV" },
  { icon: Mountain, label: "Pogled na more" },
  { icon: Coffee, label: "Kafa i čaj" },
  { icon: BedDouble, label: "Udoban krevet" },
  { icon: Waves, label: "Blizu plaže" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Pogodnosti
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite">
              Sve što vam <span className="text-gold italic">treba</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {amenities.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 0.05}>
              <div className="group flex flex-col items-center text-center p-6 border border-charcoal-lighter hover:border-gold/40 transition-all duration-500 hover:bg-charcoal-light">
                <item.icon
                  size={32}
                  className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <p className="text-offwhite-dim text-sm tracking-wide group-hover:text-offwhite transition-colors">
                  {item.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
