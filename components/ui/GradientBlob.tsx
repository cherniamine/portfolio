type GradientBlobProps = {
  className?: string;
  color?: "accent" | "cyan";
  slow?: boolean;
};

export default function GradientBlob({
  className = "",
  color = "accent",
  slow = false,
}: GradientBlobProps) {
  const bg = color === "accent" ? "bg-accent" : "bg-cyan";
  const anim = slow ? "animate-blob-slow" : "animate-blob";

  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${bg} ${anim} ${className}`}
    />
  );
}
