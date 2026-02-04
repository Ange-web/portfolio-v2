"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import { Project } from "@/app/types/project";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const { title, category, description, image, href, color, stack, highlights } =
        project;

    const modalRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        modalRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [handleKeyDown]);

    return (
        <>
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black/85 backdrop-blur-md z-[100]"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Container centré */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8"
                onClick={onClose}
            >
                {/* Modal */}
                <motion.article
                    ref={modalRef}
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                    }}
                    className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-[#1a1a1a] rounded-3xl shadow-2xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    tabIndex={-1}
                >
                    {/* Header */}
                    <div className="relative h-48 md:h-64 overflow-hidden">
                        {image && (
                            <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 768px"
                                    priority
                                />
                            </motion.div>
                        )}

                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${color} ${image ? "opacity-60" : "opacity-90"
                                }`}
                        />

                        {/* Bouton fermeture */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15, type: "spring" }}
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-colors z-10 group"
                            aria-label="Fermer la fenêtre"
                        >
                            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
                        </motion.button>

                        {/* Titre */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/50 to-transparent">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium mb-2 border border-white/10 text-white/90"
                            >
                                {category}
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                id="modal-title"
                                className="text-2xl md:text-3xl font-bold text-white"
                            >
                                {title}
                            </motion.h2>
                        </div>
                    </div>

                    {/* Contenu scrollable */}
                    <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/80 leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        {/* Stack technique */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                                Stack Technique
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {stack.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.04 }}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/90 hover:bg-white/10 hover:border-white/20 transition-colors"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Points clés */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                        >
                            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                                Points Clés
                            </h3>
                            <ul className="space-y-2.5">
                                {highlights.map((highlight, index) => (
                                    <motion.li
                                        key={highlight}
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.05 }}
                                        className="flex items-center gap-3 text-white/80"
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-emerald-400" />
                                        </div>
                                        <span>{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* CTA */}
                        {href && (
                            <motion.a
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${color} rounded-full font-medium text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
                            >
                                Voir le projet
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        )}
                    </div>
                </motion.article>
            </motion.div>
        </>
    );
}
