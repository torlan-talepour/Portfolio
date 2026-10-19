import { ImageResponse } from "next/og";
export const alt = "Torlan Talepour — UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "55px 65px",
          background: "#090e17",
          color: "#f5f7fa",
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
          <span>PORTFOLIO</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 100,
            letterSpacing: -5,
            lineHeight: 1.02,
          }}
        >
          <span>UI & UX</span>
          <span style={{ color: "#0eb987", paddingLeft: 0 }}>Designer.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 19,
            borderTop: "1px solid #293340",
            paddingTop: 23,
          }}
        >
          <span>Torlan Talepour</span>
          <span
            style={{
              color: "#061c15",
              background: "#0eb987",
              padding: "3px 12px",
            }}
          >
            Web & mobile interfaces
          </span>
        </div>
      </div>
    ),
    size,
  );
}
