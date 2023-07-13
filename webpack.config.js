import path from "path";

const __dirname = process.cwd();

export default {
  entry: {
    polyfill: "./src/addon/polyfill.ts",
    worker: "./src/addon/worker.ts"
  },
  output: {
    path: path.resolve(__dirname, "./out"),
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".d.ts"],
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
};
