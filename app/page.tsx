"use client";

import { motion } from "framer-motion";
import { projects } from "./data";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import StatCounter from "./components/StatCounter";
import WhatIDo from "./components/WhatIDo"; // <-- Import the new section
import Skills from "./components/Skills"; // <-- Import the new section

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <Hero />

      {/* STATS SECTION */}
      <section className="bg-hero text-hero-ink border-t border-hero-ink/10 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 pt-10">
          {[
            { num: "6+", text: "Real bugs confirmed and fixed in a company project" },
            { num: "3", text: "Regressions caught by the automated tests I wrote" },
            { num: "1", text: "Payment-approval bypass found and fixed" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StatCounter value={stat.num} />
              <span className="text-hero-muted text-sm block">{stat.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT I DO SECTION (Now a separate component) */}
      <WhatIDo />

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-b border-line">
        <div className="mb-12 text-center">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold">Work I have built and tested.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* SKILLS SECTION (Now a separate component) */}
      <Skills />
    </div>
  );
}