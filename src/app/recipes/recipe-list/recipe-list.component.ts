import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Desc path', 'http://hackingdistributed.com/images/2014-11-23-macaroons-in-hyperdex/pretty-macaroons.jpg'),
    new Recipe('Another Recipe', 'A longer description for the recipe', 'http://hackingdistributed.com/images/2014-11-23-macaroons-in-hyperdex/pretty-macaroons.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
