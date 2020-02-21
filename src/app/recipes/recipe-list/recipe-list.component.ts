import { Component, OnInit } from "@angular/core";

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
      "chopper",
      "imagine",
      "https://cdn.pixabay.com/photo/2014/12/18/14/49/helicopter-572511_1280.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
