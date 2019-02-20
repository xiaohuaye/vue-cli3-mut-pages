// {
//   mode: 'development',
//   context: '/home/zl/github/youzan',
//   devtool: 'cheap-module-eval-source-map',
//   node: {
//     setImmediate: false,
//     process: 'mock',
//     dgram: 'empty',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty',
//     child_process: 'empty'
//   },
//   output: {
//     path: '/home/zl/github/youzan/dist',
//     filename: '[name].js',
//     publicPath: '/',
//     globalObject: 'this'
//   },
//   resolve: {
//     alias: {
//       '@': '/home/zl/github/youzan/src',
//       vue$: 'vue/dist/vue.runtime.esm.js',
//       css: '@/public/css',
//       js: '@/public/js',
//       components: '@/components'
//     },
//     extensions: [
//       '.mjs',
//       '.js',
//       '.jsx',
//       '.vue',
//       '.json',
//       '.wasm'
//     ],
//     modules: [
//       'node_modules',
//       '/home/zl/github/youzan/node_modules',
//       '/home/zl/github/youzan/node_modules/@vue/cli-service/node_modules'
//     ]
//   },
//   resolveLoader: {
//     modules: [
//       '/home/zl/github/youzan/node_modules/@vue/cli-plugin-eslint/node_modules',
//       '/home/zl/github/youzan/node_modules/@vue/cli-plugin-babel/node_modules',
//       'node_modules',
//       '/home/zl/github/youzan/node_modules',
//       '/home/zl/github/youzan/node_modules/@vue/cli-service/node_modules'
//     ]
//   },
//   module: {
//     noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
//     rules: [
//       /* config.module.rule('vue') */
//       {
//         test: /\.vue$/,
//         use: [
//           {
//             loader: 'cache-loader',
//             options: {
//               cacheDirectory: '/home/zl/github/youzan/node_modules/.cache/vue-loader',
//               cacheIdentifier: '5b75dbee'
//             }
//           },
//           {
//             loader: 'vue-loader',
//             options: {
//               compilerOptions: {
//                 preserveWhitespace: false
//               },
//               cacheDirectory: '/home/zl/github/youzan/node_modules/.cache/vue-loader',
//               cacheIdentifier: '5b75dbee'
//             }
//           }
//         ]
//       },
//       /* config.module.rule('images') */
//       {
//         test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: 'file-loader',
//                 options: {
//                   name: 'img/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('svg') */
//       {
//         test: /\.(svg)(\?.*)?$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'img/[name].[hash:8].[ext]'
//             }
//           }
//         ]
//       },
//       /* config.module.rule('media') */
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: 'file-loader',
//                 options: {
//                   name: 'media/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('fonts') */
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: {
//                 loader: 'file-loader',
//                 options: {
//                   name: 'fonts/[name].[hash:8].[ext]'
//                 }
//               }
//             }
//           }
//         ]
//       },
//       /* config.module.rule('pug') */
//       {
//         test: /\.pug$/,
//         use: [
//           {
//             loader: 'pug-plain-loader'
//           }
//         ]
//       },
//       /* config.module.rule('css') */
//       {
//         test: /\.css$/,
//         oneOf: [
//           /* config.module.rule('css').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('css').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('postcss') */
//       {
//         test: /\.p(ost)?css$/,
//         oneOf: [
//           /* config.module.rule('postcss').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('postcss').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('scss') */
//       {
//         test: /\.scss$/,
//         oneOf: [
//           /* config.module.rule('scss').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('scss').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('sass') */
//       {
//         test: /\.sass$/,
//         oneOf: [
//           /* config.module.rule('sass').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('sass').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: false,
//                   indentedSyntax: true
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('less') */
//       {
//         test: /\.less$/,
//         oneOf: [
//           /* config.module.rule('less').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('less').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'less-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('stylus') */
//       {
//         test: /\.styl(us)?$/,
//         oneOf: [
//           /* config.module.rule('stylus').oneOf('vue-modules') */
//           {
//             resourceQuery: /module/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').oneOf('vue') */
//           {
//             resourceQuery: /\?vue/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').oneOf('normal-modules') */
//           {
//             test: /\.module\.\w+$/,
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2,
//                   modules: true,
//                   localIdentName: '[name]_[local]_[hash:base64:5]'
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           },
//           /* config.module.rule('stylus').oneOf('normal') */
//           {
//             use: [
//               {
//                 loader: 'vue-style-loader',
//                 options: {
//                   sourceMap: false,
//                   shadowMode: false
//                 }
//               },
//               {
//                 loader: 'css-loader',
//                 options: {
//                   sourceMap: false,
//                   importLoaders: 2
//                 }
//               },
//               {
//                 loader: 'postcss-loader',
//                 options: {
//                   sourceMap: false
//                 }
//               },
//               {
//                 loader: 'stylus-loader',
//                 options: {
//                   sourceMap: false,
//                   preferPathResolver: 'webpack'
//                 }
//               }
//             ]
//           }
//         ]
//       },
//       /* config.module.rule('js') */
//       {
//         test: /\.jsx?$/,
//         exclude: [
//           function () { /* omitted long function */ }
//         ],
//         use: [
//           {
//             loader: 'cache-loader',
//             options: {
//               cacheDirectory: '/home/zl/github/youzan/node_modules/.cache/babel-loader',
//               cacheIdentifier: '4947b36a'
//             }
//           },
//           {
//             loader: 'babel-loader'
//           }
//         ]
//       },
//       /* config.module.rule('eslint') */
//       {
//         enforce: 'pre',
//         test: /\.(vue|(j|t)sx?)$/,
//         exclude: [
//           /node_modules/,
//           '/home/zl/github/youzan/node_modules/@vue/cli-service/lib'
//         ],
//         use: [
//           {
//             loader: 'eslint-loader',
//             options: {
//               extensions: [
//                 '.js',
//                 '.jsx',
//                 '.vue'
//               ],
//               cache: true,
//               cacheIdentifier: '3065e420',
//               emitWarning: true,
//               emitError: false,
//               eslintPath: '/home/zl/github/youzan/node_modules/eslint/lib/api.js',
//               formatter: function () { /* omitted long function */ }
//             }
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     /* config.plugin('vue-loader') */
//     new VueLoaderPlugin(),
//     /* config.plugin('define') */
//     new DefinePlugin(
//       {
//         'process.env': {
//           NODE_ENV: '"development"',
//           BASE_URL: '"/"'
//         }
//       }
//     ),
//     /* config.plugin('case-sensitive-paths') */
//     new CaseSensitivePathsPlugin(),
//     /* config.plugin('friendly-errors') */
//     new FriendlyErrorsWebpackPlugin(
//       {
//         additionalTransformers: [
//           function () { /* omitted long function */ }
//         ],
//         additionalFormatters: [
//           function () { /* omitted long function */ }
//         ]
//       }
//     ),
//     /* config.plugin('hmr') */
//     new HotModuleReplacementPlugin(),
//     /* config.plugin('progress') */
//     new ProgressPlugin(),
//     /* config.plugin('html-index') */
//     new HtmlWebpackPlugin(
//       {
//         templateParameters: function () { /* omitted long function */ },
//         chunks: [
//           'chunk-vendors',
//           'chunk-common',
//           'index'
//         ],
//         template: 'src/public/index.html',
//         filename: 'index.html'
//       }
//     ),
//     /* config.plugin('html-subpage') */
//     new HtmlWebpackPlugin(
//       {
//         templateParameters: function () { /* omitted long function */ },
//         chunks: [
//           'chunk-vendors',
//           'chunk-common',
//           'subpage'
//         ],
//         template: 'src/public/subpage.html',
//         filename: 'subpage.html'
//       }
//     ),
//     /* config.plugin('html-cart') */
//     new HtmlWebpackPlugin(
//       {
//         templateParameters: function () { /* omitted long function */ },
//         chunks: [
//           'chunk-vendors',
//           'chunk-common',
//           'cart'
//         ],
//         template: '/home/zl/github/youzan/node_modules/@vue/cli-service/lib/config/index-default.html',
//         filename: 'cart.html'
//       }
//     ),
//     /* config.plugin('preload-index') */
//     new PreloadPlugin(
//       {
//         rel: 'preload',
//         includeHtmlNames: [
//           'index.html'
//         ],
//         include: {
//           type: 'initial',
//           entries: [
//             'index'
//           ]
//         },
//         fileBlacklist: [
//           /\.map$/,
//           /hot-update\.js$/
//         ]
//       }
//     ),
//     /* config.plugin('prefetch-index') */
//     new PreloadPlugin(
//       {
//         rel: 'prefetch',
//         includeHtmlNames: [
//           'index.html'
//         ],
//         include: {
//           type: 'asyncChunks',
//           entries: [
//             'index'
//           ]
//         }
//       }
//     ),
//     /* config.plugin('preload-subpage') */
//     new PreloadPlugin(
//       {
//         rel: 'preload',
//         includeHtmlNames: [
//           'subpage.html'
//         ],
//         include: {
//           type: 'initial',
//           entries: [
//             'subpage'
//           ]
//         },
//         fileBlacklist: [
//           /\.map$/,
//           /hot-update\.js$/
//         ]
//       }
//     ),
//     /* config.plugin('prefetch-subpage') */
//     new PreloadPlugin(
//       {
//         rel: 'prefetch',
//         includeHtmlNames: [
//           'subpage.html'
//         ],
//         include: {
//           type: 'asyncChunks',
//           entries: [
//             'subpage'
//           ]
//         }
//       }
//     ),
//     /* config.plugin('preload-cart') */
//     new PreloadPlugin(
//       {
//         rel: 'preload',
//         includeHtmlNames: [
//           'cart.html'
//         ],
//         include: {
//           type: 'initial',
//           entries: [
//             'cart'
//           ]
//         },
//         fileBlacklist: [
//           /\.map$/,
//           /hot-update\.js$/
//         ]
//       }
//     ),
//     /* config.plugin('prefetch-cart') */
//     new PreloadPlugin(
//       {
//         rel: 'prefetch',
//         includeHtmlNames: [
//           'cart.html'
//         ],
//         include: {
//           type: 'asyncChunks',
//           entries: [
//             'cart'
//           ]
//         }
//       }
//     )
//   ],
//   entry: {
//     index: [
//       '/home/zl/github/youzan/src/pages/index/index.js'
//     ],
//     subpage: [
//       '/home/zl/github/youzan/src/pages/subpage/subpage.js'
//     ],
//     cart: [
//       '/home/zl/github/youzan/src/pages/cart/cart.js'
//     ]
//   }
// }
