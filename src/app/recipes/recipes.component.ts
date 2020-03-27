import { Component, OnInit } from "@angular/core";
import { Recipe } from ".././recipes/recipe.model";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClicked: boolean = false;

  selectedReceipefromRecipeListcom: Recipe;

  onClickForDetails(clickedElement: Recipe) {
    this.onClicked = true;
    this.selectedReceipefromRecipeListcom = clickedElement;
    //console.log(this.selectedReceipefromRecipeListcom);
  }
}
