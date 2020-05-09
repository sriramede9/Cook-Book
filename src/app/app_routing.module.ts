import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
// tslint:disable-next-line: quotemark
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
// tslint:disable-next-line: quotemark
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

import { DropdownDirective } from "./shared/dropdown.directive";
import { shoppingListService } from "./shopping-list/shoppingListService";
import { ErrorPageComponent } from "./../error-page/error-page.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", component: RecipesComponent },
  { path: "shoppingList", component: ShoppingListComponent },
  { path: "error-page", component: ErrorPageComponent },
  { path: "**", redirectTo: "/error-page" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouting {}
