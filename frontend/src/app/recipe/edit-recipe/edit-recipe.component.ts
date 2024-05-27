import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  template: `
    <h2 class="center">Edit {{ recipe?.title }}</h2>
    <p *ngIf="recipe" class="center">
      <img [src]="recipe.picture">
    </p>
    <app-recipe-form  *ngIf="recipe" [recipe]="recipe"></app-recipe-form>
  `,
  styles: [
  ]
})
export class EditRecipeComponent implements OnInit {

  recipe: Recipe|undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    const recipeId: string|null = this.route.snapshot.paramMap.get('id');
    if(recipeId) {
      this.recipeService.getRecipeById(+recipeId)
        .subscribe(recipe => this.recipe = recipe);
    } else {
      this.recipe = undefined;
    }
  }

}
