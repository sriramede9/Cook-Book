import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";
@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() recipes: Recipe[] = [];

  @Output() recipeElementEmitter = new EventEmitter<Recipe>();

  recipeElimentSelected: Recipe = new Recipe("", "", "");

  onClickAssignValue(valueSelected) {
    this.recipeElimentSelected = valueSelected;
    //console.log(valueSelected);
  }

  onClickforDetails() {
    this.recipeElementEmitter.emit(this.recipeElimentSelected);
  }
}
