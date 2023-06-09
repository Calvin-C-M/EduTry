/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  images: {
    unoptimized: true,
    domains: [
      'gopay.co.id', 'upload.wikimedia.org', 'shopeepay.co.id', 'bankmandiri.co.id', 'bri.co.id', 
      'api.imgbb.com', 'i.ibb.co',
    ],

  }
}

module.exports = nextConfig
