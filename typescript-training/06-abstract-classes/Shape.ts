export abstract class Shape {
// Class abstract usually a general class that has a general behaviour that can implement on a subclass
// like Shape, Vehicle, Computer, etc.
  constructor(private _x: number, private _y: number) {
  }

  public get x(): number {
    return this._x;
  }
  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }
  public set y(value: number) {
    this._y = value;
  }

  getInfo(): string {
      return `x=${this._x}, y=${this._y}`;
  }

  abstract calculateArea(): number;
  
}