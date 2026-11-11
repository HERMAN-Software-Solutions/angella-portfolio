"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import PageHero from "../components/PageHero"; // <-- Import

export default function ContactPage() {
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
      {/* NEW PAGE HERO */}
      <PageHero 
        kicker="Contact"
        title="Let's build something secure."
        description="I work remotely, and I’m happy to start with a small task so you can see my work first."
        icon={<MessageSquare size={32} />}
        breadcrumbLabel="Contact"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              <div className="bg-surface border border-line rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                {/* ... keep all the Get in Touch content exactly the same ... */}
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-hero text-mint p-3 rounded-xl shrink-0 h-fit"><MapPin size={24} /></div>
                    <div><h3 className="font-bold text-ink">Location</h3><p className="text-muted text-sm mt-1">Kampala, Uganda</p></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-hero text-mint p-3 rounded-xl shrink-0 h-fit"><Mail size={24} /></div>
                    <div><h3 className="font-bold text-ink">Email</h3><a href="mailto:tendo.angella9@gmail.com" className="text-mint hover:underline text-sm mt-1 block">tendo.angella9@gmail.com</a></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-hero text-mint p-3 rounded-xl shrink-0 h-fit"><Phone size={24} /></div>
                    <div><h3 className="font-bold text-ink">Phone</h3><a href="tel:+256700000000" className="text-mint hover:underline text-sm mt-1 block">+256 700 000 000</a></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-hero text-mint p-3 rounded-xl shrink-0 h-fit"><Clock size={24} /></div>
                    <div><h3 className="font-bold text-ink">Office Hours</h3><p className="text-muted text-sm mt-1">Monday–Friday, 9:00 AM – 5:00 PM EAT</p></div>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-line rounded-2xl overflow-hidden h-[300px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.5190398415!2d32.5145681743164!3d0.3475964000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0e788923db%3A0x9b4e8b64d809c69a!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"></iframe>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-surface border border-line rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit">
              {/* ... keep the form exactly the same ... */}
              {status === "sent" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-mint/10 border border-mint p-8 rounded-xl text-center h-full flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold text-mint mb-2">Message Sent!</h2>
                  <p className="text-ink">Thank you for reaching out. I will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <div className="hidden"><label>Website</label><input type="text" name="website" tabIndex={-1} autoComplete="off" /></div>
                  <div><label className="block text-sm font-bold mb-2">Name</label><input required name="name" maxLength={100} type="text" className="w-full bg-bg border border-line rounded-lg p-3 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Your name" /></div>
                  <div><label className="block text-sm font-bold mb-2">Email</label><input required name="email" type="email" maxLength={100} className="w-full bg-bg border border-line rounded-lg p-3 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="you@company.com" /></div>
                  <div><label className="block text-sm font-bold mb-2">Message</label><textarea required name="message" rows={5} maxLength={2000} className="w-full bg-bg border border-line rounded-lg p-3 text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" placeholder="Tell me about your project..."></textarea></div>
                  {status === "error" && (<div className="bg-coral/20 border border-coral text-coral p-4 rounded-lg font-medium text-sm">{errorMessage}</div>)}
                  <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === "sending"} className="w-full bg-mint text-hero px-8 py-3.5 rounded-lg font-bold text-lg shadow-[0_4px_14px_0_rgba(110,231,183,0.39)] hover:bg-mint/90 transition-all disabled:opacity-50">
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}