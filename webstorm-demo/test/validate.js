/**
 * Created by wangmeng on 17-6-4.
 */

describe("add validate", function () {
    it("should be equal to 3", function () {
        expect(add(1,2)).toBe(3);
    });

    it("should be equal to 12, and 34 is a string, from this example we can see java script is weak typed language", function () {
        expect(add(1, "2")).toBe("12");
    });

    it("a should be 4, this example shows that block cannot create new scope", function () {
        var a = 3;
        {
            var a = 4;
        }
        expect(a).toBe(4);
    });

    it("should be no error or exceptions", function () {
        add(1, 2);
        add.apply([1, 2]);
        new add(1, 2);
    });

    it("name should be wangmeng, age should be 28", function () {
        var parent = {"age": 28};
        Person.prototype = parent;
        var constructed_object = new Person("wangmeng");
        // constructed_object.prototype = parent;
        expect(constructed_object.name).toBe("wangmeng");
        expect(constructed_object.age).toBe(28);

    });

    it("Object.create(o) can create a object which has a hidden link to o object", function () {
        var parent = {"age": 28};
        var a = Object.create(parent);
        a.name = "wangmeng";
        expect(a.age).toBe(28);

        // a.age change does not affect parent.age, parent.age is still 28
        a.age = 30;
        expect(parent.age).toBe(28);

        var b = Object.create(parent);

        expect(b.age).toBe(28);
        // a.prototype.age (parent.age) changes does affect a.age
        parent.age = 29;
        expect(b.age).toBe(29);
    });



})
