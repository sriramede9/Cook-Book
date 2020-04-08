import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class shoppingListService {
  shoppingElementEmitter = new EventEmitter<Array<Ingredient>>();

  private shoppingElementsArray: Array<{ name: string; amount: number }> = [
    new Ingredient("test", 3),
  ];

  getShoppingElelmentsArray() {
    return this.shoppingElementsArray.slice();
  }

  addtoShoppingElementsArray(ingredient: Ingredient) {
    this.shoppingElementsArray.push(ingredient);
    this.shoppingElementEmitter.emit(this.getShoppingElelmentsArray());
  }

  addmultipleShoppingElementsArray(ingredients: Ingredient[]) {
    this.shoppingElementsArray.push(...ingredients);
    this.shoppingElementEmitter.emit(this.getShoppingElelmentsArray());
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
    this.shoppingElementEmitter.emit(this.getShoppingElelmentsArray());
  }

  clearfromShoppingElementsArray() {
    this.shoppingElementsArray = [];
    this.shoppingElementEmitter.emit(this.getShoppingElelmentsArray());
  }
}
