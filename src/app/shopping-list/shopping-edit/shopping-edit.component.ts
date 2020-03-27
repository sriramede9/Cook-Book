import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild("nameInput") nameValue: ElementRef;
  @ViewChild("amountInput") amountValue: ElementRef;

  name: string;
  amount: number;

  shoppingElement: Ingredient;

  shoppingElementsArray: Array<{ name: string; amount: number }> = [];

  @Output() shoppingElementEmitter = new EventEmitter<Array<Ingredient>>();

  onClickAddItem() {
    this.name = this.nameValue.nativeElement.value;
    this.amount = this.amountValue.nativeElement.value;
    this.shoppingElement = { name: this.name, amount: this.amount };
    this.shoppingElementsArray.push(this.shoppingElement);

    // for (var x of this.shoppingElementsArray) {
    //   console.log(x.name + " .Added...." + x.amount);
    // }
  }

  onClickDeleteItem() {
    this.name = this.nameValue.nativeElement.value;
    this.amount = this.amountValue.nativeElement.value;
    this.shoppingElement = { name: this.name, amount: this.amount };

    this.shoppingElementsArray.forEach((item, index) => {
      if (
        (item.name && item.amount) ===
        (this.shoppingElement.name && this.shoppingElement.amount)
      ) {
        // console.log(item.name + "..." + item.amount);
        this.shoppingElementsArray.splice(index, 1);
      }
    });
  }

  onClickClearItem() {
    this.shoppingElementsArray = [];
  }
  onClickEmit() {
    this.shoppingElementEmitter.emit(this.shoppingElementsArray);
  }
}
