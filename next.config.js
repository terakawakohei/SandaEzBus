/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, env: {
    NEXTAUTH_URL: "localhost:3000"
  },
}

module.exports = nextConfig