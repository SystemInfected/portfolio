import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
    qualities: [70, 75, 80],
  },
  trailingSlash: true,
}

export default nextConfig
