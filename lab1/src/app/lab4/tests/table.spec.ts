import { Table } from "../lab4.page";

describe('Table Testing', () => {
    let table:Table;

    beforeEach(() => {
        table = new Table("T", 1.5, 1, 1.3);
    })

    it("Створення екземпляру класу Table", () => {
        expect(table).toBeTruthy();
    })

    it("Створення екземпляру з довжиною <= 0", () => {
        expect(() => new Table("T", -1.5, 1, 1.3)).toThrow(new Error('length <= 0'))
    })

    it("Створення екземпляру з шириною <= 0", () => {
        expect(() => new Table("T", 1.5, -1, 1.3)).toThrow(new Error('width <= 0'))
    })

    it("Створення екземпляру з висотою <= 0", () => {
        expect(() => new Table("T", 1.5, 1, -1.3)).toThrow(new Error('height <= 0'))
    })

    it("Розрахунок ціни шафи", () => {
        let expectedPrice = (table.length * 500 + table.width * 200 + table.height * 300) / (40 * 800);
        table.calculatePrice()
        let factualPrice = table.price;
        expect(factualPrice).toBe(expectedPrice);
    })
});

