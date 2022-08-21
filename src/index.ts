import { writeFileSync } from "fs";
import { resolve } from "path";
import { builder } from "./builder";

const buildPath = "build/index.js";
export const mainPath = "./example/index.js";

export function writeIn(text: string) {
  writeFileSync(resolve(buildPath), text);
}
builder();
