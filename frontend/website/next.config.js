const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["i.imgur.com"],
  },

  env: {
    DEV_API_URL: "http://localhost:3001",
    PRODUCTION_API_URL: "https://zhaohyan22-api.vercel.app",
  },

  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },

  webpack: (config) => {
    /* https://github.com/leerob/leerob.io/blob/main/next.config.js */

    // Object.assign(config.resolve.alias, {
    //   react: 'preact/compat',
    //   'react-dom/test-utils': 'preact/test-utils',
    //   'react-dom': 'preact/compat'
    // });

    return config;
  },

  swcMinify: true,
});
