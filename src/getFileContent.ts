import { readFileSync } from "fs";

export function getFileContent(filePath: string) {
  return readFileSync(filePath, { encoding: "utf-8" });
}
