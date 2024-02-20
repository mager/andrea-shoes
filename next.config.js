/** @type {import('next').NextConfig} */
module.exports = {
  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.assets.so",
      },
    ],
  },
};
