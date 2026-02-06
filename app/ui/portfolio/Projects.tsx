"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { createPortal } from "react-dom";
import SectionHeader from "./shared/SectionHeader";
import ProjectCard from "./shared/ProjectCard";
import ProjectModal from "./shared/ProjectModal";
import { projectsData } from "@/app/data/projectsData";
import { Project } from "@/app/types/project";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Fermeture si section hors viewport
  useEffect(() => {
    if (!selectedProject || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.2) {
          handleCloseModal();
        }
      },
      { threshold: [0, 0.2, 0.5, 1], rootMargin: "-10% 0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [selectedProject, handleCloseModal]);



  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 py-24 bg-[#101010]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Projets Récents"
          subtitle="Une sélection de mes travaux"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              layoutId={`project-${project.id}`}
              onClick={() => handleOpenModal(project)}
              isSelected={selectedProject?.id === project.id}
            />
          ))}
        </div>

        {/* ✅ Modal via Portal - animation scale/fade au lieu de shared layout */}
        {isMounted &&
          createPortal(
            <AnimatePresence>
              {selectedProject && (
                <ProjectModal
                  key={selectedProject.id}
                  project={selectedProject}
                  onClose={handleCloseModal}
                />
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  );
}
