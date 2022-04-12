const withPlugins = require("next-compose-plugins");
const optimizedImages = require('next-optimized-images');

const nextConfig =   {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        'raw-loader',
        'glslify-loader'
      ]
    })

    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource"
    })

    config.module.rules.push({
      test: /\.(webp)$/,
      type: "asset/resource"
    })

    return config
  },
  images: {
    disableStaticImages: true,
  },
}

module.exports = withPlugins([
  // [optimizedImages, {}]
], nextConfig);