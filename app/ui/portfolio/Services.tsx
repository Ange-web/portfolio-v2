import { Code2, Palette, Terminal } from "lucide-react";
import SectionHeader from "./shared/SectionHeader";
import ServiceCard from "./shared/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Mes Services" subtitle="Ce que je peux faire pour vous" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            icon={<Code2 className="w-8 h-8 text-[#d9885a]" />}
            title="Développement Web"
            description="Création de sites web rapides, responsives et optimisés SEO avec React et Next.js."
          />
          <ServiceCard
            icon={<Palette className="w-8 h-8 text-[#f2c38f]" />}
            title="UI/UX Design"
            description="Conception d'interfaces modernes, intuitives et esthétiques centrées sur l'expérience utilisateur."
          />
          <ServiceCard
            icon={<Terminal className="w-8 h-8 text-[#d9885a]" />}
            title="Intégration IA"
            description="Intégration de modèles d'IA (LLMs) comme Gemini pour des applications intelligentes."
          />
        </div>
      </div>
    </section>
  );
}
