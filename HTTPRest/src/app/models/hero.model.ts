export class Hero {
    id: number;
    name: string;
    description: string;
    mainAbility: string;

    constructor(id: number, name: string, description: string, mainAbility: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.mainAbility = mainAbility;
    }
}
