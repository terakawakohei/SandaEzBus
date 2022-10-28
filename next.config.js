/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTAUTH_URL:"https://deploy-preview-53--sanda-ez-bus.netlify.app"
  },
}

module.exports = nextConfig
