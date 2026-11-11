"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApiConsole() {
  const [user, setUser] = useState<"a" | "b" | "x">("a");
  const [req, setReq] = useState<"list" | "a102" | "b201">("list");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [response, setResponse] = useState<any>({});
  const [why, setWhy] = useState("Choose a person and a request, then press Send.");

  const handleSend = () => {
    setStatus("loading");
    setTimeout(() => {
      let code, data, reason;
      
      if (req === "list") {
        if (user === "x") {
          code = 403;
          data = { detail: "You do not have permission to perform this action." };
          reason = "Outside clients are not allowed to read internal invoices at all.";
        } else {
          code = 200;
          data = { count: 2, results: [{ id: user === "a" ? 101 : 201, amount: 1200000 }] };
          reason = "Each admin gets only their own organization’s invoices.";
        }
      } else {
        const targetOrg = req === "a102" ? "A" : "B";
        const targetId = req === "a102" ? 102 : 201;
        
        if (user === "x") {
          code = 403;
          data = { detail: "You do not have permission to perform this action." };
          reason = "Payment approval is internal only.";
        } else if ((user === "a" && targetOrg === "B") || (user === "b" && targetOrg === "A")) {
          code = 404;
          data = { detail: "Not found." };
          reason = "This invoice belongs to another organization. The API says 'not found'.";
        } else {
          code = 200;
          data = { id: targetId, status: "approved" };
          reason = "An admin approving an invoice from their own organization is the one case that works.";
        }
      }

      setResponse(data);
      setWhy(reason);
      setStatus(code === 200 ? "success" : "error");
    }, 500); 
  };

  const updateSelection = (type: "user" | "req", value: string) => {
    if (type === "user") setUser(value as any);
    if (type === "req") setReq(value as any);
    setStatus("idle");
    setResponse({});
    setWhy("Press Send to try the new selection.");
  };

  const url = req === "list" ? "/api/invoices/" : `/api/invoices/${req === "a102" ? 102 : 201}/approve/`;
  const method = req === "list" ? "GET" : "POST";

  return (
    <div className="bg-panel border border-panel-line rounded-xl p-6 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-panel-line/50">
        <div className="w-3 h-3 rounded-full bg-panel-line"></div>
        <div className="w-3 h-3 rounded-full bg-panel-line"></div>
        <div className="w-3 h-3 rounded-full bg-panel-line"></div>
        <span className="ml-2 font-mono text-xs text-hero-muted">Try the permission rules (made-up data)</span>
      </div>

      <p className="font-mono text-xs text-hero-muted uppercase tracking-widest mb-2">Who is asking?</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "a", label: "Admin, Lakeview" },
          { id: "b", label: "Admin, Kololo" },
          { id: "x", label: "Outside client" },
        ].map((u) => (
          <motion.button
            key={u.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateSelection("user", u.id)}
            className={`relative px-3 py-1.5 rounded-md font-mono text-xs transition-colors border ${
              user === u.id 
                ? "border-mint text-hero font-bold z-10" 
                : "border-panel-line text-hero-muted hover:text-hero-ink hover:border-hero-muted bg-panel/50"
            }`}
          >
            {/* The sliding background pill for active state */}
            {user === u.id && (
              <motion.div
                layoutId="activeUser"
                className="absolute inset-0 bg-mint rounded-md -z-10 shadow-[0_0_12px_rgba(110,231,183,0.4)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {u.label}
          </motion.button>
        ))}
      </div>

      <p className="font-mono text-xs text-hero-muted uppercase tracking-widest mb-2">What do they ask for?</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "list", label: "List invoices" },
          { id: "a102", label: "Approve #102 (Lakeview)" },
          { id: "b201", label: "Approve #201 (Kololo)" },
        ].map((r) => (
          <motion.button
            key={r.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => updateSelection("req", r.id)}
            className={`relative px-3 py-1.5 rounded-md font-mono text-xs transition-colors border ${
              req === r.id 
                ? "border-mint text-hero font-bold z-10" 
                : "border-panel-line text-hero-muted hover:text-hero-ink hover:border-hero-muted bg-panel/50"
            }`}
          >
            {/* The sliding background pill for active state */}
            {req === r.id && (
              <motion.div
                layoutId="activeReq"
                className="absolute inset-0 bg-mint rounded-md -z-10 shadow-[0_0_12px_rgba(110,231,183,0.4)]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {r.label}
          </motion.button>
        ))}
      </div>

      {/* URL Bar */}
      <div className="flex gap-2 items-stretch mb-4">
        <span className={`font-mono text-xs px-3 py-2 rounded-md flex items-center font-bold ${method === "GET" ? "bg-mint/15 text-mint" : "bg-accent/20 text-accent"}`}>
          {method}
        </span>
        <div className="flex-1 font-mono text-xs px-3 py-2 rounded-md bg-black/40 text-hero-ink flex items-center overflow-hidden border border-panel-line/50">
          <span className="truncate">{url}</span>
        </div>
        
        {/* Send Button */}
        <motion.button
          whileHover={status !== "loading" ? { scale: 1.05 } : {}}
          whileTap={status !== "loading" ? { scale: 0.92 } : {}} 
          onClick={handleSend}
          disabled={status === "loading"}
          className="bg-mint text-hero px-6 rounded-md font-bold text-sm hover:brightness-110 transition-colors disabled:opacity-50 shadow-[0_0_15px_rgba(110,231,183,0.3)]"
        >
          {status === "loading" ? "Wait..." : "Send"}
        </motion.button>
      </div>

      {/* Response Area */}
      <div className="mt-4 bg-black/20 rounded-lg p-4 font-mono text-sm relative min-h-[160px] border border-panel-line/30">
        <AnimatePresence mode="wait">
          {status === "loading" ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-hero-muted flex items-center gap-2">
              <span className="animate-pulse">●</span> Sending request...
            </motion.div>
          ) : status !== "idle" ? (
            <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <span className={`inline-block px-2 py-1 rounded text-xs mb-3 font-bold ${status === "success" ? "bg-mint/20 text-mint" : "bg-coral/20 text-coral"}`}>
                {status === "success" ? "200 OK" : "403 / 404 ERROR"}
              </span>
              <pre className="text-hero-ink overflow-x-auto text-xs">{JSON.stringify(response, null, 2)}</pre>
              <p className="text-hero-muted text-xs mt-4 leading-relaxed border-t border-panel-line/50 pt-3">{why}</p>
            </motion.div>
          ) : (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-hero-muted/50">
              {`{ }`}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}