# CookBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Iteration-2

- **topics-worked-on**

  - @Output, EventEmitter in Header module to have a filter on app-module to render the component bases on selection on Header component,Uses ngIf in app-module

## Iteraton-3

- **directives**

  - ` export class DropdownDirective {
  - @HostBinding("class.open") isOpen = false;

  - @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
    }
    `

## Iteraton-4

- **Services**
- **recipeService and shoppingListService**
- **Moved Recipe array to recipe service, providers array in recipe**
- **Moved shopping-edit array operations to shoppingListServices, providers array in shoppingList**
