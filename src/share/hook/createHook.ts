import { MustBeAnArray } from "../types";
export function createHook<E extends any = []>() {
  type REST = MustBeAnArray<E>;
  return {
    hooks: [] as Array<(...rest: REST) => void>,
    clear() {
      this.hooks = [];
    },
    call(...rest: REST) {
      this.hooks.forEach((hook) => {
        hook(...rest);
      });
    },
    tap(hook: (...rest: REST) => void) {
      this.hooks.push(hook);
    },
  };
}
