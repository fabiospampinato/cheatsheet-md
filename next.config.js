
/* IMPORT */

const TsconfigPathsPlugin = require ( 'tsconfig-paths-webpack-plugin' ),
      withSass = require ( '@zeit/next-sass' );

/* CONFIG */

const config = withSass ({
  webpack ( config ) {
    if ( !config.resolve.plugins ) config.resolve.plugins = [];
    config.resolve.plugins.push ( new TsconfigPathsPlugin () );
    return config;
  },
  experimental: {
    publicDirectory: true
  }
});

/* EXPORT */

module.exports = config;
