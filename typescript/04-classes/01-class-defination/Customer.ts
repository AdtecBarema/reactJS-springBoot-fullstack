class Customer{

    private firstName:string;
    private lastName:string;

    constructor (theFirst:string, theLast:string){
        this.firstName=theFirst;
        this.lastName = theLast;
    }
}

//lets create instance of the customer 
let myCustomer = new Customer("Martin","Dixon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);