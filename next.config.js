const optimizedImages = require('next-optimized-images');
const withCss = require("@zeit/next-css");
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      withCss, {
        cssModules: true,
      }
    ],
    withImages,
    [optimizedImages, {
      optimizeImages: true,
      optimizeImagesInDev: true,
      svgo: {
        plugins: [
          { removeComments: false }
        ]
      }
    }],
  ],
  {
    webpack: (config) => {
      config.node = {
        fs: 'empty'
      };

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    }
  },
);

module.exports = withCss({
  cssModules: true,
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
});
