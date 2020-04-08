import { Component, OnInit, Input } from "@angular/core";

import { Recipe } from "./../recipe.model";
import { recipeService } from "./../recipeService";
import { Ingredient } from "./../../shared/ingredient.model";
import { shoppingListService } from "./../../shopping-list/shoppingListService";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe_list_element: Recipe;

  constructor(
    private recipeServiceinstance: recipeService,
    private shoppingListService: shoppingListService
  ) {}

  ngOnInit(): void {
    // this.recipeServiceinstance.recipeElementEmitter.subscribe(
    //   (recipe: Recipe) => {
    //     // this.onClicked = true;
    //     this.recipe_list_element = recipe;
    //   }
    // );
  }
  addToShoppingList() {
    this.recipeServiceinstance.addToShoppingListArray(
      this.recipe_list_element.ingredients
    );
  }
}
