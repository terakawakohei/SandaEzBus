/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTAUTH_URL:"https://deploy-preview-87--sanda-ez-bus.netlify.app"
  },
  //↑絶対消せ！！！
}

module.exports = nextConfig