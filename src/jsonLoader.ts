export function jsonLoader(code: string) {
  return `export default JSON.parse(${JSON.stringify(code)})`;
}
