import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Desc path',
      'http://hackingdistributed.com/images/2014-11-23-macaroons-in-hyperdex/pretty-macaroons.jpg',
      [
        new Ingredient('Apples', 55),
        new Ingredient('Pears', 55),
        new Ingredient('Bananas', 55)
      ]
    ),
    new Recipe(
      'Another Recipe',
      'A longer description for the recipe',
      'http://hackingdistributed.com/images/2014-11-23-macaroons-in-hyperdex/pretty-macaroons.jpg',
      [
        new Ingredient('Apples', 55),
        new Ingredient('Pears', 55),
        new Ingredient('Bananas', 55)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
