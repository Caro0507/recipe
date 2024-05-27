import { Recipe } from './recipe';
  
export const RECIPES: Recipe[] = [
    {
        id: 1,
        title: "Soft boiled Egg",
        description: "Ideal soft boiled egg",
        ingredients: `4 eggs`,
        instructions: `Bring a pan of water to the boil.
                       Carefully place your eggs in the bottom of the pan using a skimmer and leave them to cook for 3 minutes on a medium heat and no longer.
                       Prepare a bowl filled with water and ice cubes, and once the eggs are ready, take them out and place them in the ice water (this will stop them cooking).Recipe Boiled Eggs.
                       Wait a few minutes for them to cool. Use an egg poacher to break the egg shell with precision!.
                       Now all you have to do is enjoy!`,
        picture: "../assets/soft-boiled-egg.jpg",
        created: new Date(),
        modified: new Date(),
    },
    {
        id: 2,
        title: "Scrambled Egg",
        description: "Simple scrambled egg for the breakfast",
        ingredients: `4 eggs, pinch of salt, pinch of pepper, 1 tbsp of butter`,
        instructions: `In a small bowl, whisk together the eggs, salt and pepper. 
                        Melt the butter in a non-stick frying pan over medium heat. 
                        Pour the egg mixture into the pan and reduce the heat to medium-low. 
                        When the eggs begin to set, gently lift them from the sides and bottom of the pan to form large, soft lumps.
                        Cook until the eggs have thickened and there is no visible liquid left, but the eggs are not dry`,
        picture: "../assets/scrambled-egg.jpg",
        created: new Date(),
        modified: new Date(),
    },
    {
        id: 3,
        title: "Fried Egg",
        description: "Quick recipe for a fried egg",
        ingredients: `4 eggs, pinch of salt, pinch of pepper, 1 tbsp of butter`,
        instructions: `In a small bowl, whisk together the eggs, salt and pepper. 
                        Melt the butter in a non-stick frying pan over medium heat. 
                        Pour the egg mixture into the pan and reduce the heat to medium-low. 
                        When the eggs begin to set, gently lift them from the sides and bottom of the pan to form large, soft lumps.
                        Cook until the eggs have thickened and there is no visible liquid left, but the eggs are not dry`,
        picture: "../assets/scrambled-egg.jpg",
        created: new Date(),
        modified: new Date(),
    },
    {
        id: 4,
        title: "Poached Egg",
        description: "Perfectly cooked poached egg",
        ingredients: `2 eggs, pinch of salt, pinch of pepper `,
        instructions: `Put some fat (oil or butter) on your frying pan and heat over a medium heat
                      Break the egg into the centre of the pan without breaking the yolk
                      Leave to cook for 2 to 3 minutes`,
        picture: "../assets/poached-egg.jpg",
        created: new Date(),
        modified: new Date(),
    },
    {
        id: 5,
        title: "Omelette",
        description: "You can't make an omelette without breaking eggs!",
        ingredients: `2 eggs, Pepper, Salt, 1 tbsp of butter`,
        instructions:` Beat the eggs with a fork and season with salt and pepper.
                       Heat the butter, pour a little into the eggs and mix. Pour the eggs into the frying pan over a high heat, lower the heat and cook gently, bringing the edges of the omelette to the centre as they set.
                       Shake the pan a little to prevent the omelette from sticking, and check whether the texture is sloppy or set.
                       Fold the omelette in half and serve.`,
        picture: "../assets/omelette.jpg",
        created: new Date(),
        modified: new Date(),
    },
    // {
    //     id: 5,
    //     title: "Poached Egg",
    //     description: "Perfectly cooked poached egg",
    //     ingredients: ["1 eggs", "Spirit vinegar", "Ice water" ],
    //     instructions: ["",
    //                    "",
    //                    "",
    //                    "",],
    //     picture: "../assets/fried-egg.jpg",
    //     created: new Date(),
    //     modified: new Date(),
    // }
];