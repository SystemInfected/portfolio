import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
  },
  trailingSlash: true,
}

export default nextConfig
