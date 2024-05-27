import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
})
export class SearchRecipeComponent implements OnInit {
  searchTerms = new Subject<string>();
  recipes$: Observable<Recipe[]>;

  constructor(
    private router: Router,
    private recipeService: RecipeService
    ) { }

  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      // {...."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      // {......"ab"..........."abc"......}
      switchMap((term) => this.recipeService.searchRecipeList(term))
      // {.....recipeList(ab)............recipeList(abc)......}
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(recipe: Recipe) {
    const link = ['/recipe', recipe.id];
    this.router.navigate(link);
  }

}
