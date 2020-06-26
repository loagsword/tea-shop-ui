const path = require('path');


module.exports = {
  "output": {
    "filename": "[name].pack.js",
    "path": path.resolve(__dirname, 'docs')
  },
  "entry": {
    "index": "./src/index"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  }
};