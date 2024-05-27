import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html'
})
export class DetailRecipeComponent implements OnInit {

  recipeList: Recipe[];
  recipe: Recipe|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    const recipeId: string|null = this.route.snapshot.paramMap.get('id');
    if(recipeId) {
      this.recipeService.getRecipeById(+recipeId)
        .subscribe(recipe => this.recipe = recipe);
    }
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipeById(recipe.id)
      .subscribe(() => this.goToRecipeList());
  }

  goToRecipeList() {
    this.router.navigate(['/recipes']);
  }

  goToEditRecipe(recipe: Recipe) {
    this.router.navigate(['/edit/recipe', recipe.id]);
  }

}
