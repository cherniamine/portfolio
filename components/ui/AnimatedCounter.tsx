"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number; // ms
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1400,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return <span className="font-display font-semibold">{display.toLocaleString("fr-FR")}{suffix}</span>;
}
