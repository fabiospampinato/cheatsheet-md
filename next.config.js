
/* IMPORT */

const OptimizeCSSAssetsPlugin = require ( 'optimize-css-assets-webpack-plugin' ),
      TsconfigPathsPlugin = require ( 'tsconfig-paths-webpack-plugin' ),
      withSass = require ( '@zeit/next-sass' );

/* CONFIG */

const config = withSass ({
  webpack ( config ) {
    if ( !config.resolve.plugins ) config.resolve.plugins = [];
    config.resolve.plugins.push ( new TsconfigPathsPlugin () );
    if ( !config.optimization.minimizer ) config.optimization.minimizer = [];
    config.optimization.minimizer.push ( new OptimizeCSSAssetsPlugin () );
    return config;
  },
  experimental: {
    publicDirectory: true
  }
});

/* EXPORT */

module.exports = config;
