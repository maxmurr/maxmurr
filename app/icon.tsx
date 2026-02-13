import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          src="https://github.com/maxmurr.png?size=32"
          alt=""
          width={32}
          height={32}
        />
      </div>
    ),
    { ...size },
  );
}
