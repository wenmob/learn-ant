module.exports = {
  lintOnSave: false,
  devServer: {
    open: true
  },
  // 解决热更新不及时的问题
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
};
