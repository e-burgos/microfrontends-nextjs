/** @type {import('next').NextConfig} */
const {
  withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: false },
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "mf-app1",
      library: {
        type: config.output.libraryTarget,
        name: "mf-app1",
      },
      filename: "static/runtime/mf-app1RemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./Yoda": "./components/Yoda",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = "https://eburgos-mf-app1.vercel.app/_next/";
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
}
