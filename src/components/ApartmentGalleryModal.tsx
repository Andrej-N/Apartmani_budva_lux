"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { apartments, type ApartmentId } from "./Apartments";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

const apartmentImages: Record<ApartmentId, { src: string; alt: string }[]> = {
  "302": [
    "living-room", "full-overview", "bedroom", "bed-detail", "bed-alternate",
    "kitchen", "living-area", "sofa-area", "bathroom", "shower",
    "balcony-view", "city-view", "sea-view", "building-exterior",
  ].map((name) => ({
    src: `${bp}/images/apartments/302/${name}.jpg`,
    alt: name.replace(/-/g, " "),
  })),
  "1102": [
    "balcony-sea-view", "room-sea-view", "full-overview", "living-room",
    "living-area", "bedroom", "kitchen", "bathroom",
    "room-with-view", "city-sea-panorama", "balcony-overview",
  ].map((name) => ({
    src: `${bp}/images/apartments/1102-1104/${name}.jpg`,
    alt: name.replace(/-/g, " "),
  })),
  "1103": [
    "living-room", "full-overview", "room-sea-view", "bedroom",
    "living-area", "kitchen", "bathroom", "balcony-sea-view",
    "room-balcony", "city-sea-panorama", "rooftop-view",
  ].map((name) => ({
    src: `${bp}/images/apartments/1102-1104/${name}.jpg`,
    alt: name.replace(/-/g, " "),
  })),
  "1104": [
    "room-balcony", "full-overview", "living-room", "bedroom",
    "living-area", "kitchen", "bathroom", "room-with-view",
    "balcony-sea-view", "balcony-overview", "night-view", "old-town-night",
  ].map((name) => ({
    src: `${bp}/images/apartments/1102-1104/${name}.jpg`,
    alt: name.replace(/-/g, " "),
  })),
  "1106": [
    "room-with-view", "full-overview", "living-room", "sofa-kitchen",
    "kitchen", "bathroom", "hallway", "city-panorama",
    "panorama-view", "elevator-view",
  ].map((name) => ({
    src: `${bp}/images/apartments/1106/${name}.jpg`,
    alt: name.replace(/-/g, " "),
  })),
};

export default function ApartmentGalleryModal({
  isOpen,
  onClose,
  apartmentId,
  onBook,
}: {
  isOpen: boolean;
  onClose: () => void;
  apartmentId: ApartmentId | null;
  onBook: (id: ApartmentId) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = apartmentId ? apartmentImages[apartmentId] : [];
  const apartment = apartmentId
    ? apartments.find((a) => a.id === apartmentId)
    : null;

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, apartmentId]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goNext, goPrev, onClose]);

  if (!apartmentId) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col"
        >
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between px-6 py-4">
            <div>
              <h3 className="font-serif text-2xl text-offwhite">
                {apartment?.name}
              </h3>
              <p className="text-offwhite-dim text-sm">
                {apartment?.floor} — {apartment?.view}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  onBook(apartmentId);
                }}
                className="px-6 py-2.5 bg-gold text-charcoal font-semibold uppercase tracking-wider text-xs hover:bg-gold-light transition-all duration-300 cursor-pointer"
              >
                Rezervišite
              </button>
              <button
                onClick={onClose}
                className="text-offwhite-dim hover:text-gold transition-colors cursor-pointer"
                aria-label="Zatvorite"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* Main image */}
          <div className="relative z-10 flex-1 flex items-center justify-center px-16 pb-4 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full max-w-5xl"
              >
                <Image
                  src={images[currentIndex]?.src}
                  alt={images[currentIndex]?.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-gold/80 text-white hover:text-charcoal transition-all duration-300 rounded-full cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-gold/80 text-white hover:text-charcoal transition-all duration-300 rounded-full cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="relative z-10 px-6 pb-4">
            <div className="flex gap-2 justify-center overflow-x-auto py-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`relative w-16 h-12 flex-shrink-0 overflow-hidden cursor-pointer transition-all duration-300 ${
                    i === currentIndex
                      ? "ring-2 ring-gold opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
            <p className="text-center text-offwhite-dim text-xs mt-2">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
