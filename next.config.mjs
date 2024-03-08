/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.coingecko.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
