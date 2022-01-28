import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
  public gridForm: FormGroup;
  table: any[string][string];

  constructor() {}

  ngOnInit(): void {
    this.gridForm = new FormGroup({
      rows: new FormControl(3, [Validators.required, Validators.min(1)]),
      cols: new FormControl(6, [Validators.required, Validators.min(1)]),
    });
    this.gridForm.valueChanges.subscribe((change) => {
      this.drawGrid(parseInt(change.rows), parseInt(change.cols));
    });
    this.drawGrid(this.gridForm.value.rows, this.gridForm.value.cols);
  }

  public drawGrid(rows: number, cols: number) {
    if (rows <= 0 || cols <= 0) {
      return;
    }
    this.table = Array.from(Array(rows).fill(""), () =>
      new Array(cols).fill("")
    );
  }
}
