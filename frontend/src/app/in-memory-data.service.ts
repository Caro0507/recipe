import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RECIPES } from './recipe/mock-recipe-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
      const recipes = RECIPES;
      return { recipes };
  }
}
