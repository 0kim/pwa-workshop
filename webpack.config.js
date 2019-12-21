const path=require('path')  ;  // 'path'는 local의 경로를 찾는 것
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest'); 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js'
    },
    module: {  
        rules: [
            {
               test: /\.js$/, 
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackPwaManifest({
            name: "React Memo",
            short_name: "memo",
            description: "memo app~~~",
            background_color: '#ffffff',
            crossorigin: 'use-credentials',
            theme_color: '#eeeeee',
            icons: [
                {
                    src: path.resolve('src/assets/Icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                }
            ]
        })
    ]
}
// module --> bable의 설정
// module과 plug-in 등을 많이 사용함 
//   