<div align="center">
  <img src="public/angella.jpg" alt="Angella Tendo" width="120" style="border-radius: 50%;" />
  <h1 align="center">Angella Tendo — Portfolio</h1>
  <p align="center">
    <strong>A modern, high-performance portfolio built with Next.js, Tailwind CSS, and Framer Motion.</strong>
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
</div>

---

## 🌟 Overview

This repository contains the source code for my personal portfolio. As a backend developer specializing in Python and Django, I wanted a portfolio that reflects my focus on security, performance, and clean architecture, while still offering a polished, interactive frontend experience.

### ✨ Key Features
- **Interactive API Console:** A live, simulated Django REST Framework endpoint right in the Hero section demonstrating multi-tenant permission logic (Role-Based Access Control).
- **Dynamic Project & Skill Routing:** Clickable cards that open dedicated, dynamic detail pages using Next.js App Router (`/projects/[slug]` and `/skills/[slug]`).
- **Secure Contact Form:** Fully functional contact form using a Next.js Server Action/API route, integrating with **Brevo** for email delivery. Includes honeypot anti-spam, server-side input validation, and XSS sanitization.
- **Smooth Animations:** Scroll reveals, hover lifts, and page transitions powered by **Framer Motion**.
- **Fully Responsive:** Custom mobile slide-out navigation, adaptive grids, and a fixed floating action button (FAB) for quick WhatsApp access and back-to-top scrolling.
- **GDPR Compliant:** Custom Cookie banner that saves user consent to `localStorage`, along with detailed Privacy, Terms, and Cookie Policy pages.
- **SEO & Open Graph:** Automated social share images, metadata, and semantic HTML for perfect search engine visibility.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Delivery:** [Brevo API](https://www.brevo.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Running Locally

If you want to clone this project and run it on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/malaika-org1/angella-portfolio.git
cd angella-portfolio


2. Install dependencies
bash
npm install
3. Set up Environment Variables
Copy the .env.example file to create your local environment file:

bash
cp .env.example .env.local
Open .env.local and add your Brevo API Key. (If you don't have one, the contact form will gracefully fail with a 500 error, but the rest of the site will work perfectly).

4. Start the development server
bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

📂 Project Structure
text
app/
├── api/contact/        # Secure backend route for handling Brevo emails
├── components/         # Reusable UI components (Navbar, Hero, Forms, etc.)
├── contact/            # Dedicated contact page with map & form
├── cookies/            # Cookie Policy (GDPR)
├── privacy/            # Privacy Policy
├── projects/[slug]/    # Dynamic routing for individual project details
├── quote/              # Dedicated "Get a Quote" page
├── skills/[slug]/      # Dynamic routing for individual skill details
├── terms/              # Terms & Conditions
├── data.ts             # Centralized data for projects and skills
├── layout.tsx          # Root layout (fonts, SEO, Navbar, Footer)
└── page.tsx            # Homepage (Hero, Stats, Projects, Skills)
📝 How to Update Content (For Angella)
All the text for projects, skills, and stats is centralized so you don't have to dig through HTML to update it.

To add a new Project:
Open app/data.ts.

Scroll down to the export const projects = [...] array.

Copy an existing project block and paste it at the top, then edit the slug, title, description, and details.

To add a new Skill:
Open app/data.ts.

Scroll down to the export const skillsData = [...] array.

Add a new object with your skill. Note: The icon field maps to a Lucide icon name (e.g., "Server", "Database"). You can view available icons at lucide.dev/icons.

To update personal info (Phone, Location, Email):
Footer: Open app/components/Footer.tsx and update the Get in Touch section.

Contact Page: Open app/contact/page.tsx and update the Get in Touch section.

Floating Buttons: Open app/components/FloatingButtons.tsx and update the whatsappNumber variable with your real number (include country code, no + symbol).

🔒 Security Notes
No API Keys in the Frontend: The Brevo API key is stored securely in Vercel's Environment Variables and only accessed by the Server Route (app/api/contact/route.ts).

Sanitization: All form inputs are sanitized using isomorphic-dompurify before being sent to Brevo to prevent XSS (Cross-Site Scripting) attacks.

Honeypot: A hidden field is used to catch and silently block spam bots.

---

<div align="center">
  <i>Built with ❤️ by Angella Tendo (and mentored by Herman Software Solutions)</i>
</div>