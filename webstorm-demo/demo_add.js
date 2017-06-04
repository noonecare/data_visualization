/**
 * Created by wangmeng on 17-6-4.
 */

var add = function (a, b) {
    return a + b;
};


var Person = function (name) {
    this.name = name;
};


if (typeof Object.create != 'function') {
    Object.create = function (o) {
        var F = function () {

        };
        F.prototype = o;
        return new F();
    }
}