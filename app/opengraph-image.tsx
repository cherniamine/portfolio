import { ImageResponse } from "next/og";

export const alt = "Cherni Mohamed Amine - Ingénieur Data Science & IA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #12111c 52%, #1b2030 100%)",
          color: "#e4e4ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                borderRadius: 999,
                backgroundColor: "rgba(124, 92, 255, 0.16)",
                color: "#c9bbff",
                fontSize: 24,
                letterSpacing: 1,
              }}
            >
              Portfolio
            </div>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
              Cherni Mohamed Amine
            </div>
            <div style={{ fontSize: 34, color: "#43d0ff" }}>
              Ingénieur Data Science & IA
            </div>
          </div>

          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 32,
              background:
                "radial-gradient(circle at 30% 30%, rgba(67,208,255,0.35), transparent 45%), radial-gradient(circle at 70% 20%, rgba(124,92,255,0.35), transparent 40%), rgba(18,18,26,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {["AIOps", "RAG", "FastAPI", "Angular", "Azure", "Data"].map((item) => (
            <div
              key={item}
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.04)",
                fontSize: 24,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
