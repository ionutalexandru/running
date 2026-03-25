import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/2016(/?)',
        destination: '/2016/muc-marathon/',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;
