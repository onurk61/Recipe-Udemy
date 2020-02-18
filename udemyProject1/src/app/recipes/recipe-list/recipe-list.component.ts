import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Burger King',"Big King Menu!","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFW56Nof_Jk/v0/1000x-1.jpg"),
    new Recipe('Mc Donalds',"BigMac Menu!","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFW56Nof_Jk/v0/1000x-1.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
