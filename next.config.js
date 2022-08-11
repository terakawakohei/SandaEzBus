/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
    USER_ID:"admin",
    USER_PASSWORD:"1234",
    NEXTAUTH_SECRET:"2aTMoyJqkjReB5Y7JgX8VGk+GSHaeEClSSF1nrGfktE="
  },
}

module.exports = nextConfig
