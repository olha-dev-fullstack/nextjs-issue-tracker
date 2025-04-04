/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghiblicollection.com",
      },
    ],
  },
};

module.exports = nextConfig;
