"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Slight delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-md z-[100]"
        >
          <div className="bg-hero border border-hero-ink/20 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 text-mint">
                <Cookie size={24} />
                <h3 className="font-bold text-lg text-hero-ink">Cookie Notice</h3>
              </div>
              <button 
                onClick={handleDecline}
                className="text-hero-muted hover:text-coral transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-sm text-hero-muted mb-6 leading-relaxed">
              I use cookies to analyze traffic and ensure you get the best experience on my portfolio. 
              Read my <Link href="/cookies" className="text-mint underline hover:text-white transition-colors">Cookie Policy</Link> for more details.
            </p>

                        <div className="flex gap-3 mt-6">
              <button
                onClick={handleAccept}
                className="flex-1 bg-mint text-hero font-bold py-2.5 rounded-lg shadow-[0_4px_14px_0_rgba(110,231,183,0.39)] hover:bg-mint/90 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-transparent border-2 border-hero-muted text-hero-ink font-bold py-2.5 rounded-lg hover:bg-hero-muted/10 hover:border-hero-ink hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}