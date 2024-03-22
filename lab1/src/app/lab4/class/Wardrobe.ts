import { Furniture } from "./Furniture";

export class Wardrobe extends Furniture {
    V!: number;

    constructor(override name: string, V: number)
    {
        super(name);

        if (V <= 0) throw new Error('V <= 0');
        
        this.V = V;
    }

    calculatePrice() {
        this.price = 75.0 * this.V;
    }
}