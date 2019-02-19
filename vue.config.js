// vue.config.js
module.exports = {
  pages: {
    index: {
      // 页面的入口文件
      entry: 'src/index/index.js',
      // 页面的模板文件
      template: 'public/index.html',
      // build 生成的文件名称  例： dist/index.html
      filename: 'index.html'
    },
    // template 默认会去找 public/subpage.html 页面，如果找不到会使用 public/index.html 文件
    // 输出文件会默认的推断为 subpage.html
    subpage: {
      entry: 'src/subpage/subpage.js',
      template: 'public/subpage.html',
    },
    cart: {
      entry: 'src/cart/cart.js',
    },
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' },
        { from: /\/cart/, to: '/subpage.html' },
        { from: /\/subpage/, to: '/subpage.html' }
      ]
    }
  }
}