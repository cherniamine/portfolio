type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "success";
};

export default function Badge({ children, tone = "default" }: BadgeProps) {
  const toneClasses =
    tone === "success"
      ? "bg-emerald-500/10 text-emerald-400"
      : "bg-accent-soft text-accent";

  return (
    <span
      className={`font-mono text-[0.7rem] px-2.5 py-1 rounded-md ${toneClasses}`}
    >
      {children}
    </span>
  );
}
