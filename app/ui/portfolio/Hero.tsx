"use client";

import { Bot, ChevronDown, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTE */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#f5f5f5]">
            Développeur <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d9885a] via-[#f2c38f] to-[#d9885a] animate-gradient">
              Full-Stack
            </span>
          </h1>

          <div className="text-[#c9c9c9] text-lg md:text-xl max-w-lg leading-relaxed space-y-4">
            <p>
              Développeur full-stack en recherche d’alternance (4j entreprise / 1j
              école).
            </p>
            <p>
              J’interviens sur des applications web modernes, avec une approche
              orientée performance, scalabilité et produit.
            </p>
            <p>
              Mon activité d’auto-entrepreneur renforce cette approche en
              m’exposant à des problématiques réelles et concrètes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d9885a] to-[#f2c38f] text-[#1a1a1a] font-semibold shadow-lg shadow-[#d9885a]/25 hover:shadow-[#d9885a]/40 hover:scale-105 transition-all duration-300 text-center"
            >
              Voir mes projets
            </a>

            <a
              href="#consultation"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm text-[#f5f5f5] font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Échanger sur un projet <Bot className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* CARTE CODE */}
        <div className="relative hidden md:block group perspective-1000">
          <div className="relative w-full aspect-square max-w-md mx-auto transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d9885a] to-[#f2c38f] rounded-3xl opacity-20 blur-2xl animate-pulse" />

            <div className="absolute inset-0 bg-[#2a2a2a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Code2 className="text-[#f2c38f] opacity-50" />
              </div>

              {/* CODE SCROLLABLE */}
              <div className="mt-6 flex-1 min-h-0">
                <div className="h-full overflow-y-auto pr-2 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
                  <div className="space-y-3">
                    <div className="text-[#f2c38f]">
                      const <span className="text-yellow-300">Developer</span> = {"{"}
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      name: <span className="text-[#d9885a]">'Ange Nono'</span>,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      role:{" "}
                      <span className="text-[#d9885a]">
                        'Développeur Full-Stack'
                      </span>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      status:{" "}
                      <span className="text-[#d9885a]">
                        'Recherche d’alternance'
                      </span>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      availability:{" "}
                      <span className="text-[#d9885a]">
                        '4j entreprise / 1j école – disponible immédiatement'
                      </span>
                      ,
                    </div>

                     <div className="pl-4 text-[#c9c9c9]">
                      sideActivity:{" "}
                      <span className="text-[#d9885a]">
                        'Auto-entrepreneur '
                      </span>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      stack: [
                      <span className="text-[#d9885a]">'React'</span>,{" "}
                      <span className="text-[#d9885a]">'TypeScript'</span>,{" "}
                      <span className="text-[#d9885a]">'Next.js'</span>,{" "}
                      <span className="text-[#d9885a]">'Node.js'</span>,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      <span className="text-[#d9885a]">'Express'</span>,{" "}
                      <span className="text-[#d9885a]">'PostgreSQL'</span>,{" "}
                      <span className="text-[#d9885a]">'Docker'</span>,{" "}
                      <span className="text-[#d9885a]">'Linux'</span>
                      ],
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      experience: [
                      <span className="text-[#d9885a]">
                        'Projets associatifs à impact social'
                      </span>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      <span className="text-[#d9885a]">
                        'Déploiement et administration de serveurs'
                      </span>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      <span className="text-[#d9885a]">
                        'Architecture d’applications scalables et sécurisées'
                      </span>
                      ,
                      ],
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">
                      mindset:{" "}
                      <span className="text-[#d9885a]">
                        'Approche produit, performance et impact utilisateur'
                      </span>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">contact: {"{"}</div>

                    <div className="pl-8 text-[#c9c9c9]">
                      email:{" "}
                      <a
                        href="mailto:angenono.pro@gmail.com"
                        className="text-[#d9885a] hover:underline"
                      >
                        'angenono.pro@gmail.com'
                      </a>
                      ,
                    </div>

                    <div className="pl-8 text-[#c9c9c9]">
                      linkedin:{" "}
                      <a
                        href="https://linkedin.com/in/ange-nono-a4480a349/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#d9885a] hover:underline"
                      >
                        'linkedin.com/in/ange-nono'
                      </a>
                      ,
                    </div>

                    <div className="pl-4 text-[#c9c9c9]">{"}"},</div>
                    <div className="text-[#f2c38f]">{"}"};</div>
                  </div>
                </div>
              </div>

              {/* PROGRESS */}
              <div className="mt-6 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#d9885a] to-[#f2c38f] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#c9c9c9] w-8 h-8" />
      </div>
    </section>
  );
}
