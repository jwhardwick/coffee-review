import { Roaster } from './roaster.model';
export class Coffee {
    constructor(
        public name: string,
        public roaster: Roaster,
        public originCountry: string,
        public originFarm: string,
        public imageURL: string,
        public websiteURL: string
    ) {}
}