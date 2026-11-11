import { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({ 
  title, 
  description, 
  kicker, 
  icon,
  breadcrumbLabel,

}: { 
  title: string; 
  description: string; 
  kicker: string; 
  icon?: ReactNode 
  breadcrumbLabel: string;
}) {
  return (
    <section className="bg-[#111A3F] border-b border-white/5 relative overflow-hidden pt-24 pb-20 px-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Add Breadcrumbs here */}
        <Breadcrumbs currentPage={breadcrumbLabel} />
        
        {icon && (
          <div className="inline-flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl mb-6 text-mint shadow-lg backdrop-blur-sm">
            {icon}
          </div>
        )}
        <p className="font-mono text-mint text-sm tracking-widest uppercase mb-3">{kicker}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{title}</h1>
        <p className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>
    </section>
  );
}