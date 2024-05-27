const recipeModel = require('../models/recipes.js')
require('../models/database.js').sync({force: true}),

(async () => {
    await require('../models/database.js').sync({force: true})
    console.log('Database creationDate')
    console.log('Initialisation of the database...')
    
    const SoftBoiledEgg = await recipeModel.create({
        title: "Soft boiled Egg",
        description: "Ideal soft boiled egg",
        ingredients: `4 eggs`,
        instructions: `Bring a pan of water to the boil.
                       Carefully place your eggs in the bottom of the pan using a skimmer and leave them to cook for 3 minutes on a medium heat and no longer.
                       Prepare a bowl filled with water and ice cubes, and once the eggs are ready, take them out and place them in the ice water (this will stop them cooking).Recipe Boiled Eggs.
                       Wait a few minutes for them to cool. Use an egg poacher to break the egg shell with precision!.
                       Now all you have to do is enjoy!`,
        picture: "../assets/soft-boiled-egg.jpg",
    })

    const ScrambledEgg = await recipeModel.create({
        title: "Scrambled Egg",
        description: "Simple scrambled egg for the breakfast",
        ingredients: `4 eggs, pinch of salt, pinch of pepper, 1 tbsp of butter`,
        instructions: `In a small bowl, whisk together the eggs, salt and pepper. 
                        Melt the butter in a non-stick frying pan over medium heat. 
                        Pour the egg mixture into the pan and reduce the heat to medium-low. 
                        When the eggs begin to set, gently lift them from the sides and bottom of the pan to form large, soft lumps.
                        Cook until the eggs have thickened and there is no visible liquid left, but the eggs are not dry`,
        picture: "../assets/scrambled-egg.jpg",
    })

    const FriedEgg = await recipeModel.create({
        title: "Fried Egg",
        description: "Quick recipe for a fried egg",
        ingredients: `2 eggs, pinch of salt, pinch of pepper `,
        instructions: `Put some fat (oil or butter) on your frying pan and heat over a medium heat
                      Break the egg into the centre of the pan without breaking the yolk
                      Leave to cook for 2 to 3 minutes`,
        picture: "../assets/fried-egg.jpg",
    })

    const PoachedEgg = await recipeModel.create({
        title: "Poached Egg",
        description: "Perfectly cooked poached egg",
        ingredients: `1 egg, Spirit vinegar, Ice water` ,
        instructions: `Heat a pan of water. Add a spoonful of vinegar, but do not add any salt as this will accelerate the coagulation of the egg whites.
                       Meanwhile, carefully break the egg into a small cup.
                       When the water is boiling, bring a cup close to the surface and turn it over with a sharp tap.
                       Using a skimmer, as the egg cooks, push the white filaments back around the yolk so that they clump together.
                       After 3 minutes, remove the egg with the skimmer and place in a bowl of iced water.`,
        picture: "../assets/poached-egg.jpg",
    })

    const Omelette =await recipeModel.create({
        title: "Omelette",
        description: "You can't make an omelette without breaking eggs!",
        ingredients: `2 eggs, Pepper, Salt, 1 tbsp of butter`,
        instructions:` Beat the eggs with a fork and season with salt and pepper.
                       Heat the butter, pour a little into the eggs and mix. Pour the eggs into the frying pan over a high heat, lower the heat and cook gently, bringing the edges of the omelette to the centre as they set.
                       Shake the pan a little to prevent the omelette from sticking, and check whether the texture is sloppy or set.
                       Fold the omelette in half and serve.`,
        picture: "../assets/omelette.jpg",
    })

    console.log('Initialisation terminée.')
})()
