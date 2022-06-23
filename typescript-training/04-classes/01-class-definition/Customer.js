var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// // let's create an instance
// let myCustomer = new Customer();
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";
var myCustomer = new Customer("Martin", "Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
