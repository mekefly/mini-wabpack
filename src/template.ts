import { Dependencies } from "./getDependencies";

export function generateCode(graph: Dependencies[]) {
  return `
(function (modules) {
  var cache = {};
  require(0);
  function require(id) {
    if (cache[id]) return cache[id].exports;
    var m = modules[id];
    var fn = m[0];
    var mapping = m[1];
    function localRequire(path) {
      return require(mapping[path]);
    }
    var module = (cache[id] = { exports: {} });
    fn(localRequire, module, module.exports);
    return module.exports;
  }
})({
  ${graph
    .map((d) => {
      return `
    ${d.id}:[
      function (require, module, exports) {
        ${d.code}
      },
      ${JSON.stringify(d.mapping)}
    ]
    `;
    })
    .join()}
});
  `;
}
