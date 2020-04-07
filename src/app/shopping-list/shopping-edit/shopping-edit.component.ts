import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { shoppingListService } from "./../shoppingListService";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: shoppingListService) {}

  ngOnInit(): void {}

  @ViewChild("nameInput") nameValue: ElementRef;
  @ViewChild("amountInput") amountValue: ElementRef;

  name: string;
  amount: number;

  shoppingElement: Ingredient;

  //  shoppingElementsArray: Array<{ name: string; amount: number }> = [];

  //@Output() shoppingElementEmitter = new EventEmitter<Array<Ingredient>>();

  getIngredientsFromUserInput(): Ingredient {
    this.name = this.nameValue.nativeElement.value;
    this.amount = this.amountValue.nativeElement.value;
    return { name: this.name, amount: this.amount };
  }

  onClickAddItem() {
    // this.name = this.nameValue.nativeElement.value;
    // this.amount = this.amountValue.nativeElement.value;
    this.shoppingElement = this.getIngredientsFromUserInput();
    this.shoppingListService.addtoShoppingElementsArray(this.shoppingElement);
  }

  onClickDeleteItem() {
    // this.name = this.nameValue.nativeElement.value;
    // this.amount = this.amountValue.nativeElement.value;
    this.shoppingElement = this.getIngredientsFromUserInput();

    this.shoppingListService.deletefromShoppingElementsArray(
      this.shoppingElement
    );
  }

  onClickClearItem() {
    this.shoppingListService.clearfromShoppingElementsArray();
  }
  onClickEmit() {
    this.shoppingListService.shoppingElementEmitter.emit(
      this.shoppingListService.getShoppingElelmentsArray()
    );
  }
}
