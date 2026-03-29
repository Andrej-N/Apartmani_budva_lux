"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { apartments, type ApartmentId } from "./Apartments";

const DAYS = ["Pon", "Uto", "Sre", "Čet", "Pet", "Sub", "Ned"];
const MONTHS = [
  "Januar", "Februar", "Mart", "April", "Maj", "Jun",
  "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar",
];

// Mock booked dates per apartment
function getBookedDates(year: number, month: number, apartmentId: ApartmentId): Set<number> {
  const booked = new Set<number>();
  const isCurrentMonth = month === new Date().getMonth() && year === new Date().getFullYear();

  const mockData: Record<ApartmentId, { current: number[]; other: number[] }> = {
    "302":  { current: [5, 6, 7, 14, 15], other: [3, 4, 10, 11, 12] },
    "1102": { current: [8, 9, 10, 20, 21, 22], other: [5, 6, 15, 16] },
    "1103": { current: [12, 13, 14, 25, 26], other: [7, 8, 18, 19] },
    "1104": { current: [3, 4, 5, 18, 19], other: [10, 11, 22, 23] },
    "1106": { current: [1, 2, 3, 22, 23, 24, 25], other: [6, 7, 13, 14, 20] },
  };

  const dates = isCurrentMonth ? mockData[apartmentId].current : mockData[apartmentId].other;
  dates.forEach((d) => booked.add(d));
  return booked;
}

export default function Calendar({
  onOpenModal,
  selectedApartment,
  onApartmentChange,
}: {
  onOpenModal: (apartmentId?: ApartmentId) => void;
  selectedApartment: ApartmentId;
  onApartmentChange: (id: ApartmentId) => void;
}) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const bookedDates = useMemo(
    () => getBookedDates(viewYear, viewMonth, selectedApartment),
    [viewYear, viewMonth, selectedApartment]
  );

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayIndex = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    viewMonth === today.getMonth() &&
    viewYear === today.getFullYear();

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const currentApt = apartments.find((a) => a.id === selectedApartment)!;

  return (
    <section id="calendar" className="py-24 md:py-32 px-6 bg-charcoal-light">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Dostupnost
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-4">
              Kalendar <span className="text-gold italic">rezervacija</span>
            </h2>
            <p className="text-offwhite-dim">
              Izaberite apartman i slobodan termin
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="border border-charcoal-lighter p-6 md:p-8">
            {/* Apartment selector */}
            <div className="mb-8">
              <label className="block text-offwhite-dim text-xs uppercase tracking-wider mb-2">
                Izaberite apartman
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full bg-charcoal border border-charcoal-lighter px-4 py-3 text-offwhite text-sm flex items-center justify-between hover:border-gold/40 transition-colors cursor-pointer"
                >
                  <span>{currentApt.name} — {currentApt.floor}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gold transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 z-20 bg-charcoal border border-charcoal-lighter border-t-0 shadow-xl">
                    {apartments.map((apt) => (
                      <button
                        key={apt.id}
                        onClick={() => {
                          onApartmentChange(apt.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-sm text-left transition-colors cursor-pointer flex items-center justify-between ${
                          apt.id === selectedApartment
                            ? "bg-gold/10 text-gold"
                            : "text-offwhite-dim hover:bg-charcoal-lighter hover:text-offwhite"
                        }`}
                      >
                        <span>{apt.name} — {apt.floor}</span>
                        <span className="text-xs text-offwhite-dim/60">{apt.view}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Month navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevMonth}
                className="p-2 hover:text-gold transition-colors cursor-pointer"
                aria-label="Prethodni mesec"
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="font-serif text-xl text-offwhite">
                {MONTHS[viewMonth]} {viewYear}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:text-gold transition-colors cursor-pointer"
                aria-label="Sledeći mesec"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS.map((d) => (
                <div
                  key={d}
                  className="text-center text-xs uppercase tracking-wider text-offwhite-dim py-2"
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const booked = bookedDates.has(day);
                const past = isPast(day);
                const todayClass = isToday(day);

                return (
                  <button
                    key={day}
                    disabled={booked || past}
                    onClick={() => !booked && !past && onOpenModal(selectedApartment)}
                    className={`
                      relative py-3 text-sm text-center transition-all duration-300 rounded-sm
                      ${todayClass ? "ring-1 ring-gold" : ""}
                      ${
                        booked
                          ? "text-offwhite-dim/40 line-through cursor-not-allowed bg-charcoal-lighter/30"
                          : past
                          ? "text-offwhite-dim/30 cursor-not-allowed"
                          : "text-offwhite hover:bg-gold/20 hover:text-gold cursor-pointer"
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mt-8 text-xs text-offwhite-dim">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gold/20 border border-gold/40 rounded-sm" />
                Slobodno
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-charcoal-lighter/50 rounded-sm" />
                Zauzeto
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 ring-1 ring-gold rounded-sm" />
                Danas
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="text-center mt-10">
            <button
              onClick={() => onOpenModal(selectedApartment)}
              className="px-10 py-4 bg-gold text-charcoal font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
            >
              Pošaljite upit za rezervaciju
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
