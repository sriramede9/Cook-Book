import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
// import { Ingredient } from "./../shared/ingredient.model";
import { shoppingListService } from "./shoppingListService";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  private ingredientSubject: Subscription;

  constructor(private shoppingListService: shoppingListService) {
    // this.ingredients = this.shoppingListService.getShoppingElelmentsArray();
  }

  ngOnInit(): void {
    // this.shoppingListService.shoppingElementEmitter.subscribe((ingrediets) => {
    //   this.ingredients = ingrediets;
    // });
    this.ingredientSubject = this.shoppingListService.shoppingElementEmitterSubject.subscribe(
      (ingrediets) => {
        this.ingredients = ingrediets;
      }
    );
    this.ingredients = this.shoppingListService.getShoppingElelmentsArray();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.ingredientSubject.unsubscribe();
  }

  //isClicked: boolean = false;

  // shopping_edit_elements(clickedElement: Ingredient[]) {
  //   //this.isClicked = true;
  //   this.ingredients = clickedElement;
  // }
}
