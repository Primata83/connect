import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/connect', // Nome do seu repositório
  images: {
    unoptimized: true
  }
}

export default nextConfig