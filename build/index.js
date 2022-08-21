
(function (modules) {
  var cache = {};
  require(0);
  function require(id) {
    if (cache[id]) {
      return cache[id].exports;
    }
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
  
    0:[
      function (require, module, exports) {
        "use strict";

var _foo = require("foo.js");

(0, _foo.foo)();
      },
      {"foo.js":1}
    ]
    ,
    1:[
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = undefined;

require("index.js");

var foo = exports.foo = function foo() {
  console.log("This is Foo");
};
      },
      {"index.js":0}
    ]
    
});
  