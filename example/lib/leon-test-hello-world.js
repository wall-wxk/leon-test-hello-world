(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Sniffer = factory());
}(this, function () { 'use strict';

    var say = 'hello world!';

    var main = {
        say: function () {
            return "" + say;
        }
    };

    return main;

}));
//# sourceMappingURL=leon-test-hello-world.js.map
