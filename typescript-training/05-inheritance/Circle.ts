import { Shape } from "./Shape";

export class Circle extends Shape {
  
  /**
   * 
   * @param theX  ini param utk ke parent class (regular parameter), remember for this param tidak mendefined private
   * @param theY  ini param utk ke parent class (regular parameter), remember for this param tidak mendefined private
   * @param _radius ini param di class ini  
   */
  constructor(theX: number, theY: number,
              private _radius: number){
    // mandatory for the super()            
    super(theX, theY); // remember the parent class has 2 constructor
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
  }

  getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }
}