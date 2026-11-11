"use client";

import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import PageHero from "../components/PageHero";

export default function CookiePolicyPage() {
  return (
    <div>
      <PageHero 
        kicker="Legal"
        title="Cookie Policy"
        description="Understanding how and why this site uses local storage."
        icon={<Cookie size={32} />}
        breadcrumbLabel="Cookie Policy"
      />

      <div className="max-w-4xl mx-auto px-6 py-20 min-h-screen">
        <Link href="/" className="inline-flex items-center text-muted hover:text-mint mb-12 transition-colors font-mono text-sm group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="bg-surface border border-line rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="space-y-8 text-ink/80 leading-relaxed">
            <p className="text-muted font-mono text-sm border-b border-line pb-4">Last updated: November 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">1. What are cookies?</h2>
              <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">2. How I use cookies</h2>
              <p className="mb-3">This portfolio uses minimal, essential cookies and local storage. Specifically:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Local Storage for Consent:</strong> When you click "Accept" or "Decline" on the cookie banner, your choice is saved in your browser's <code>localStorage</code> so you don't see the banner on every single page load.</li>
                <li><strong>Analytics (Optional):</strong> If you accept cookies, I may use privacy-focused analytics to understand how many people visit the site and which projects they look at most.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">3. How to manage cookies</h2>
              <p>You can choose to decline cookies using the banner on your first visit. You can also clear your browser's cache and local storage at any time to reset your choices, or configure your browser to block cookies entirely.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">4. Contact</h2>
              <p>If you have any questions about this Cookie Policy, please contact me at <a href="mailto:tendo.angella9@gmail.com" className="text-mint hover:underline">tendo.angella9@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}