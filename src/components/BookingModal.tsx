"use client";

import { useState, useEffect, FormEvent } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { apartments, type ApartmentId } from "./Apartments";

type ModalState = "form" | "processing" | "success";

export default function BookingModal({
  isOpen,
  onClose,
  preselectedApartment,
}: {
  isOpen: boolean;
  onClose: () => void;
  preselectedApartment?: ApartmentId;
}) {
  const [state, setState] = useState<ModalState>("form");
  const [form, setForm] = useState({
    name: "",
    email: "",
    apartment: "" as ApartmentId | "",
    startDate: "",
    endDate: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen && preselectedApartment) {
      setForm((prev) => ({ ...prev, apartment: preselectedApartment }));
    }
  }, [isOpen, preselectedApartment]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setState("processing");
    setTimeout(() => setState("success"), 1500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setState("form");
      setForm({ name: "", email: "", apartment: "", startDate: "", endDate: "", message: "" });
    }, 300);
  };

  const selectedAptName = form.apartment
    ? apartments.find((a) => a.id === form.apartment)?.name
    : "";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg bg-charcoal border border-charcoal-lighter shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-offwhite-dim hover:text-gold transition-colors z-10 cursor-pointer"
              aria-label="Zatvorite"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-10">
              {state === "form" && (
                <>
                  <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2">
                    Rezervacija
                  </p>
                  <h3 className="font-serif text-3xl text-offwhite mb-8">
                    Pošaljite <span className="text-gold italic">upit</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Apartment select */}
                    <div>
                      <label className="block text-offwhite-dim text-sm mb-2">
                        Apartman *
                      </label>
                      <select
                        required
                        value={form.apartment}
                        onChange={(e) =>
                          setForm({ ...form, apartment: e.target.value as ApartmentId })
                        }
                        className="w-full bg-charcoal-light border border-charcoal-lighter px-4 py-3 text-offwhite text-sm focus:outline-none focus:border-gold transition-colors [color-scheme:dark] cursor-pointer appearance-none"
                      >
                        <option value="" disabled>
                          Izaberite apartman
                        </option>
                        {apartments.map((apt) => (
                          <option key={apt.id} value={apt.id}>
                            {apt.name} — {apt.floor}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-offwhite-dim text-sm mb-2">
                        Ime i prezime *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-charcoal-light border border-charcoal-lighter px-4 py-3 text-offwhite text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Vaše ime"
                      />
                    </div>

                    <div>
                      <label className="block text-offwhite-dim text-sm mb-2">
                        Email adresa *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-charcoal-light border border-charcoal-lighter px-4 py-3 text-offwhite text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="vas@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-offwhite-dim text-sm mb-2">
                          Dolazak *
                        </label>
                        <input
                          type="date"
                          required
                          value={form.startDate}
                          onChange={(e) =>
                            setForm({ ...form, startDate: e.target.value })
                          }
                          className="w-full bg-charcoal-light border border-charcoal-lighter px-4 py-3 text-offwhite text-sm focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <label className="block text-offwhite-dim text-sm mb-2">
                          Odlazak *
                        </label>
                        <input
                          type="date"
                          required
                          value={form.endDate}
                          onChange={(e) =>
                            setForm({ ...form, endDate: e.target.value })
                          }
                          className="w-full bg-charcoal-light border border-charcoal-lighter px-4 py-3 text-offwhite text-sm focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-offwhite-dim text-sm mb-2">
                        Poruka
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full bg-charcoal-light border border-charcoal-lighter px-4 py-3 text-offwhite text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Dodatne napomene ili pitanja..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gold text-charcoal font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 cursor-pointer"
                    >
                      Pošaljite zahtev
                    </button>
                  </form>
                </>
              )}

              {state === "processing" && (
                <div className="flex flex-col items-center justify-center py-16">
                  <Loader2
                    size={48}
                    className="text-gold animate-spin mb-6"
                  />
                  <p className="text-offwhite font-serif text-xl">
                    Šaljemo vaš zahtev...
                  </p>
                </div>
              )}

              {state === "success" && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2
                    size={56}
                    className="text-gold mb-6"
                  />
                  <h3 className="font-serif text-2xl text-offwhite mb-4">
                    Zahtev je uspešno poslat!
                  </h3>
                  <p className="text-offwhite-dim leading-relaxed mb-8 max-w-sm">
                    {selectedAptName
                      ? `Vaš upit za ${selectedAptName} je primljen. `
                      : ""}
                    Kontaktiraćemo Vas uskoro. Hvala na interesovanju za
                    Lux Apartmane Budva.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 border border-gold text-gold uppercase tracking-wider text-sm hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
                  >
                    Zatvorite
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
