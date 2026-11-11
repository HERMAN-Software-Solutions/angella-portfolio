"use client";

import { motion } from "framer-motion";
import ApiConsole from "./ApiConsole";
import Image from "next/image";
import { Download, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-hero-ink pt-20 pb-16 px-6 min-h-[85vh] flex items-center">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Text & Photo */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col">
          
          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-mint shadow-[0_0_30px_rgba(110,231,183,0.3)] overflow-hidden"
          >
            <Image 
              src="/angella.jpg" 
              alt="Angella Tendo"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* MIND-CATCHING PHRASE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mint/20 bg-mint/5 text-mint text-sm font-mono tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(110,231,183,0.1)] w-fit">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse"></span>
            Python &bull; Django &bull; Secure APIs
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Backend APIs that keep every client's data <span className="text-mint">safe</span>.
          </h1>
          
          <p className="text-hero-muted text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            I'm Angella Tendo, a backend developer. I build Django REST APIs, test them thoroughly, and find security gaps before users do. Open to remote work.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* EMAIL BUTTON */}
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }} 
              href="mailto:tendo.angella9@gmail.com" 
              className="bg-mint text-hero px-6 py-3 rounded-lg font-bold text-md shadow-[0_4px_14px_0_rgba(110,231,183,0.39)] hover:bg-hero hover:text-mint border-2 border-mint transition-all duration-300"
            >
              Email me
            </motion.a>

            {/* DOWNLOAD CV BUTTON (NEW) */}
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }} 
              href="/Angella_Tendo_CV.pdf" // <-- Make sure this matches the file in public/
              download
              className="bg-sun text-hero px-6 py-3 rounded-lg font-bold text-md shadow-[0_4px_14px_0_rgba(255,209,102,0.39)] hover:bg-hero hover:text-sun border-2 border-sun transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </motion.a>

            {/* GITHUB BUTTON */}
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }} 
              href="https://github.com/tendo-angella" 
              target="_blank" 
              rel="noreferrer"
              className="bg-transparent text-mint px-6 py-3 rounded-lg font-bold text-md border-2 border-mint hover:bg-mint hover:text-hero hover:shadow-[0_4px_14px_0_rgba(110,231,183,0.39)] transition-all duration-300 backdrop-blur-sm"
            >
              See my GitHub
            </motion.a>
          </div>

          {/* CURRENTLY BUILDING STATUS */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-3 text-sm text-hero-muted bg-white/5 border border-white/10 p-3 rounded-lg w-fit"
          >
            <Code2 size={18} className="text-accent" />
            <span>
              <strong className="text-white">Currently Building:</strong> Multi-tenant Hotel System in Django
            </span>
          </motion.div>

        </motion.div>

        {/* Right Side: API Console */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <ApiConsole />
        </motion.div>
      </div>
    </section>
  );
}