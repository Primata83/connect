import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/connect>',
  assetPrefix: '/<connect>',
};

export default nextConfig;
