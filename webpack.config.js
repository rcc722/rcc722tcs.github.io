const path = require('path');
const HTMLLWebpackPlugin =require('html-webpack-plugin')
module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        // 不使用 箭头函数
        environment: {
            arrowFunction:false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                // 后=>前执行
                use: [
                    // 配置babel
                    {
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets:[
                                [
                                        // 指定环境的插件
                                    '@babel/preset-env',
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                                "chrome":"88"
                                    },
                                        // 指定corshjs 的版本
                                    "corejs": "3",
                                    // 使用 corejs 的方式 usage 表示按需加载
                                        "useBuiltIns":'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude:/node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    'css-loader',
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 "postcss-preset-env",
                    //                 {
                    //                     browsers:'last 2 versions',
                    //                 }
                    //             ]
                    //         }
                    //     }
                    // },
                    {
                        loader: "postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions',//兼容每个浏览器最新的两个版本
                                        }
                                    ]
                                ]
                            }
                        }

                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    // 设置引用模块
    resolve: {
        extensions:['.ts','.js']   
    }

}