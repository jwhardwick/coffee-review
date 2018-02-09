import { Roaster } from './roaster.model';
export class Coffee {
    constructor(
        public name: string,
        public roaster: Roaster,
        public originCountry: string,
        public about: string,
        public imageURL: string,
        public websiteURL: string
    ) {}
}
