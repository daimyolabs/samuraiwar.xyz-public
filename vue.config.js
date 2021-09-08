module.exports = {
  devServer: {
    disableHostCheck: false
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  lintOnSave: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Samurai War',
    },
  }
}
