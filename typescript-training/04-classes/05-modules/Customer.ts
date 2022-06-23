export class Customer {

    // kita menambahkan keyword 'export' pada class ini agar dapat di gunakan dengan meng-import class ini
    // dari file lain 

    // ini kita men-define parameter default dan langsung menaruh di constructor
    // ketika di jalankan maka otomatis akan mengisi nilai ke _firstName dan _lastName
    constructor(private _firstName: string, private _lastName: string){
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

// kita panggil class utk membuat object ini dari file yg berbeda

// let myCustomer = new Customer("Martin", "Dixon");
// console.log(myCustomer.firstName); 
// console.log(myCustomer.lastName);