"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-budva-panorama.jpg`}
          alt="Lux Apartmani Budva - Panoramski pogled na Stari grad Budve"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/60 via-[#121212]/40 to-[#121212]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
        >
          Luksuzni smeštaj u Budvi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-offwhite mb-6 leading-tight"
        >
          Lux Apartmani{" "}
          <span className="text-gold italic">Budva</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-[1px] bg-gold mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-offwhite-dim text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
        >
          5 premium apartmana sa pogledom na more i Stari grad Budve
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onOpenModal}
            className="px-10 py-4 bg-gold text-charcoal font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Proverite dostupnost
          </button>
          <a
            href="#apartments"
            className="px-10 py-4 border border-offwhite-dim text-offwhite-dim uppercase tracking-wider text-sm hover:border-gold hover:text-gold transition-all duration-300"
          >
            Pogledajte apartmane
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
