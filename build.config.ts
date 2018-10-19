import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: "src/index.js",
  output: {
    dir: "dist",
    file: "index.js",
    mini: true,
    format: "cjs"
  }
};

export default config;
