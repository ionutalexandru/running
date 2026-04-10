import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/2025(/?)',
        destination: '/2025/muc-marathon/',
        permanent: false,
      },
      {
        source: '/2026/spotify(/?)',
        destination:
          'https://open.spotify.com/playlist/2eFgrR6JKTn5YoD7JE8KQo?si=db862cf6c6ae4488&pt=4d97eb66c049387a6a9900fadb6b7933',
        permanent: true,
      },
      {
        source: '/live(/?)',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
