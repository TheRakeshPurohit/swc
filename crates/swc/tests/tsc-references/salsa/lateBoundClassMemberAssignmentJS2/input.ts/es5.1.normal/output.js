function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
// @allowJs: true
// @checkJs: true
// @emitDeclarationOnly: true
// @strict: true
// @target: es6
// @declaration: true
// @filename: lateBoundClassMemberAssignmentJS2.js
var _sym = "my-fake-sym";
export var MyClass = /*#__PURE__*/ function() {
    "use strict";
    function MyClass() {
        _classCallCheck(this, MyClass);
        this[_sym] = "ok";
    }
    _createClass(MyClass, [
        {
            key: "method",
            value: function method() {
                this[_sym] = "yep";
                var x = this[_sym];
            }
        }
    ]);
    return MyClass;
}();