export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-line border-t-mint rounded-full animate-spin mb-6"></div>
      <p className="font-mono text-muted tracking-widest uppercase animate-pulse">Loading data...</p>
    </div>
  );
}