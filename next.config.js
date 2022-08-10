/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // NEXTAUTH_URL: "https://deploy-preview-53--spiffy-dolphin-ef62d9.netlify.app",
    USER_EMAIL:"admin",
    USER_PASSWORD:"1234",
    NEXTAUTH_SECRET:"2aTMoyJqkjReB5Y7JgX8VGk+GSHaeEClSSF1nrGfktE="
  },
}

module.exports = nextConfig
