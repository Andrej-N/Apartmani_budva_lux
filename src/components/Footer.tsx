export default function Footer() {
  return (
    <footer id="contact" className="border-t border-charcoal-lighter py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-offwhite mb-4">
              Lux Apartmani <span className="text-gold">Budva</span>
            </p>
            <p className="text-offwhite-dim text-sm leading-relaxed">
              5 luksuznih apartmana u srcu Budve sa pogledom na more
              i Stari grad. Savršen spoj modernog komfora i
              mediteranskog šarma.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-xs mb-4">
              Linkovi
            </p>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "O nama" },
                { href: "#apartments", label: "Apartmani" },
                { href: "#gallery", label: "Galerija" },
                { href: "#amenities", label: "Pogodnosti" },
                { href: "#calendar", label: "Dostupnost" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-offwhite-dim text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold uppercase tracking-[0.2em] text-xs mb-4">
              Kontakt
            </p>
            <ul className="space-y-3 text-offwhite-dim text-sm">
              <li>Budva, Crna Gora</li>
              <li>info@luxapartmanibudva.me</li>
              <li>+382 XX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-lighter pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-offwhite-dim/60 text-xs">
            &copy; {new Date().getFullYear()} Lux Apartmani Budva. Sva prava zadržana.
          </p>
          <p className="text-offwhite-dim/40 text-xs">
            Dizajnirano sa ljubavlju
          </p>
        </div>
      </div>
    </footer>
  );
}
