"use strict";
exports.__esModule = true;
var shape_1 = require("./shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
//Placing array of objects:
var theShape = [];
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);
console.log(theShape);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShape = theShape_1[_i];
    console.log(tempShape.getInfo());
}
