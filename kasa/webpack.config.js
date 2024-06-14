// webpack.config.js
module.exports = {
    // Autres configurations Webpack
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        // Autres règles pour le traitement d'autres types de fichiers
      ],
    },
  };