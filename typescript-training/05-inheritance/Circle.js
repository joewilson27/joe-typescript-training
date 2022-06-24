"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    /**
     *
     * @param theX  ini param utk ke parent class (regular parameter), remember for this param tidak mendefined private
     * @param theY  ini param utk ke parent class (regular parameter), remember for this param tidak mendefined private
     * @param _radius ini param di class ini
     */
    constructor(theX, theY, _radius) {
        // mandatory for the super()            
        super(theX, theY); // remember the parent class has 2 constructor
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
