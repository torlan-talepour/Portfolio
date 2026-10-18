import { ImageResponse } from "next/og";
export const alt = "Torlan Talepour — UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "55px 65px",
        background: "#f5f3ed",
        color: "#17191c",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          letterSpacing: 2,
        }}
      >
        <span>UI/UX DESIGNER</span>
        <span>SELECTED EXPLORATIONS</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 130,
          letterSpacing: -9,
          lineHeight: 1.02,
        }}
      >
        <span>Torlan</span>
        <span style={{ color: "#3656e8", paddingLeft: 150 }}>Talepour.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 19,
          borderTop: "1px solid #d5d5ce",
          paddingTop: 23,
        }}
      >
        <span>Curiosity. Craft. Clarity.</span>
        <span style={{ background: "#ddf58a", padding: "3px 12px" }}>
          A personal design space ↗
        </span>
      </div>
    </div>,
    size,
  );
}
