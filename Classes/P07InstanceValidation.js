class CheckingAccount {
        _clientId;
        _email;
        _firstName;
        _lastName;

    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }
    
    set clientId(value) {
        if (typeof Number(value) !== "number" || value.length !== 6) {
            throw TypeError("Client ID must be a 6-digit number")
        }

        this._clientId = value;
    }
    
    get email(){
        return this._email;
    }
    
    set email(value) {
        let pattern = /^\w+@[a-zA-Z.]+$/g;
        if (value.match(pattern) == null) {
            throw TypeError("TypeError: Invalid e-mail")
        }

        this._email =value;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value) {
        if (value.length > 20 || value.length < 3) {
            throw TypeError(`First name must be between 3 and 20 characters long`)
        }

        const pattern = /[a-zA-z]+/g;
        if(value.match(pattern) == null){
            throw TypeError(`First name must contain only Latin characters`);
        }

        this._firstName = value;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value) {
        if (value.length > 20 || value.length < 3) {
            throw TypeError(`Last name must be between 3 and 20 characters long`)
        }
        const pattern = /[a-zA-z]+/g;
        if(value.match(pattern) == null){
            throw TypeError(`Last name must contain only Latin characters`);
        }

        this._lastName = value;
    }
}

let acc = new CheckingAccount('131155', 'ivan@some.com', 'gdfgd', 'asddv')