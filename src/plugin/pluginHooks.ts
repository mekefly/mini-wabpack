import { createHook } from "src/share/hook";

export const pluginHooks = {
  beforeReadFileHook: createHook<{ filePath: string; text: string }>(),
  afterReadFileHook: createHook<{ filePath: string; text: string }>(),
};
type PluginHooks = typeof pluginHooks;

export type Plugin = {
  [key in keyof PluginHooks]: PluginHooks[key] extends { hooks: Array<infer F> }
    ? F
    : never;
};

function installPlugin(plugin: Plugin) {
  Object.keys(plugin).forEach((key) => pluginHooks[key]?.tap(plugin[key]));
}
