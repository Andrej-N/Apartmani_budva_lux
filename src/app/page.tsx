"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Apartments, { type ApartmentId } from "@/components/Apartments";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Calendar from "@/components/Calendar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<ApartmentId>("302");
  const [modalApartment, setModalApartment] = useState<ApartmentId | undefined>();

  const handleOpenModal = useCallback((apartmentId?: ApartmentId) => {
    setModalApartment(apartmentId);
    setModalOpen(true);
  }, []);

  const handleSelectApartment = useCallback((id: ApartmentId) => {
    setModalApartment(id);
    setSelectedApartment(id);
    setModalOpen(true);
    // Scroll to calendar after a brief delay
    setTimeout(() => {
      document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onOpenModal={() => handleOpenModal()} />
        <About />
        <Apartments onSelectApartment={handleSelectApartment} />
        <Gallery />
        <Amenities />
        <Calendar
          onOpenModal={handleOpenModal}
          selectedApartment={selectedApartment}
          onApartmentChange={setSelectedApartment}
        />
        <CTASection />
      </main>
      <Footer />
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedApartment={modalApartment}
      />
    </>
  );
}
