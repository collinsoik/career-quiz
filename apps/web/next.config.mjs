/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@pathfinder/shared"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
