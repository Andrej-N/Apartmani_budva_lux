"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <RevealOnScroll>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={`${bp}/images/apartments/1102-1104/rooftop-view.jpg`}
                alt="Pogled sa terase na Stari grad Budve"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Dobrodošli
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-8 leading-tight">
              Vaš dom u srcu
              <br />
              <span className="text-gold italic">Budve</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-8" />
            <p className="text-offwhite-dim leading-relaxed mb-6">
              Lux Apartmani Budva nude 5 potpuno opremljenih luksuznih apartmana
              sa pogledom na more, Stari grad i planine. Smješteni u modernoj
              zgradi sa liftom, na samo par minuta od plaže.
            </p>
            <p className="text-offwhite-dim leading-relaxed mb-8">
              Svaki apartman je pažljivo dizajniran za maksimalan komfor —
              prostrana dnevna soba, moderna kuhinja, udobna spavaća soba i
              balkon sa pogledom koji oduzima dah.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-serif text-3xl text-gold">5</p>
                <p className="text-offwhite-dim text-sm uppercase tracking-wider mt-1">
                  Apartmana
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">2</p>
                <p className="text-offwhite-dim text-sm uppercase tracking-wider mt-1">
                  Sprata
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">180°</p>
                <p className="text-offwhite-dim text-sm uppercase tracking-wider mt-1">
                  Pogled
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
