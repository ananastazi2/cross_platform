import { Furniture } from "./Furniture";

export class Table extends Furniture {
    length: number;
    width: number;
    height: number;

    constructor(override name: string, length: number, width: number, height: number)
    {
        super(name);

        if (length <= 0) 
            throw new Error('length <= 0');
        else if (width <= 0)
            throw new Error('width <= 0');
        else if (height <= 0)
            throw new Error('height <= 0');

        this.length = length;
        this.width = width;
        this.height = height;
    }

    calculatePrice() {
        this.price = (this.length * 500 + this.width * 200 + this.height * 300) / (40 * 800);
    }
}