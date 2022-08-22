import { transform } from "babel-core";

export function importToRequire(file: string) {
  return transform(file, { presets: ["env"] }).code ?? "";
}
