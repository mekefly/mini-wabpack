import { jsonLoader } from "./jsonLoader";
import { MaybeArray } from "./share/utils";

export default {
  rules: [
    {
      test: /\.json$/,
      use: [jsonLoader] as MaybeArray<(code: string) => string>,
    },
  ],
  output: "build/index.js",
  input: "./example/index.js",
};
