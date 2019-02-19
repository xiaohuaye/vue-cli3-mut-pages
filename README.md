# vue-cli3-mut-pages
### 将vue目录转变成多页面应用
```
module.exports = {
  pages: {
    index: {
      entry: 'src/entry-point/index/main.js', //entry for the public page
      template: 'public/index.html', // source template
      filename: 'index.html' // output as dist/*
    },
    signin: {
      entry: 'src/entry-point/signin/main.js',
      template: 'public/signin.html',
      filename: 'signin.html'
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: '/index.html' },
        { from: /\/signin/, to: '/signin.html' }
      ]
    }
  }
}
```
注意，history需要devServer，hash是不需要的
然后运行一下vue inspect
再yarn serve