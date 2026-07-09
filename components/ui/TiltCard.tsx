"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  motionProps?: HTMLMotionProps<"div">;
};

export function TiltCard({
  children,
  className = "",
  motionProps,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [supportsTilt, setSupportsTilt] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 18 });
  const shadowX = useTransform(springY, [-15, 15], ["18px", "-18px"]);
  const shadowY = useTransform(springX, [-15, 15], ["18px", "-18px"]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsTilt(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!supportsTilt) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - y) * 14);
    rotateY.set((x - 0.5) * 14);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      {...motionProps}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        boxShadow: `${shadowX} ${shadowY} 40px rgba(0, 0, 0, 0.24)`,
        ...(motionProps?.style ?? {}),
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
