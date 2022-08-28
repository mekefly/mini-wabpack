import { readFileSync } from "fs";
import { pluginHooks } from "./plugin/pluginHooks";

export function getFileContent(filePath: string) {
  const context = {
    filePath,
    text: "",
  };

  pluginHooks.beforeReadFileHook.call(context);

  if (!context.text) {
    context.text = readFileSync(filePath, { encoding: "utf-8" });
  }

  pluginHooks.afterReadFileHook.call(context);

  return context.text;
}
