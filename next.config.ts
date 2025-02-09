import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Allows deployment even if ESLint errors exist
  },
};

export default nextConfig;
