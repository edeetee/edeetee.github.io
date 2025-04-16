const optimizedImages = require('next-optimized-images');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const createMdx = require('@next/mdx');

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

  // images: {
  //   loader: "custom",
  //   // imageSizes: [16, 384],
  // },
  // transpilePackages: ["next-image-export-optimizer"],
  // env: {
  //   nextImageExportOptimizer_imageFolderPath: "public/images",
  //   nextImageExportOptimizer_exportFolderPath: "out",
  //   nextImageExportOptimizer_quality: "75",
  //   nextImageExportOptimizer_storePicturesInWEBP: "true",
  //   nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

  //   // If you do not want to use blurry placeholder images, then you can set
  //   // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
  //   // `placeholder="empty"` to all <ExportedImage> components.
  //   nextImageExportOptimizer_generateAndUseBlurImages: "true",

  //   // If you want to cache the remote images, you can set the time to live of the cache in seconds.
  //   // The default value is 0 seconds.
  //   nextImageExportOptimizer_remoteImageCacheTTL: "0",
  // },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // You can add MDX options here
  }
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  ...nextConfig,
});