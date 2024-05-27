import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { DetailRecipeComponent } from './detail-recipe/detail-recipe.component';
import { BorderCardDirective } from './border-card.directive';
import { RecipeTypeColorPipe } from './recipe-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { RecipeService } from './recipe.service';
import { FormsModule } from '@angular/forms';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const recipeRoutes: Routes = [
  { path: 'edit/recipe/:id', component: EditRecipeComponent, canActivate: [AuthGuard] },
  { path: 'recipe/add', component: AddRecipeComponent, canActivate: [AuthGuard] },
  { path: 'recipes', component: ListRecipeComponent, canActivate: [AuthGuard] },
  { path: 'recipe/:id', component: DetailRecipeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    ListRecipeComponent,
    DetailRecipeComponent,
    BorderCardDirective,
    RecipeTypeColorPipe,
    RecipeFormComponent,
    EditRecipeComponent,
    AddRecipeComponent,
    SearchRecipeComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(recipeRoutes)
  ],
  providers: [RecipeService]
})
export class RecipeModule { }
