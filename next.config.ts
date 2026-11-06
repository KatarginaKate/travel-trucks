import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ac.goit.global" }],
  },
};

export default nextConfig;
