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

  // selectedReceipefromRecipeListcom: Recipe;

  // onClicked: boolean = false;

  ngOnInit(): void {
    // this.recipeServiceinstance.recipeElementEmitter.subscribe(
    //   (recipe: Recipe) => {
    //     this.onClicked = true;
    //     this.selectedReceipefromRecipeListcom = recipe;
    //   }
    // );
    // this.onClicked=true;
    // console.log(this.selectedReceipefromRecipeListcom);
  }

  // onClickForDetails(clickedElement: Recipe) {
  //   this.onClicked = true;
  //   // this.selectedReceipefromRecipeListcom = clickedElement;
  //   //console.log(this.selectedReceipefromRecipeListcom);
  // }
}
