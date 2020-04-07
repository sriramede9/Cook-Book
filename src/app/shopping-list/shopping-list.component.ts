import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
// import { Ingredient } from "./../shared/ingredient.model";
import { shoppingListService } from "./shoppingListService";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  providers: [shoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: shoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.shoppingElementEmitter.subscribe((ingrediets) => {
      this.ingredients = ingrediets;
    });
  }

  //isClicked: boolean = false;

  // shopping_edit_elements(clickedElement: Ingredient[]) {
  //   //this.isClicked = true;
  //   this.ingredients = clickedElement;
  // }
}
