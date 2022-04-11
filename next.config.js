const withPlugins = require("next-compose-plugins");
const withNextOptimizedImages = require('next-optimized-images');

module.exports = withNextOptimizedImages([
    {
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

            return config
        }
    }
], {});
