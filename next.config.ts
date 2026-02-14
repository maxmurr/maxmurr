import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      { hostname: "github.com" },
      { hostname: "*.githubusercontent.com" },
      { hostname: "react-grep.com" },
      { hostname: "election68-asset.thaipbs.or.th" },
      { hostname: "*.playboard.cloud" },
      { hostname: "opengraph.githubassets.com" },
    ],
  },
};

export default nextConfig;
