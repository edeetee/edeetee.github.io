const optimizedImages = require('next-optimized-images');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const nextConfig = {
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
      type: "asset/resource",
    })

    return config
  },
  output: 'export',
  images: {
    unoptimized: true
  },
}

// module.exports = withPlugins([
//   // [optimizedImages, {}]
//   new BundleAnalyzerPlugin({
//     analyzerMode: 'server',
//     analyzerPort: 8989,
//     openAnalyzer: true,
//   })
// ], nextConfig);

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [/* ... */]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}