import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
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
import { Routes, RouterModule } from "@angular/router";
import { AppRouting } from "./app_routing.module";
import { ErrorPageComponent } from "../error-page/error-page.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, AppRouting],
  providers: [shoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
