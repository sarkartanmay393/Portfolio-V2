// next.config.js
module.exports = {
  // devIndicators: {
  //   autoPrerender: false,
  // },
  // experimental: {
  //   fontLoaders: [{ loader: "@next/font" }],
  // },
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
