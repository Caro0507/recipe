import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @Input() recipe: Recipe;
  types: string[];
  isAddForm: boolean;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isAddForm = this.router.url.includes('add');
  }
  onSubmit() {
    if(this.isAddForm) {
      this.recipeService.addRecipe(this.recipe)
        .subscribe((recipe: Recipe) => this.router.navigate(['/recipe', recipe.id]));
    } else {
      this.recipeService.updateRecipe(this.recipe)
        .subscribe(() => this.router.navigate(['/recipe', this.recipe.id]));
    }
  }

}
