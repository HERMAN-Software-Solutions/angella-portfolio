import { projects } from "@/app/data";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "@/app/components/PageHero"; // <-- Import

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div>
      {/* NEW PAGE HERO */}
      <PageHero 
        kicker={`${project.company} • ${project.date}`}
        title={project.title}
        description={project.description}
        icon={<Briefcase size={32} />}
        breadcrumbLabel={project.title}
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/#projects" className="inline-flex items-center text-muted hover:text-accent mb-12 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Link>

        <div className="bg-surface border border-line rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">What I did</h2>
          <ul className="space-y-4">
            {project.details.map((detail, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-mint font-bold mt-1">✓</span>
                <span className="text-ink/90">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-mono text-muted uppercase tracking-widest mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-hero text-hero-ink rounded-lg font-mono text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}