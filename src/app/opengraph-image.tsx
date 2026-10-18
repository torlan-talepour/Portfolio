import { ImageResponse } from "next/og";
export const alt = "Torlan Talepour — UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f6f5f0",
        padding: "70px",
        color: "#20231f",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>torlan talepour</span>
        <span style={{ color: "#244bda" }}>UI/UX DESIGNER</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
          lineHeight: 1.1,
        }}
      >
        <span>Thoughtful design.</span>
        <span style={{ color: "#244bda" }}>Human experiences.</span>
      </div>
      <div style={{ display: "flex", fontSize: 22 }}>
        Web & mobile interfaces · Selected work
      </div>
    </div>,
    size,
  );
}
