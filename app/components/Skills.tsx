"use client";

import { motion } from "framer-motion";
import { skillsData } from "../data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold">What I bring.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, i) => (
            <Link key={skill.slug} href={`/skills/${skill.slug}`}>
              <motion.div 
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col justify-between h-full bg-surface border border-line p-6 rounded-xl cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(110,231,183,0.15)] hover:border-mint/50 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-ink group-hover:text-mint transition-colors">{skill.title}</h3>
                    <div className="w-2 h-2 rounded-full bg-mint opacity-0 group-hover:opacity-100 transition-opacity mt-2"></div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{skill.short}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-line/50 flex justify-between items-center">
                  <span className="text-xs font-mono text-muted group-hover:text-mint transition-colors">View details</span>
                  <ArrowRight size={16} className="text-muted group-hover:text-mint group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}