import { ImageResponse } from "next/og";

export const revalidate = 86400;
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const imageData = await fetch("https://github.com/maxmurr.png?size=180", {
    next: { revalidate: 86400 },
  }).then((res) => res.arrayBuffer());

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
          src={imageData as unknown as string}
          alt=""
          width={180}
          height={180}
        />
      </div>
    ),
    { ...size },
  );
}
