var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
entry: {
'polyfills': './client/polyfills.ts',
'vendor': './client/vendor.ts',
'main': './client/app.ts'
},

resolve: {
extensions: ['.ts', '.js', '.scss']
},

module: {
rules: [{
test: /.ts$/,
use: [{
loader: 'awesome-typescript-loader',
options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
}, 'angular2-template-loader']
},
{
test: /.html$/,
use: 'html-loader'
},
{
test: /.scss$/,

  loaders: ['to-string-loader',].concat(ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      { loader: 'css-loader' , options: { url: false } },
      { loader: 'sass-loader' },
    ]
  }))
},
{
  test: /\.(ttf|eot|svg|gif|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader'
            }]
}

]
},

plugins: [

new ExtractTextPlugin('stylesheet.css'),

new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'client/assets') }]),
// Workaround for angular/angular#11580

new webpack.ContextReplacementPlugin(
  /angular(\\|\/)core(\\|\/)@angular/,
  path.resolve(__dirname, './client')
),

new HtmlWebpackPlugin({
  template: 'client/index.html'
})
],

output: {
path: path.join(__dirname, 'public'),
filename: '[name].js',
chunkFilename: '[id].chunk.js'
},
};

if (process.env.NODE_ENV === 'production') {
module.exports.devtool = false;
module.exports.plugins = (module.exports.plugins || []).concat([
  
  new UglifyJsPlugin({
    uglifyOptions: {
    warnings: false,
    ie8: false,
    output: {
    comments: false
    }
    }
    }),
new webpack.optimize.AggressiveMergingPlugin(),
new CompressionPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
  threshold: 10240,
  minRatio: 0.8
})
])
}