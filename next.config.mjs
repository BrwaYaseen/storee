// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "storee-production.up.railway.app"],
    unoptimized: process.env.NODE_ENV === "production",
  },
  experimental: {
    webpackBuildWorker: true,
  },
  webpack: (config, { isServer }) => {
    // Handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    // Ignore specific warnings
    config.ignoreWarnings = [
      {
        message:
          /Critical dependency: the request of a dependency is an expression/,
      },
    ];

    // Handle sharp on the server-side
    if (isServer) {
      config.externals.push("sharp");
    }

    // Disable cache to address serialization issues
    config.cache = false;

    return config;
  },
};

export default nextConfig;
