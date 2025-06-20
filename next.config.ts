import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Tell Next.js to produce a fully-exportable build
  output: 'export',

  // (optional) ensures every route ends with a slash → generates `about/index.html` not `about.html`
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

export default nextConfig;
