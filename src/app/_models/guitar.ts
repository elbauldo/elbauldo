import { GuitarStyle } from './guitar-style';
import { Manufacturer } from './manufacturer';

export class Guitar {
    public brand: Manufacturer;
    public style: GuitarStyle;
    public name: string;
    public serialNumber: string;
    public yearOfManufacture: string;
    public imagePath: string;

    constructor(brand: Manufacturer, style: GuitarStyle, name: string, serialNumber: string, yearOfManufacture: string, imagePath: string)
    {
        
        this.brand = brand;
        this.style = style;
        this.name = name;
        this.serialNumber = serialNumber;
        this.yearOfManufacture = yearOfManufacture;
        this.imagePath = imagePath;
    }
}
