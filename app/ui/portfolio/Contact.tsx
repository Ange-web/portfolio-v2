"use client";

import { useState } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";
import SectionHeader from "./shared/SectionHeader";

export default function Contact() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isMagicLoading, setIsMagicLoading] = useState(false);

  const handleMagicMessage = () => {
    if (!contactForm.subject && !contactForm.name) {
      alert("Veuillez remplir au moins votre nom et le sujet pour que l'IA puisse vous aider !");
      return;
    }

    setIsMagicLoading(true);
    window.setTimeout(() => {
      setContactForm((prev) => ({
        ...prev,
        message:
          "Bonjour Alex,\n\nJe vous contacte au sujet de “" +
          (prev.subject || "ma demande") +
          "”.\nPouvez-vous me proposer une approche et un planning ?\n\nMerci,\n" +
          (prev.name || "Client"),
      }));
      setIsMagicLoading(false);
    }, 700);
  };

  return (
    <section id="contact" className="relative z-10 py-24 bg-[#141414]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader title="Contactez-moi" subtitle="Démarrons un projet ensemble" />

        <div className="mt-12 bg-[#2a2a2a]/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            
          </div>

          <form
            className="space-y-6 relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message envoyé ! (Simulation)");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#c9c9c9]">Nom</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#d9885a] focus:ring-1 focus:ring-[#d9885a] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#c9c9c9]">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#d9885a] focus:ring-1 focus:ring-[#d9885a] transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#c9c9c9]">Sujet</label>
              <input
                type="text"
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="w-full bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#d9885a] focus:ring-1 focus:ring-[#d9885a] transition-all"
                placeholder="Proposition de projet"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-[#c9c9c9]">Message</label>
                <button
                  type="button"
                  onClick={handleMagicMessage}
                  disabled={isMagicLoading}
                  className="text-xs flex items-center gap-1 text-[#d9885a] hover:text-[#f2c38f] transition-colors disabled:opacity-50"
                >
                  {isMagicLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                  {isMagicLoading ? "Rédaction..." : "Rédiger avec l'IA"}
                </button>
              </div>

              <div className="relative">
                <textarea
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-[#1a1a1a]/80 border border-white/10 rounded-xl px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#d9885a] focus:ring-1 focus:ring-[#d9885a] transition-all resize-none"
                  placeholder={isMagicLoading ? "L'IA rédige votre message..." : "Décrivez votre projet..."}
                />

                {isMagicLoading && (
                  <div className="absolute inset-0 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="w-8 h-8 text-[#d9885a] animate-spin" />
                      <span className="text-sm text-[#d9885a] font-medium">Gemini travaille...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#d9885a] to-[#f2c38f] rounded-xl text-[#1a1a1a] font-bold text-lg shadow-lg shadow-[#d9885a]/25 hover:shadow-[#d9885a]/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
              Envoyer le message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
