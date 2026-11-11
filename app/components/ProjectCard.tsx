"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Animates when scrolled into view
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }} // The "lifting" effect on hover
      className={`group block bg-surface border border-line rounded-2xl p-8 transition-shadow hover:shadow-xl hover:border-accent ${project.featured ? "md:col-span-2 border-l-4 border-l-accent" : ""}`}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted text-sm font-mono mt-1">
              {project.company} • {project.date}
            </p>
          </div>
          <div className="bg-bg p-3 rounded-full group-hover:bg-accent group-hover:text-accent-ink transition-colors">
            <ArrowRight size={20} />
          </div>
        </div>
        
        <p className="text-ink/80 mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-mono px-3 py-1 bg-bg border border-line rounded-md text-muted">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}