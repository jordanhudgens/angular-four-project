import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
