import { skillsData } from "../../data";
import Link from "next/link";
import { ArrowLeft, Server, Database, Network, CheckCircle, Shield, Lock, Layout, Paintbrush, Monitor, GitBranch, FileText, Cpu } from "lucide-react";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero"; // <-- Import

const iconMap: Record<string, any> = { Server, Database, Network, CheckCircle, Shield, Lock, Layout, Paintbrush, Monitor, GitBranch, FileText, Cpu };

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = skillsData.find((s) => s.slug === slug);

  if (!skill) notFound();

  return (
    <div>
      {/* NEW PAGE HERO */}
      <PageHero 
        kicker="Skills"
        title={skill.title}
        description={skill.description}
        icon={<Cpu size={32} />}
        breadcrumbLabel={skill.title}
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/#skills" className="inline-flex items-center text-muted hover:text-accent mb-12 transition-colors font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" /> Back to Skills
        </Link>

        <div className="grid gap-6">
          {skill.details.map((detail, i) => {
            const IconComponent = iconMap[detail.icon];
            return (
              <div key={i} className="bg-surface border border-line rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:border-mint/50 transition-colors shadow-sm">
                <div className="bg-hero text-mint p-4 rounded-xl shrink-0">
                  <IconComponent size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{detail.title}</h2>
                  <p className="text-muted text-lg leading-relaxed">{detail.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}