export class GuitarStyle {

    public static Styles: GuitarStyle[] = [
        new GuitarStyle('spanish', 'the original guitar', 6, true),
        new GuitarStyle('electric', 'the rock', 6, false),
        new GuitarStyle('bass', 'the low end', 4, false),
    ];

    public name: string;
    public description: string;
    public strings: number;
    public acoustic: boolean;

    constructor(name: string, description: string, strings: number, acoustic: boolean) {
        this.name = name;
        this.description = description;
        this.strings = strings;
        this.acoustic = acoustic;
    }

}
