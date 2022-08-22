import { writeFileSync } from "fs";
import { resolve } from "path";

export function writeIn(text: string, path: string) {
  writeFileSync(resolve(path), text);
}
