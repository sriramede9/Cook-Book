import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { recipeService } from "./../../recipeService";
@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeServiceinstance: recipeService) {}

  ngOnInit(): void {}

  @Input() recipes: Recipe[] = [];

  // @Output() recipeElementEmitter = new EventEmitter<Recipe>();

  recipeElimentSelected: Recipe;

  onClickAssignValue(valueSelected) {
    this.recipeElimentSelected = valueSelected;
    //console.log(valueSelected);
  }

  onClickforDetails() {
    // this.recipeElementEmitter.emit(this.recipeElimentSelected);
    this.recipeServiceinstance.recipeElementEmitter.emit(
      this.recipeElimentSelected
    );
    // console.log(this.recipeElimentSelected);
  }
}
