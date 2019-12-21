const path=require('path')  ;  // 'path'는 local의 경로를 찾는 것
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        })
    ]
}
// module --> bable의 설정
// module과 plug-in 등을 많이 사용함 
//   