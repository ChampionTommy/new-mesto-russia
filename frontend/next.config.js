/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        port: "1337",
        hostname: "localhost",
      },
    ],
    minimumCacheTTL: 15000000,
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
