import { resolve, dirname } from "path";
import { getDependencies, id } from "./getDependencies";
import { mainPath } from "./index";

const modulesMapping: any = {};
export function genGraph() {
  const fullPath = resolve(mainPath);

  const dependencies = getDependencies(fullPath, mainPath);
  modulesMapping[fullPath] = 0;

  const completedPath: Set<string> = new Set();
  completedPath.add(fullPath);
  const graph: Array<ReturnType<typeof getDependencies>> = [dependencies];

  for (const { dep, fullPath: filePath, mapping } of graph) {
    flattening(dep, filePath, mapping, completedPath, graph);
  }
  return graph;
}
function flattening(
  dep: string[],
  filePath: string,
  mapping: any,
  completedPath: Set<string>,
  graph: {
    id: number;
    dep: string[];
    fullPath: string;
    path: string;
    code: string;
    mapping: any;
  }[]
) {
  dep.forEach((path) => {
    const fullPath = resolve(dirname(filePath), path);

    mappingId(fullPath, mapping, path);

    if (loaded(completedPath, fullPath)) {
      return;
    }

    const dependencies = getDependencies(fullPath, path);
    graph.push(dependencies);

    completedPath.add(filePath);
  });
}

function loaded(completedPath: Set<unknown>, fullPath: string) {
  return completedPath.has(fullPath);
}

function mappingId(fullPath: string, mapping: any, path: string) {
  if (typeof modulesMapping[fullPath] === "undefined") {
    mapping[path] = modulesMapping[fullPath] = id;
  } else {
    mapping[path] = modulesMapping[fullPath];
  }
}
