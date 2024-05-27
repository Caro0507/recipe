import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
})
export class ListRecipeComponent implements OnInit {
  recipeList: Recipe[];

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeService.getRecipeList()
      .subscribe(recipeList => this.recipeList= recipeList);
  }

  goToRecipe(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }

}
