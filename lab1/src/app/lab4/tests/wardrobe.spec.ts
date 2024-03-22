import { Wardrobe } from "../lab4.page";

describe('Wardrobe Testing', () => {
    let wardrobe:Wardrobe;

    beforeEach(() => {
        wardrobe = new Wardrobe("W", 150);
    })

    it("Створення екземпляру класу", () => {
        expect(wardrobe).toBeTruthy();
    })

    it("Створення екземпляру з об'ємом <= 0", () => {
        expect(() => new Wardrobe("W", 0)).toThrow(new Error('V <= 0'))
    })

    it("Розрахунок ціни шафи", () => {
        let expectedPrice = 75.0 * wardrobe.V;
        wardrobe.calculatePrice()
        let factualPrice = wardrobe.price;
        expect(factualPrice).toBe(expectedPrice);
    })
});

