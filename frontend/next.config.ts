// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
//     domains: ['dummyjson.com'], // add external image domains if needed
//   },

//   experimental: {
//     ...(process.env.NODE_ENV === "development"
//       ? {
//         allowedDevOrigins: ["*"], // allow all origins in dev
//       }
//       : {}),
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
