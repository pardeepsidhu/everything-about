/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.everythingtalent.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c0.wallpaperflare.com", // Add iStockPhoto if needed
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
