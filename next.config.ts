import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Remova o basePath se estiver tendo problemas
  images: {
    unoptimized: true
  }
}

export default nextConfig