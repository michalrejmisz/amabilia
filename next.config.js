/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_UPLOAD_FOLDER: process.env.STRAPI_UPLOAD_FOLDER,
  },

  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
