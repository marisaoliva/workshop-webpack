var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app.js'
    },
    output: {
        path: './dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
        },
        {
           test: /\.html$/,
           loader: "html"
         },
         {
           test: /\.less$/,
           loader: ExtractTextPlugin.extract('style', 'css')
         }
      ]
    },
    plugins: [
      new ExtractTextPlugin('bundle.css', {allChunks: true})
    ],
    devServer: {
      contentBase: path.join(__dirname,"dist"),
      port:8080,
      inline:true,
      hot:true

    }

};
