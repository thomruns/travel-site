const path = require("path");

module.exports = {
    entry: "./assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./temp/scripts"),
        filename: "App.js"
    }
}