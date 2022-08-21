import { getFileContent } from "./getFileContent";
import { genAst } from "./genAst";
import { dependencyAnalysis } from "./dependencyAnalysis";
import { transform } from "babel-core";

export let id = 0;
export type Dependencies = ReturnType<typeof getDependencies>;
export function getDependencies(fileFullPath: string, path: string) {
  const file = getFileContent(fileFullPath);
  const ast = genAst(file);
  const dep = dependencyAnalysis(ast);
  const code = importToRequire(file);

  return {
    id: id++,
    dep,
    fullPath: fileFullPath,
    path,
    code,
    mapping: {} as any,
  };
}
function importToRequire(file: string) {
  return transform(file, { presets: ["env"] }).code ?? "";
}
