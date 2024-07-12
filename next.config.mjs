// @type {import('next').NextConfig}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
        port: "3000",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    // Handle require.extensions issue
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/payload/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      ],
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
