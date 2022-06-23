"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    // getters accessor
    get firstName() {
        return this._firstName;
    }
    // setter accessor (no return type, even void)
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
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
