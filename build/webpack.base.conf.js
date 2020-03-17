const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: './src/entry.js',
    framework: ['react','react-dom'],
  },
  output: {
    filename: 'js/bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        include: APP_PATH
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" //在html中插入<style>标签
          },
          {
            loader: "css-loader",//获取引用资源，如@import,url()
          },
          {
            loader: "postcss-loader",
            options: {
              plugins:[
                require('autoprefixer')({
                  browsers:['last 5 version']
                })
              ]
            }
          }
        ]
      },
      {
        test:/\.less$/,
        use: [
          {  loader: "style-loader"  },
          {  loader: "css-loader" },
          {  loader: "less-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins:[
                require('autoprefixer')({
                  browsers:['last 5 version']
                })
              ]
            }
          }
        ]
      },
      {
        test:/\.scss$/,
        use:[
          {  loader: "style-loader"  },
          {
            loader: "css-loader",
          },
          {  loader: "sass-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins:[
                require('autoprefixer')({
                  browsers:['last 5 version']
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        use: 'url-loader?limit=8129',
        //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        exclude: /node_modules/
      }
    ]
  }
};
