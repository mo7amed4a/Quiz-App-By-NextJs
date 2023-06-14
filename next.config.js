
/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

// reactStrictMode: true,
// const withPWA = require("next-pwa")({
//   disable: process.env.NODE_ENV === "development",
//   dest: "public",
//   register: true,
//   skipWaiting: false,
//   runtimeCaching,
  
// });
// const nextConfig = withPWA({});

// module.exports = nextConfig;
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  distDir: 'build',
  images : {
    domains : [
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com'
    ]
  }
});
module.exports = nextConfig;