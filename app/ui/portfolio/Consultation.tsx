"use client";

import { useState } from "react";
import { ArrowRight, Cpu, Layers, Lightbulb, Loader2 } from "lucide-react";

export default function Consultation() {
  const [ideaInput, setIdeaInput] = useState("");
  const [consultationResult, setConsultationResult] = useState<string | null>(null);
  const [isConsultationLoading, setIsConsultationLoading] = useState(false);

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaInput.trim()) return;

    setIsConsultationLoading(true);
    setConsultationResult(null);

    window.setTimeout(() => {
      setConsultationResult(`
        <div>
          <p><strong>Stack Moderne </strong></p>
          <ul>
            <li><strong>Frontend :</strong> Next.js + Tailwind</li>
            <li><strong>Backend :</strong> Node.js (API) + Auth</li>
            <li><strong>DB :</strong> PostgreSQL</li>
          </ul>
          <p><strong>MVP en 3 étapes </strong></p>
          <ul>
            <li>1) Parcours utilisateur + UI principale</li>
            <li>2) API + base de données</li>
            <li>3) Déploiement + itérations</li>
          </ul>
        </div>
      `);
      setIsConsultationLoading(false);
    }, 800);
  };

  return (
    <section id="consultation" className="relative z-10 py-24 bg-[#1a1a1a] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#d9885a] font-semibold tracking-wide uppercase text-sm">
              <Lightbulb className="w-5 h-5" />
              <span>Consultant Technique IA</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#f5f5f5]">
              Une idée ? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9885a] to-[#f2c38f]">
                Vérifiez sa faisabilité.
              </span>
            </h2>

            <p className="text-[#c9c9c9] text-lg leading-relaxed">
              Décrivez votre idée de projet en quelques mots. 
            </p>

            <form onSubmit={handleConsultation} className="space-y-4 relative">
              <div className="relative">
                <textarea
                  value={ideaInput}
                  onChange={(e) => setIdeaInput(e.target.value)}
                  placeholder="Ex: Je veux créer une application de type Uber mais pour les promeneurs de chiens..."
                  rows={4}
                  className="w-full bg-[#2a2a2a]/80 border border-white/10 rounded-2xl p-4 text-[#f5f5f5] focus:outline-none focus:border-[#d9885a] focus:ring-1 focus:ring-[#d9885a] transition-all resize-none shadow-inner"
                />
                
              </div>

              <button
                disabled={isConsultationLoading || !ideaInput.trim()}
                className="px-8 py-3 rounded-xl bg-[#f5f5f5] text-[#1a1a1a] font-bold hover:bg-[#f2c38f] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(245,245,245,0.2)]"
              >
                {isConsultationLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Cpu className="w-5 h-5" />}
                {isConsultationLoading ? "Analyse en cours..." : "Générer l'Architecture"}
              </button>
            </form>
          </div>

          <div className="flex-1 w-full">
            <div className="relative w-full min-h-[400px] bg-[#2a2a2a]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden flex flex-col justify-center">
              {!consultationResult && !isConsultationLoading && (
                <div className="text-center text-[#c9c9c9] space-y-4 opacity-50">
                  <Layers className="w-16 h-16 mx-auto mb-4" />
                  <p>Les résultats de l'analyse technique apparaîtront ici.</p>
                </div>
              )}

              {isConsultationLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2a2a2a]/80 z-20">
                  <Loader2 className="w-12 h-12 text-[#d9885a] animate-spin mb-4" />
                  <p className="text-[#d9885a] animate-pulse font-mono">Analyse du besoin...</p>
                </div>
              )}

              {consultationResult && !isConsultationLoading && (
                <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <h3 className="text-xl font-bold text-[#f5f5f5]">Recommandation Technique</h3>
                  </div>

                  <div
                    className="prose prose-invert prose-sm max-w-none text-[#c9c9c9] space-y-2 [&_strong]:text-[#d9885a] [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
                    dangerouslySetInnerHTML={{ __html: consultationResult }}
                  />

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                    <a href="#contact" className="text-xs text-[#d9885a] hover:text-[#f5f5f5] flex items-center gap-1 transition-colors">
                      Discuter de ce plan <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
