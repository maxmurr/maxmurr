import { ImageResponse } from "next/og"

export const dynamic = "force-dynamic"
export const alt = "Max Murray — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <img
            src="https://github.com/maxmurr.png?size=120"
            alt=""
            width={120}
            height={120}
            style={{ borderRadius: "50%" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#fafafa",
                lineHeight: 1.1,
              }}
            >
              Max Murray
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#a1a1a1",
                marginTop: 8,
              }}
            >
              Software Engineer
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#737373",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          Building fast, maintainable web applications with React, TypeScript,
          and modern web architecture.
        </div>
      </div>
    ),
    { ...size },
  )
}
