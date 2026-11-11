"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";

export default function PrivacyPage() {
  return (
    <div>
      <PageHero 
        kicker="Legal"
        title="Privacy Policy"
        description="How I collect, use, and protect your information."
        icon={<ShieldCheck size={32} />}
        breadcrumbLabel="Privacy Policy"
      />

      <div className="max-w-4xl mx-auto px-6 py-20 min-h-screen">
        <Link href="/" className="inline-flex items-center text-muted hover:text-mint mb-12 transition-colors font-mono text-sm group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="bg-surface border border-line rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="space-y-8 text-ink/80 leading-relaxed">
            <p className="text-muted font-mono text-sm border-b border-line pb-4">Last updated: November 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">1. Information Collection</h2>
              <p>When you use the contact form on this website, you provide me with your name, email address, and a message. This information is transmitted securely and is used solely for the purpose of responding to your inquiry. I do not collect any sensitive personal data.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">2. How I Use Your Information</h2>
              <p>I do not sell, rent, or trade your personal information with third parties. Your email is used only to reply to your message. To deliver these messages, I use a secure third-party email service provider (Brevo), which processes the data in accordance with their own privacy policies.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">3. Data Security</h2>
              <p>I implement industry-standard security measures (including data sanitization and secure API routing) to protect the information submitted through the contact form against unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">4. Cookies & Local Storage</h2>
              <p className="mb-3">This website uses minimal, functional local storage to enhance your experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent Tracking:</strong> When you accept or decline the cookie banner, a small item is saved in your browser's <code>localStorage</code> (not a traditional tracking cookie) so the banner does not reappear on every page load.</li>
                <li><strong>No Third-Party Tracking:</strong> This site does not use invasive third-party tracking cookies, advertising pixels, or cross-site trackers.</li>
                <li><strong>Interactive Tools:</strong> The API console on the homepage runs entirely in your browser using fictional data and does not transmit any information to a server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">5. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of any personal data you have submitted via the contact form. You can also clear your browser's local storage at any time to reset your cookie preferences. To exercise these rights, please contact me.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">6. Contact</h2>
              <p>If you have any questions about this Privacy Policy, please contact me at <a href="mailto:tendo.angella9@gmail.com" className="text-mint hover:underline transition-all">tendo.angella9@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}