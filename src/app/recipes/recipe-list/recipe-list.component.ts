import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "chopper",
      "imagine",
      "https://cdn.pixabay.com/photo/2014/12/18/14/49/helicopter-572511_1280.jpg"
    ),
    new Recipe(
      "Harley-D",
      "Fly",
      "https://cdn.pixabay.com/photo/2016/12/13/22/39/harley-davidson-1905281_1280.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}

  //@Output() recipe-list-Emitter = new EventEmitter<Recipe>();
  @Output() recipelistEmitter = new EventEmitter<Recipe>();
}
