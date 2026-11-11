import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-surface border border-line p-6 rounded-full mb-8 text-mint shadow-[0_0_30px_rgba(110,231,183,0.15)] animate-bounce">
        <Ghost size={48} />
      </div>
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-ink">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-ink">Endpoint not found.</h2>
      <p className="text-muted max-w-md mb-10 leading-relaxed">
        Looks like the API route you are trying to reach doesn't exist, has been moved, or requires different permissions.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 bg-mint text-hero px-8 py-3.5 rounded-lg font-bold text-lg shadow-[0_4px_14px_0_rgba(110,231,183,0.39)] hover:scale-105 active:scale-95 transition-all"
      >
        <ArrowLeft size={20} /> Return to Homepage
      </Link>
    </div>
  );
}