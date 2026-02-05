"use client";

import { useMemo, useState } from "react";
import BackgroundOrbs from "./BackgroundOrbs";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PresentationSection from "./PresentationSection";
import Services from "./Services";
import Consultation from "./Consultation";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

export default function PortfolioPage() {
  // états partagés (menu + section active)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { name: "Accueil", href: "#home" },
      { name: "Présentation", href: "#presentation" },
      { name: "Services", href: "#services" },
      { name: "Consultation IA", href: "#consultation" },
      { name: "Projets", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] font-sans selection:bg-[#d9885a] selection:text-[#1a1a1a] overflow-x-hidden">
      <BackgroundOrbs />

      <Navbar
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="relative z-10">
        <Hero />
        <PresentationSection />
        <Services />
        <Consultation />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
