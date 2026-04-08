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
    ];
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
