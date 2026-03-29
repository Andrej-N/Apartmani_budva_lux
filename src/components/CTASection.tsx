"use client";

import { ExternalLink, MessageCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Rezervišite
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6">
            Spremni za <span className="text-gold italic">nezaboravan</span> boravak?
          </h2>
          <p className="text-offwhite-dim max-w-xl mx-auto mb-12 leading-relaxed">
            Rezervišite direktno za najbolju cenu ili nas kontaktirajte putem
            WhatsApp-a za brz odgovor. 5 luksuznih apartmana vas čeka u Budvi.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Airbnb Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#FF5A5F] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#e04e52] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5A5F]/20 w-full sm:w-auto justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.182c-.254 1.35-.918 2.858-1.976 4.02-.147.162-.367.262-.588.262-.162 0-.323-.044-.47-.147-.323-.22-.397-.662-.177-.985.883-1.014 1.45-2.345 1.656-3.475.103-.573.103-1.042.015-1.39-.088-.32-.264-.5-.5-.588-.264-.103-.602-.074-.97.074-.735.294-1.47.985-2.19 2.052-.735 1.086-1.32 2.42-1.714 3.843-.088.294-.338.5-.647.5h-.044c-.309-.015-.559-.235-.618-.544-.206-1.13-.603-2.2-1.15-3.166-.558-.985-1.203-1.74-1.876-2.2-.294-.206-.397-.588-.235-.912.162-.323.544-.441.868-.279.838.412 1.597 1.13 2.264 2.13.162.25.31.515.441.78.412-.956.912-1.838 1.508-2.608.853-1.1 1.773-1.876 2.72-2.258.588-.235 1.174-.294 1.7-.147.544.162.97.53 1.218 1.042.235.5.294 1.13.176 1.82z" />
              </svg>
              Rezervišite na Airbnb
              <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Booking.com Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#003580] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#00264d] transition-all duration-300 hover:shadow-lg hover:shadow-[#003580]/20 w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M2.27 7.277a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0Zm7.097 9.882a5.527 5.527 0 0 1-3.897 1.614 5.527 5.527 0 0 1-3.897-1.614A5.49 5.49 0 0 1 0 13.273V7.277a7.47 7.47 0 0 1 5.47-7.2v3.048a3.2 3.2 0 1 0 0 6.303v3.845a1.327 1.327 0 0 1-2.654 0v-.827H0v.827a4.127 4.127 0 0 0 5.47 3.897 4.127 4.127 0 0 0 3.897-3.897v-.827H6.72v.827c0 .695-.55 1.26-1.25 1.26-.7 0-1.25-.565-1.25-1.26v-.827H1.573v.827a3.9 3.9 0 0 0 3.897 3.897 3.9 3.9 0 0 0 3.897-3.897ZM20.8 7.277a3.2 3.2 0 1 0-6.4 0 3.2 3.2 0 0 0 6.4 0Z" />
              </svg>
              Rezervišite na Booking
              <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#20bd5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={20} />
              WhatsApp upit
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
