# vue-cli3-mut-pages
### 将vue目录转变成多页面应用

首先history模式限制挺多，能够使用hash模式就使用hash模式
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

在vue-cli3中查看webpack的配置方法：新建一个output.js文件在根目录，然后
```
vue inspect > output.js
```
这样在output文件中就可以查看配置

需要修改webpack的配置的时候，就在vue.config.js中修改，
```
// vue.config.js
module.exports = {
  pages: {
    index: {
      // 页面的入口文件
      entry: "src/pages/index/index.js",
      // 页面的模板文件
      template: "src/public/index.html",
      // build 生成的文件名称  例： dist/index.html
      filename: "index.html"
    },
    // template 默认会去找 public/subpage.html 页面，如果找不到会使用 public/index.html 文件
    // 输出文件会默认的推断为 subpage.html
    subpage: {
      entry: "src/pages/subpage/subpage.js",
      template: "src/public/subpage.html"
    },
    cart: {
      entry: "src/pages/cart/cart.js"
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/index/, to: "/index.html" },
        { from: /\/cart/, to: "/cart.html" },
        { from: /\/subpage/, to: "/subpage.html" }
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        css: "@/public/css",
        js: "@/public/js",
        components: "@/components",
        vue$: 'vue/dist/vue.js'
      }
    }
  }
};

```
需要深入修改，
https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F

在上面的配置中能够发现，我将vue$引用位置改变了，因为老是报错说不应该引用运行时的测试文件
```
You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
```