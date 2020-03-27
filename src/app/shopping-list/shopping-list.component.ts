import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
// import { Ingredient } from "./../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}

  //isClicked: boolean = false;

  shopping_edit_elements(clickedElement: Ingredient[]) {
    //this.isClicked = true;
    this.ingredients = clickedElement;
  }
}
