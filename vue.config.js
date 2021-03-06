module.exports = {
  devServer: {
    overlay: false,
  },
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['postcss-loader'],
        },
      ],
    },
  },
};
