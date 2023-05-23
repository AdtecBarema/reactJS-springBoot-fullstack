import { Shape } from "./shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10,15);


let myCircle = new Circle(5,10,20);


let myRectangle = new Rectangle(0,0,3,7);




//Placing array of objects:

let theShape: Shape[] = [];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);

console.log(theShape);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
}