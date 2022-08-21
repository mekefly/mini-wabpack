import { genGraph } from "./genGraph";
import { generateCode } from "./template";
import { writeIn } from "./index";

export function builder() {
  const graph = genGraph();
  const code = generateCode(graph);
  writeIn(code);
}
