import { MustBeAnArray } from "../types";
export function createAsyncHook<E extends any = []>() {
  type REST = MustBeAnArray<E>;
  type Hook = (...rest: REST) => Promise<void> | void;
  return {
    hooks: [] as Array<Hook>,
    clear() {
      this.hooks = [];
    },
    async call(...rest: REST) {
      for (const hook of this.hooks) {
        await hook(...rest);
      }
    },
    tap(hook: Hook) {
      this.hooks.push(hook);
    },
  };
}
