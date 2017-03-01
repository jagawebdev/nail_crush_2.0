module.exports = {
  entry: {
    app: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js"
  }
}
