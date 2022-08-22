import { builder } from "./builder";
import { writeIn } from "./writeIn";
import defaultConfig from "./default.config";

const code = builder(defaultConfig.input);
writeIn(code, defaultConfig.output);
