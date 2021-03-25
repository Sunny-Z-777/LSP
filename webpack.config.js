// node.js里用来处理路径的的基本包
const path = require('path')
// 引入插件html-webpack-plugin
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    // __dirname 指得是项目根目录
    // 声明入口，需要时js文件因为vue组件不能直接挂在到HTML中
    entry: path.join(__dirname, "./src/index"),
    // 声明出口，webpack会把代码（js/css/图片等等）整合到一个js文件中
    output: {
        // 输出文件的文件名
        filename: "bundle.js",
        // 输出文件的路径
        path: path.join(__dirname, "dist")
    },
    // loader：用来告诉webpack在打包前，各类型模块分别用什么loader转换
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use: [
                    {
                        // 把图片转换成Base64代码，url-loader基于file-loader
                        loader: "url-loader",
                        // 限制图片的大小，并配置输出图片的名称
                        options: {
                            // 如果图片小于1024，就会被转译成Base64代码写到代码中去。
                            limit: 1024,
                            name: '[name]-Sunny.[ext]'
                        }
                    }
                ]
            }, 
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlPlugin()
    ]
}

if(isDev) {
    config.devtool = "#cheap-module-eval-source-map"
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true
    },
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config