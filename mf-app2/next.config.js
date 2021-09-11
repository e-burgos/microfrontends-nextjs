/** @type {import('next').NextConfig} */
const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: false },
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "mf-app2",
      library: {
        type: config.output.libraryTarget,
        name: "mf-app2",
      },
      filename: "static/runtime/mf-app2RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./DarthVader": "./components/DarthVader",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://eburgos-mf-app2.vercel.app/_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
}
