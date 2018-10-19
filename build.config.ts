import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: "src/index.js",
  output: {
    dir: "dist",
    file: "index.js",
    mini: false,
    format: "cjs"
  },
  external: ["compressing"]
};

export default config;
