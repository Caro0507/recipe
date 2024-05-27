import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-add-recipe',
  template: `
    <h2 class="center">Add a recipe</h2>
    <app-recipe-form [recipe]="recipe"></app-recipe-form>
  `
})
export class AddRecipeComponent implements OnInit {

  recipe: Recipe;

  ngOnInit() {
    this.recipe = new Recipe();
  }

}
