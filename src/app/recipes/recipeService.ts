import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "./../shopping-list/shoppingListService";
import { Subject } from "rxjs";

@Injectable()
export class recipeService {
  constructor(private shoppingListService: shoppingListService) {}

  recipeElementEmitter = new EventEmitter<Recipe>();
  // recipeElementEmitterSubject = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Poutine",
      "It's just awesome",
      "https://cdn.pixabay.com/photo/2020/03/22/16/18/bread-4957679_1280.jpg",
      [
        new Ingredient("Meat", 1),
        new Ingredient("fries", 1),
        new Ingredient("sauce", 2),
      ]
    ),
    new Recipe(
      "Oreo Almond Shake",
      "Oreo chocky",
      "https://cdn.pixabay.com/photo/2017/08/05/18/58/milk-2585099_1280.jpg",
      [
        new Ingredient("oreo biscuits", 5),
        new Ingredient("almond milk", 3),
        new Ingredient("dates", 4),
      ]
    ),
  ];

  getRecipes(): Recipe[] {
    //slice will give a cope instead of recipes instance
    return this.recipes.slice();
  }

  addToShoppingListArray(ingrediets: Ingredient[]) {
    ingrediets.forEach((item) => {
      this.shoppingListService.addtoShoppingElementsArray(item);
    });
  }
}
