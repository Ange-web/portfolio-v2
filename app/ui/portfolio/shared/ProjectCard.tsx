"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/app/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  layoutId: string;
  isSelected: boolean;
}

export default function ProjectCard({
  project,
  onClick,
  isSelected,
}: ProjectCardProps) {
  const { title, category, color, image } = project;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values pour le suivi de la souris
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs pour des mouvements fluides
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Gestion du mouvement de souris
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normaliser entre -0.5 et 0.5
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    // ✅ Wrapper statique - définit l'espace dans le grid, ne bouge JAMAIS
    <div
      ref={cardRef}
      className="relative aspect-[4/3] [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        opacity: isSelected ? 0.3 : 1,
        pointerEvents: isSelected ? "none" : "auto",
      }}
    >
      {/* ✅ Inner transformé - l'effet 3D est isolé ici */}
      <motion.article
        className="absolute inset-0 rounded-3xl overflow-hidden cursor-pointer bg-[#1a1a1a] transform-gpu"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.05)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        {/* Image */}
        {image && (
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700"
              style={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}

        {/* Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} transition-opacity duration-300 ${image
              ? isHovered ? "opacity-65" : "opacity-50"
              : isHovered ? "opacity-95" : "opacity-80"
            }`}
        />

        {/* Reflet lumineux dynamique */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: `radial-gradient(
              circle at ${50 + mouseX.get() * 100}% ${50 + mouseY.get() * 100}%,
              rgba(255, 255, 255, 0.4) 0%,
              transparent 60%
            )`,
          }}
        />

        {/* Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        {/* Contenu - translateZ pour effet de profondeur */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 md:p-8 flex flex-col justify-end"
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-black/40 blur-xl rounded-2xl" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium mb-3 border border-white/10 text-white/90">
                {category}
              </span>

              <h3
                className="text-xl md:text-2xl font-bold mb-2 text-white"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                {title}
              </h3>

              <p
                className="text-white/70 text-sm flex items-center gap-2 transition-all duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0) translateZ(10px)" : "translateY(10px)",
                }}
              >
                Voir le détail <ExternalLink className="w-4 h-4" />
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
