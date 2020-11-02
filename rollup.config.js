import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const config = {
  input: "fuck-console.ts",
  output: [
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.browser,
      name: "fuck-console",
      format: "umd",
    },
  ],
  plugins: [typescript(), commonjs(), resolve(), terser(), json()],
};

export default config;
