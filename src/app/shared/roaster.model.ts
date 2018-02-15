export class RoasterModel {
    constructor(
        public roasterId: number,
        public roasterName: string,
        public country: string,
        public region: string,
        public city: string,
        public imageURL: string,
        public websiteURL: string,
        public details: string
    ) {}
}
