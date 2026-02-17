// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: { forceSwcTransforms: true },
  // optional, to avoid lint blocking builds:
  // eslint: { ignoreDuringBuilds: true },
  
  // For Docker hot reload
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
      };
    }
    return config;
  },
};
export default nextConfig;
