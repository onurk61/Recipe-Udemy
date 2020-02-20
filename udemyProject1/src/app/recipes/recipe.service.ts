import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Burger King',"Big King Menu!","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFW56Nof_Jk/v0/1000x-1.jpg"),
        new Recipe('Mc Donalds',"BigMac Menu!","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFW56Nof_Jk/v0/1000x-1.jpg")
      ];

    getRecipes(){
        return this.recipes.slice();
    }

}