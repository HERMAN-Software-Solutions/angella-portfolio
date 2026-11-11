import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ currentPage }: { currentPage: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm font-mono text-hero-muted mb-6 justify-center">
      <Link href="/" className="hover:text-mint transition-colors">
        Home
      </Link>
      
      <ChevronRight size={14} className="mx-2 opacity-50" />
      
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-mint"></span>
        <span className="text-sun font-bold">{currentPage}</span>
      </div>
    </nav>
  );
}