import { Component, OnInit } from "@angular/core";
import { Recipe } from ".././recipes/recipe.model";
import { recipeService } from "./recipeService";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [recipeService],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeServiceinstance: recipeService) {}

  ngOnInit(): void {}

  onClicked: boolean = false;

  selectedReceipefromRecipeListcom: Recipe;

  onClickForDetails(clickedElement: Recipe) {
    this.onClicked = true;
    this.selectedReceipefromRecipeListcom = clickedElement;
    //console.log(this.selectedReceipefromRecipeListcom);
  }
}
