import { builder } from "./builder";
import defaultConfig from "./default.config";
import { writeIn } from "./writeIn";

type Config = typeof defaultConfig;
type ConfigOptions = Partial<Config>;

export function build(config: ConfigOptions) {
  const c: Config = {} as any;
  Object.assign(c, defaultConfig, config);
  const code = builder(c.input);
  writeIn(code, c.output);
}
