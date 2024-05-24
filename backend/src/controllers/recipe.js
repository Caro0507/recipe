const status = require('http-status')
const has = require('has-keys')
const CodeError = require('../util/CodeError.js')
const recipeModel = require("../models/recipes.js")

module.exports = {
    async getUserById(req, res){
        if(!has(req.params, 'id')) 
            throw {code: status.BAD_REQUEST, message: 'You must specify the ID'};
        let { id } = req.params;
        let data = await recipeModel.getById(id);
        if(!data)
            throw {code: status.BAD_REQUEST, message: 'Recipe not found'};
        res.json({status: true, message: 'Returning recipe', data});
    },

    async getRecipes (res) {
        const data = await recipeModel.findAll();
        res.json({ status: true, message: 'Returning recipes', data });
    },

    async newRecipe (req, res) {
        if(!has(req.params, ['title', 'description','ingredients', 'instructions']))
            throw {code: status.BAD_REQUEST, message: 'You must specify the title, description, ingredients, instructions'};
         let { title, description, ingredients, instructions } = req.body;
        await recipeModel.create(title, description, ingredients, instructions);
        res.json({status: true, message: 'Recipe Added'});
    },
    
    async updateRecipe (req, res) {
        if (!has(req.body, ['id', 'title', 'description', 'ingredients', 'instructions'])) 
            throw new CodeError('Something is missing', status.BAD_REQUEST);
        const { id, title, description, ingredients, instructions } = req.params;
        await recipeModel.update({ id, title, description, ingredients, instructions });
        res.json({ status: true, message: 'Recipe updated' })
    },

    async deleteRecipe (req, res) {
        if (!has(req.params, ['id'])) 
            throw new CodeError('You must specify the id', status.BAD_REQUEST);
        const { id } = req.params;
        await recipeModel.delete(id);
        res.json({ status: true, message: 'Recipe deleted' })
    },

}