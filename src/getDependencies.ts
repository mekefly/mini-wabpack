import { getFileContent } from "./getFileContent";
import { genAst } from "./genAst";
import { dependencyAnalysis } from "./dependencyAnalysis";
import { useLoader } from "./useLoader";
import { importToRequire } from "./importToRequire";
export let id = 0;
export type Dependencies = ReturnType<typeof getDependencies>;
export function getDependencies(fileFullPath: string, path: string) {
  let file = getFileContent(fileFullPath);
  file = useLoader(fileFullPath, file);
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
