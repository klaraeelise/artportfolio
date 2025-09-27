// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: { forceSwcTransforms: true },
  // optional, to avoid lint blocking builds:
  // eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
