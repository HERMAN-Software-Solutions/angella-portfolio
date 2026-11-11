"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import PageHero from "../components/PageHero";

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      // Reusing the exact same secure API route as the contact form
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.error || "Something went wrong.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero 
        kicker="Get Started"
        title="Request a Quote"
        description="Tell me about your project, and I'll get back to you with a clear plan and estimate."
        icon={<Zap size={32} />}
        breadcrumbLabel="Get a Quote"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Side: Value Proposition */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's build something robust.</h2>
              <p className="text-muted leading-relaxed mb-6">
                Whether you need a secure API, a complete backend refactor, or rigorous automated testing, I focus on writing clean, maintainable code that scales.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-surface p-2 rounded-lg text-mint"><ShieldCheck size={20} /></div>
                <div>
                  <h3 className="font-bold">Security First</h3>
                  <p className="text-sm text-muted">Role-based access, data sanitization, and strict permissions.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-surface p-2 rounded-lg text-mint"><CheckCircle2 size={20} /></div>
                <div>
                  <h3 className="font-bold">Thoroughly Tested</h3>
                  <p className="text-sm text-muted">Automated regression tests ensure your APIs never break.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface border border-line rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {status === "sent" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-mint/10 border border-mint p-8 rounded-xl text-center h-full flex flex-col justify-center items-center min-h-[400px]"
                >
                  <h2 className="text-2xl font-bold text-mint mb-2">Request Received!</h2>
                  <p className="text-ink">Thank you for reaching out. I'll review your project and send a quote shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                  
                  <div className="hidden">
                    <label>Website</label>
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Name</label>
                      <input required name="name" maxLength={100} type="text" className="w-full bg-bg border border-line rounded-lg p-3 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Email</label>
                      <input required name="email" type="email" maxLength={100} className="w-full bg-bg border border-line rounded-lg p-3 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="you@company.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2">Project Details</label>
                    <textarea required name="message" rows={6} maxLength={2000} className="w-full bg-bg border border-line rounded-lg p-3 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="What are you looking to build? (e.g., Django REST API, testing, security audit...)"></textarea>
                  </div>

                  {status === "error" && (
                    <div className="bg-coral/20 border border-coral text-coral p-4 rounded-lg font-medium text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={status === "sending"}
                    className="w-full bg-[#FF5A1F] text-white px-8 py-3.5 rounded-lg font-bold text-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#FF7A45] transition-all disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Submit Request"}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}