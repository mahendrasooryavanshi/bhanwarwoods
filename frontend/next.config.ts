/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: 'src/app', // 👈 tells Next.js where your app directory is
  },
};

module.exports = nextConfig;
