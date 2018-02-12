export class CoffeeModel {
    constructor(
        public coffeeId: number,
        public roasterId: number,
        public coffeeName: string,
        public origin: string,
        public imageURL: string,
        public websiteURL: string,
        public details: string
    ) {}
}
