"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

type NavLink = { name: string; href: string };

export default function Navbar({
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  setActiveSection,
}: {
  navLinks: NavLink[];
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
  activeSection: string;
  setActiveSection: (v: string) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "services", "consultation", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d9885a] to-[#f2c38f] hover:opacity-80 transition-opacity"
        >
          Ange<span className="text-[#f5f5f5]">.</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors hover:text-[#d9885a] ${
                  isActive ? "text-[#d9885a]" : "text-[#c9c9c9]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-[#d9885a] transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "left" }}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex space-x-4">
          <SocialIcon Icon={Github} />
          <SocialIcon Icon={Linkedin} />
          <SocialIcon Icon={Mail} />
        </div>

        <button className="md:hidden text-[#f5f5f5]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] border-b border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-[#c9c9c9] hover:text-[#d9885a]"
            >
              {link.name}
            </a>
          ))}

          <div className="flex space-x-4 pt-4 border-t border-white/10">
            <SocialIcon Icon={Github} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Mail} />
          </div>
        </div>
      )}
    </nav>
  );
}

function SocialIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c9c9c9] hover:text-[#1a1a1a] hover:bg-[#d9885a] hover:border-[#d9885a] transition-all duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
