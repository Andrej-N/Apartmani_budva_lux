"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <RevealOnScroll>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/room-dining.jpg`}
                alt="Apartman Boško enterijer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Dobrodošli
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-8 leading-tight">
              Vaš dom daleko
              <br />
              <span className="text-gold italic">od kuće</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-8" />
            <p className="text-offwhite-dim leading-relaxed mb-6">
              Apartman Boško nudi savršen spoj modernog dizajna i toplog srpskog
              gostoprimstva. Smešten u samom srcu grada, naš apartman je idealan
              za kratke i duže boravke.
            </p>
            <p className="text-offwhite-dim leading-relaxed mb-8">
              Potpuno opremljena kuhinja, udoban prostor za spavanje i boravak, i
              sve što vam je potrebno za bezbrižan odmor — čeka vas na jednom mestu.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-serif text-3xl text-gold">4+</p>
                <p className="text-offwhite-dim text-sm uppercase tracking-wider mt-1">
                  Gostiju
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">1</p>
                <p className="text-offwhite-dim text-sm uppercase tracking-wider mt-1">
                  Spavaća soba
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">★</p>
                <p className="text-offwhite-dim text-sm uppercase tracking-wider mt-1">
                  Top ocena
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
