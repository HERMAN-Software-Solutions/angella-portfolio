"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "What I do", href: "/#help" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="text-hero-ink hover:text-mint transition-colors p-2"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100]"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" }}
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-sm z-[101] p-6 flex flex-col shadow-2xl border-l border-white/10"
              style={{ backgroundColor: "#111A3F" }} // Force solid background with inline style
            >
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-coral transition-colors p-2"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-white hover:text-mint transition-colors block border-b border-white/10 pb-4"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* NEW MOBILE GET A QUOTE BUTTON */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 pt-6 border-t border-white/10"
                >
                  <Link 
                    href="/quote"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#FF5A1F] text-white w-full flex justify-center py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#FF7A45] transition-colors"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}