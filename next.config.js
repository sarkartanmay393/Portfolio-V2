// next.config.js
module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
