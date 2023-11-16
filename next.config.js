/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
  },
  trailingSlash: true,
}

module.exports = nextConfig
