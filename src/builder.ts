import { genGraph } from "./genGraph";
import { generateCode } from "./template";

export function builder(input: string) {
  const graph = genGraph(input);
  const code = generateCode(graph);
  return code;
}
