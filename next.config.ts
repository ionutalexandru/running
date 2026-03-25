import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/2025(/?)',
        destination: '/2025/muc-marathon/',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;
