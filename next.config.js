const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  swcMinify: true,
  images : {
    domains : ['localhost']
  },
  webpack: (
    config
  ) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader'
    });

    config.plugins.push(new SpriteLoaderPlugin());

    return config;
  }
};

module.exports = nextConfig;
