"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react"; // Only importing what actually exists in Lucide now
import Image from "next/image";

// Custom SVG Brand Icons
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-hero text-hero-ink border-t border-hero-ink/10 pt-16 pb-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand & Bio */}
        <div className="md:col-span-1">
                      <Link href="/" className="flex items-center gap-3 hover:text-mint transition-colors group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-mint transition-all shadow-sm">
                <Image 
                  src="/angella.jpg" 
                  alt="Angella Tendo" 
                  fill 
                  className="object-cover object-top" 
                  sizes="40px"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">Angella Tendo</span>
            </Link>
          <p className="text-hero-muted text-sm leading-relaxed mb-6">
            Backend developer building secure, scalable Django REST APIs. Open to remote opportunities worldwide.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/tendo-angella" target="_blank" rel="noreferrer" className="text-hero-muted hover:text-mint transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/tendo-angella-335aa3190" target="_blank" rel="noreferrer" className="text-hero-muted hover:text-mint transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-hero-ink mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-hero-muted">
            <li><Link href="/#help" className="hover:text-mint transition-colors">What I do</Link></li>
            <li><Link href="/#projects" className="hover:text-mint transition-colors">Projects</Link></li>
            <li><Link href="/#skills" className="hover:text-mint transition-colors">Skills</Link></li>
            <li><Link href="/contact" className="hover:text-mint transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-hero-ink mb-6">Legal</h3>
          <ul className="space-y-3 text-sm text-hero-muted">
            <li><Link href="/terms" className="hover:text-mint transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-mint transition-colors">Privacy Policy</Link></li>
            <li><Link href="/cookies" className="hover:text-mint transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-mono text-sm tracking-widest uppercase text-hero-ink mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-hero-muted">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-mint shrink-0 mt-0.5" />
              <span>Kampala, Uganda<br/>(Available for Remote Work)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-mint shrink-0" />
              <a href="tel:+256700000000" className="hover:text-mint transition-colors">+256 700 000 000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-mint shrink-0" />
              <a href="mailto:tendo.angella9@gmail.com" className="hover:text-mint transition-colors">tendo.angella9@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-hero-ink/10 text-center text-sm text-hero-muted flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {year || 2026} Angella Tendo. All rights reserved.</p>
        <p>Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}