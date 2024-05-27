export class Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string;
    instructions: string;
    picture: string;
    created: Date;
    modified: Date;

    constructor(
        title: string = 'Enter a title',
        description: string = 'Enter a description',
        ingredients: string = 'Enter ingredients',
        instructions: string = 'Enter instructions',
        picture: string = '../assets/default.jpg',
        created: Date = new Date(),
        modified: Date = new Date()
    ) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.picture = picture;
        this.created = created;
        this.modified = modified;
    }
}