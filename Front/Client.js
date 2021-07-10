class Client{
    name = "";
    address = "";
    email = "";
    infoCreditCard = "";
    accountInfo = "";
    accountBalance = 0.0;

    constructor(name, address, email){
        this.name = name;
        this.address = address;
        this.email = email;
    }

    updateProfile(name, address, email){
        this.name = name;
        this.address = address;
        this.email = email;
    }

    loadPaidInfo(infoCreditCard){
        this.infoCreditCard = infoCreditCard;
    }
}