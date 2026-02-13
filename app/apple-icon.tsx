import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src="https://github.com/maxmurr.png?size=180"
          alt=""
          width={180}
          height={180}
        />
      </div>
    ),
    { ...size },
  );
}
