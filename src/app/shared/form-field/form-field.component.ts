import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-field",
  templateUrl: "./form-field.component.html",
  styleUrls: ["./form-field.component.scss"],
})
export class FormFieldComponent implements OnInit {
  @Input()
  public formGroup: FormGroup;

  @Input()
  public controlName: string;

  @Input()
  public inputTitle: string;

  @Input()
  public inputType: string;

  @Input()
  public inputId: string;

  @Input()
  public isRequired: boolean;

  constructor() {}

  ngOnInit(): void {}
}
