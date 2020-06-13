import { Component } from "@angular/core";
import { shoppingListService } from "./shopping-list/shoppingListService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "cook-book";

  constructor(private shoppingListService: shoppingListService) {}

  // featureSelectedInHeader: string;

  // onFeatureSelectedInHeader(feature: string) {
  //   this.featureSelectedInHeader = feature;
  // }
}
