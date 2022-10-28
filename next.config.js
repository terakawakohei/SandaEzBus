/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTAUTH_URL:"https://deploy-preview-53--spiffy-dolphin-ef62d9.netlify.app"
  },
}

module.exports = nextConfig
