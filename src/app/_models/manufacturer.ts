export class Manufacturer {
    public name: string;
    public country: string;
    public parentCompany: string;

    constructor(name: string, country: string, parentCompany: string) {
        this.name = name;
        this.country = country;
        this.parentCompany = parentCompany;
    }
}
