import { Component, HostBinding, HostListener, Input } from "@angular/core";

@Component({
  selector: "app-case",
  templateUrl: "./case.component.html",
  styleUrls: ["./case.component.scss"],
})
export class CaseComponent {
  @Input()
  @HostBinding("style.background")
  public color: string = "";

  @HostBinding("className") componentClass: string;

  constructor() {
    this.componentClass = "card";
  }

  @HostListener("click")
  onClick() {
    this.color = prompt("insert color");
  }
}
