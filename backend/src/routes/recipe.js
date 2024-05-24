const express = require('express')
const router = express.Router()
const recipe = require('../controllers/recipe.js')

router.get('/api/recipes', recipe.getRecipes)
router.post('/api/recipes', recipe.newRecipe)
router.get('/api/recipes/:id', recipe.getRecipeById)
router.put('/api/recipes/:id', recipe.updateRecipe)
router.delete('/api/recipes/:id', recipe.deleteRecipe)

module.exports = router