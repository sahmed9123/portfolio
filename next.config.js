/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "giphy.com",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
