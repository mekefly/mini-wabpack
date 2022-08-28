export type MaybeArray<E> = E | E[];
export function asyncTimeout(ms: number = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
