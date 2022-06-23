var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // getters accessor
        get: function () {
            return this._firstName;
        },
        // setter accessor (no return type, even void)
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// // let's create an instance
// let myCustomer = new Customer();
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName); // dengan get accessor, maka TypeScript sudah tahu ketika kita tulis myCustomer.firstName, maka
// dia akan menjalankan get accessor public get firstName()
console.log(myCustomer.lastName);
