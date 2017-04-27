"use strict";
var ReplaceTest_1 = require("./ReplaceTest");
function replacer(target) {
    var newConstructor = ReplaceTest_1.ReplaceTest.prototype.constructor;
    newConstructor.prototype = Object.create(ReplaceTest_1.ReplaceTest.prototype);
    return newConstructor;
}
exports.replacer = replacer;
//# sourceMappingURL=Decorator.js.map