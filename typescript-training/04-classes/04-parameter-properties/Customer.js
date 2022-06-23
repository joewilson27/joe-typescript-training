"use strict";
class Customer {
    // ini kita men-define parameter default dan langsung menaruh di constructor
    // ketika di jalankan maka otomatis akan mengisi nilai ke _firstName dan _lastName
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
