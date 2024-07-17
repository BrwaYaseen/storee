// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "storee-production.up.railway.app",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    // Ignore specific warnings
    config.ignoreWarnings = [
      { module: /node_modules\/payload/ },
      { module: /node_modules\/express/ },
    ];

    // Handle sharp on the server-side
    if (isServer) {
      config.externals.push("sharp");
    }

    return config;
  },
};

export default nextConfig;
