import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    private baseUrl = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}


    getRecipeList(): Observable<Recipe[]>{
        const data = this.http.get<Recipe[]>(`${this.baseUrl}api/recipes`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );
        return data
    }

    getRecipeById(recipeId: number): Observable<Recipe|undefined> {
        return this.http.get<Recipe>(`${this.baseUrl}api/recipes/${recipeId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, undefined))
        );
    }

    searchRecipeList(term: string): Observable<Recipe[]> {
        if(term.length <= 1) {
            return of([]);
        } 

        return this.http.get<Recipe[]>(`${this.baseUrl}api/recipes/?title=${term}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );
    }

    updateRecipe(recipe: Recipe): Observable<null> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.put('${this.baseUrl}api/recipes', recipe, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    addRecipe(recipe: Recipe): Observable<Recipe> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post<Recipe>('${this.baseUrl}api/recipes', recipe, httpOptions).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    deleteRecipeById(recipeId: number): Observable<null> {
        return this.http.delete(`${this.baseUrl}api/recipes/${recipeId}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, null))
        );
    }

    private log(response: any) {
        console.table(response);
    }

    private handleError(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue);
    }


}
