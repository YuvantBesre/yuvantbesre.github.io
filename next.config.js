/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "www.medikabazaar.ae" },
      { protocol: "https", hostname: "business.krishify.com" },
    ],
  },
};

module.exports = nextConfig;
