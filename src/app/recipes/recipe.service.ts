import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Desc path', 'http://hackingdistributed.com/images/2014-11-23-macaroons-in-hyperdex/pretty-macaroons.jpg'),
    new Recipe('Another Recipe', 'A longer description for the recipe', 'http://hackingdistributed.com/images/2014-11-23-macaroons-in-hyperdex/pretty-macaroons.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
