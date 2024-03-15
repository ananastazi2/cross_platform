import { Furniture } from "./Furniture";

export class Sofa extends Furniture {
    S: number;

    constructor(override name: string, S: number)
    {
        super(name);
        this.S = S;
    }

    calculatePrice() {
        this.price = this.S * this.S / 3 + 5000;
    }
}