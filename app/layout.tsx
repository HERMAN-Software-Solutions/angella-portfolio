import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import FloatingButtons from "./components/FloatingButtons";
import MobileNav from "./components/MobileNav"; 
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://angella-portfolio.vercel.app'), // <-- Add this line
  title: {
    default: "Angella Tendo | Backend Developer",
    template: "%s | Angella Tendo" // This appends her name to inner page titles
  },
  description: "Backend developer who builds, tests and secures Django REST APIs. Open to remote work.",
  keywords: ["Backend Developer", "Django Developer", "Python Developer", "REST API", "Kampala", "Uganda", "Remote Developer"],
  authors: [{ name: "Angella Tendo" }],
  creator: "Angella Tendo",
  openGraph: {
    title: "Angella Tendo | Backend Developer",
    description: "Backend developer who builds, tests and secures Django REST APIs.",
    url: "https://angella-portfolio.vercel.app",
    siteName: "Angella Tendo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angella Tendo | Backend Developer",
    description: "Backend developer who builds, tests and secures Django REST APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <header className="w-full bg-hero/90 backdrop-blur-md text-hero-ink py-5 px-6 sticky top-0 z-50 border-b border-hero-ink/10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
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
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center font-medium text-sm">
              {[
                { name: "What I do", href: "/#help" },
                { name: "Projects", href: "/#projects" },
                { name: "Skills", href: "/#skills" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative group py-2 text-hero-ink/80 hover:text-mint transition-colors duration-300"
                >
                  {link.name}
                  {/* The animated underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-mint transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

               {/* NEW GET A QUOTE BUTTON */}
              <Link 
                href="/quote" 
                className="bg-[#FF5A1F] text-white px-5 py-2.5 rounded-full font-bold ml-4 shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#FF7A45] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Nav (Hamburger) */}
            <MobileNav /> 
            
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <CookieBanner />
        <FloatingButtons />
      </body>
    </html>
  );
}