module.exports = {

  entry: [
    "./source/App.js"
  ],

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: "react"
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
