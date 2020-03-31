import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  dropdownselectedvalue: boolean = false;

  ngOnInit(): void {}

  @Output() featureSelected = new EventEmitter<string>();
  @Output() dropdownSelected = new EventEmitter<boolean>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onDropdownSelected() {
    this.dropdownselectedvalue = true;
    this.dropdownSelected.emit(this.dropdownselectedvalue);
    // console.log(this.dropdownselected);
  }
}
