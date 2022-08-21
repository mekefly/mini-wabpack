import traverse from "@babel/traverse";
import { genAst } from "./genAst";

export function dependencyAnalysis(ast: ReturnType<typeof genAst>) {
  const dep: string[] = [];
  traverse(ast, {
    ImportDeclaration(node) {
      const depPath = node.node.source.value;
      dep.push(depPath);
    },
  });
  return dep;
}
