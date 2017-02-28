export class Customer {
    constructor(
        public name?: string,
        public email: string=""
    ) {};

    //Como si fuera
    /*
        public name: string;
        public email: string;

        constructor(public name: string, public email: string){
            this.name = name;
            this.email = email;
        }
    
    */ 

}