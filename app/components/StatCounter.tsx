"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function StatCounter({ value }: { value: string }) {
  const ref = useRef(null);
  
  // Detects if the element is in the viewport. 
  // margin: "-50px" means it triggers a bit before it fully hits the screen.
  const isInView = useInView(ref, { margin: "-50px" });
  
  // Extract the number from the string (e.g., "6+" becomes 6)
  const targetNumber = parseInt(value.replace(/\D/g, ""), 10);
  // Extract the suffix (e.g., "6+" becomes "+")
  const suffix = value.replace(/[0-9]/g, ""); 
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetNumber, {
        duration: 2, // 2 seconds animation
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    } else {
      // If you want it to reset to 0 when scrolled out of view, keep this.
      // If you want it to stay at the final number, remove this else block.
      setCount(0); 
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={ref} className="block text-4xl font-extrabold text-sun mb-2">
      {count}{suffix}
    </span>
  );
}