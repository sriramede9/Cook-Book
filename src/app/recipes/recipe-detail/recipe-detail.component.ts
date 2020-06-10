import { Component, OnInit, Input } from "@angular/core";

import { Recipe } from "./../recipe.model";
import { recipeService } from "./../recipeService";
import { Ingredient } from "./../../shared/ingredient.model";
import { shoppingListService } from "./../../shopping-list/shoppingListService";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe_list_element: Recipe;

  recipe_list_element: Recipe;
  id: number;

  constructor(
    private recipeServiceinstance: recipeService,
    private shoppingListService: shoppingListService,
    private routes: ActivatedRoute,

    private rout: Router
  ) {}

  ngOnInit(): void {
    // this.recipeServiceinstance.recipeElementEmitter.subscribe(
    //   (recipe: Recipe) => {
    //     // this.onClicked = true;
    //     this.recipe_list_element = recipe;
    //   }
    // );
    this.routes.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe_list_element = this.recipeServiceinstance.getRecipes()[
        +params["id"]
      ];
    });
  }
  addToShoppingList() {
    this.recipeServiceinstance.addToShoppingListArray(
      this.recipe_list_element.ingredients
    );
  }

  addToEdit() {
    // console.log(this.recipe_list_element);
    this.rout.navigate(["edit"], { relativeTo: this.routes });

    this.rout.navigate(["../", this.id, "edit"], { relativeTo: this.routes });
  }
}
