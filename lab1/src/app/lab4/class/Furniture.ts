export abstract class Furniture {
    name: string;
    price: number;

    constructor(name: string) { 
        this.name = name;
        this.price = 0;
    }

    show() {
        let message = `Назва: ${this.name}, ціна: ${this.price.toFixed(2)}`;
        return message;
    }

    abstract calculatePrice(): any;
}