import config from "./default.config";

export function useLoader(fileFullPath: string, file: string) {
  config.rules.forEach((rule) => {
    const matched = rule.test.test(fileFullPath);
    if (matched) {
      const use = rule.use;
      if (Array.isArray(use)) {
        file = use.reduce((code, loader) => {
          return loader(code);
        }, file);
      } else {
        file = use(file);
      }
    }
  });
  return file;
}
