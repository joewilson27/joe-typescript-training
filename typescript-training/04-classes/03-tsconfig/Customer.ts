class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
      this._firstName = theFirst;
      this._lastName = theLast;
    }

    // getters accessor
    public get firstName(): string { // string adl type return file
      return this._firstName;
    }

    // setter accessor (no return type, even void)
    public set firstName(value: string) {
      this._firstName = value;
    }

    public get lastName(): string { // string adl type return file
      return this._lastName;
    }

    public set lastName(value: string) {
      this._lastName = value;
    }

}

// // let's create an instance
// let myCustomer = new Customer();

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName); // dengan get accessor, maka TypeScript sudah tahu ketika kita tulis myCustomer.firstName, maka
// dia akan menjalankan get accessor public get firstName()
console.log(myCustomer.lastName);