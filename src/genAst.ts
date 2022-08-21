import { parse } from "@babel/parser";

export function genAst(text: string) {
  return parse(text, { sourceType: "module" });
}
