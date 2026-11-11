"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Backend Development",
    desc: "Django and Django REST Framework APIs with clear permissions, clean data, and separate data for each client (multi-tenant).",
    highlight: true,
  },
  {
    title: "Software Testing",
    desc: "Manual testing and automated API tests that catch bugs before release.",
    highlight: false,
  },
  {
    title: "Data & Support",
    desc: "Accurate record entry, data checking, and clear troubleshooting when a system fails.",
    highlight: false,
  },
];

export default function WhatIDo() {
  return (
    <section id="help" className="max-w-6xl mx-auto px-6 py-24 border-b border-line">
      {/* Centered Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">What I do</p>
        <h2 className="text-3xl md:text-5xl font-bold">I build backends people can trust.</h2>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }} // <--- The Hover Lift Effect
            className={`p-8 rounded-2xl flex flex-col items-center text-center transition-shadow duration-300 ${
              service.highlight 
                ? "bg-accent text-accent-ink shadow-[0_10px_40px_-10px_rgba(58,75,220,0.5)]" 
                : "bg-surface border border-line shadow-sm hover:shadow-xl hover:border-accent/50"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className={`${service.highlight ? "opacity-90" : "text-muted"} leading-relaxed`}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}