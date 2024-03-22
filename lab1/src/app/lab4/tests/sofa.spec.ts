import { Sofa } from "../lab4.page";

describe('Sofa Testing', () => {
    let sofa:Sofa;

    beforeEach(() => {
        sofa = new Sofa("S", 150);
    })

    it("Створення екземпляру класу Sofa", () => {
        expect(sofa).toBeTruthy();
    })

    it("Створення екземпляру із площею <= 0", () => {
        expect(() => new Sofa("S", -2)).toThrow(new Error('S <= 0'))
    })

    it("Розрахунок ціни дивана", () => {
        let expectedPrice = sofa.S * sofa.S / 3 + 5000;
        sofa.calculatePrice()
        let factualPrice = sofa.price;
        expect(factualPrice).toBe(expectedPrice);
    })
});

