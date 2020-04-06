import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class recipeService {
  recipeElementEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "chopper",
      "imagine",
      "https://cdn.pixabay.com/photo/2014/12/18/14/49/helicopter-572511_1280.jpg"
    ),
    new Recipe(
      "Harley-D",
      "Fly",
      "https://cdn.pixabay.com/photo/2016/12/13/22/39/harley-davidson-1905281_1280.jpg"
    ),
  ];

  getRecipes(): Recipe[] {
    //slice will give a cope instead of recipes instance
    return this.recipes.slice();
  }
}
