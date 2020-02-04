import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TestRecipe',"This is just a test !","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFW56Nof_Jk/v0/1000x-1.jpg"),
    new Recipe('TestRecipe',"This is just a test !","https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibFW56Nof_Jk/v0/1000x-1.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
