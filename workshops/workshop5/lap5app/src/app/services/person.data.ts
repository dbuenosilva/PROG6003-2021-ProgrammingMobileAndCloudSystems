

//person.data.ts
export class PersonData {
    public name:string;
    public age:number;
    public favColour:string;
    
    constructor(_name:string, _age:number, _favColour:string) {
        this.name = _name;
        this.age = _age;
        this.favColour = _favColour;
    }
}