import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";
import { recipeService } from "./../recipeService";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeServiceinstance: recipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeServiceinstance.getRecipes();
  }

  //@Output() recipe-list-Emitter = new EventEmitter<Recipe>();

  // @Output() recipelistEmitter = new EventEmitter<Recipe>();
}
