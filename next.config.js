/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  images: {
    domains: ['gopay.co.id', 'upload.wikimedia.org', 'shopeepay.co.id', 'bankmandiri.co.id', 'bri.co.id'],

  }
}

module.exports = nextConfig
