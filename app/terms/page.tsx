"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import PageHero from "../components/PageHero";

export default function TermsPage() {
  return (
    <div>
      <PageHero 
        kicker="Legal"
        title="Terms & Conditions"
        description="The rules and guidelines for using this website."
        icon={<FileText size={32} />}
        breadcrumbLabel="Terms & Conditions"
      />

      <div className="max-w-4xl mx-auto px-6 py-20 min-h-screen">
        <Link href="/" className="inline-flex items-center text-muted hover:text-mint mb-12 transition-colors font-mono text-sm group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="bg-surface border border-line rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="space-y-8 text-ink/80 leading-relaxed">
            <p className="text-muted font-mono text-sm border-b border-line pb-4">Last updated: November 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">1. Agreement to Terms</h2>
              <p>By accessing this portfolio website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">2. Intellectual Property</h2>
              <p>The content, code, design, and materials on this website are the intellectual property of Angella Tendo, unless otherwise stated. You may not reproduce, distribute, modify, or use any part of this website for commercial purposes without explicit written permission.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">3. Project Demonstrations</h2>
              <p>Any interactive tools on this website (such as the API console) are for demonstration and educational purposes only. They do not represent actual live production systems, nor do they process real user data. The data shown is entirely fictional.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">4. Limitation of Liability</h2>
              <p>In no event shall Angella Tendo be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">5. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact me at <a href="mailto:tendo.angella9@gmail.com" className="text-mint hover:underline transition-all">tendo.angella9@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}