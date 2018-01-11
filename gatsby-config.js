var webpack = require('webpack');

exports.modifyWebpackConfig = function(config, stage) {
    if (!config.plugins) config.plugins = [];
    config.plugins.push(
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
    }));
  // edit loaders here
  return config
}

module.exports = {
  siteMetadata: {
    title: `Chainist Blog`,
    author: 'Vignesh'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    }
  ]
}
