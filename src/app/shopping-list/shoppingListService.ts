import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class shoppingListService {
  shoppingElementEmitter = new EventEmitter<Array<Ingredient>>();

  private shoppingElementsArray: Array<{ name: string; amount: number }> = [];

  getShoppingElelmentsArray() {
    return this.shoppingElementsArray.slice();
  }

  addtoShoppingElementsArray(ingredient: Ingredient) {
    this.shoppingElementsArray.push(ingredient);
  }

  deletefromShoppingElementsArray(shoppingElement: Ingredient) {
    this.shoppingElementsArray.forEach((item, index) => {
      if (
        (item.name && item.amount) ===
        (shoppingElement.name && shoppingElement.amount)
      ) {
        // console.log(item.name + "..." + item.amount);
        this.shoppingElementsArray.splice(index, 1);
      }
    });
  }

  clearfromShoppingElementsArray() {
    this.shoppingElementsArray = [];
  }
}
