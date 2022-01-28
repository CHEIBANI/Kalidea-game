import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"],
})
export class NewComponent implements OnInit {
  public gridForm: FormGroup;

  public table: string[][];
  timeout;

  constructor() {}

  ngOnInit(): void {
    this.gridForm = new FormGroup({
      rows: new FormControl(3, [Validators.required, Validators.min(1)]),
      cols: new FormControl(6, [Validators.required, Validators.min(1)]),
    });
    this.gridForm.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((change) => {
        this.drawGrid(parseInt(change.rows), parseInt(change.cols));
      });
    this.drawGrid(this.gridForm.value.rows, this.gridForm.value.cols);
  }

  public drawGrid(rows: number, cols: number) {
    if (rows <= 0 || cols <= 0) {
      return;
    }
    if (!this.table) {
      this.table = Array.from(Array(rows).fill(""), () =>
        new Array(cols).fill("")
      );
    } else {
      this.updateGrid(rows, cols);
    }
  }

  public updateGrid(rows: number, cols: number) {
    let diff;
    if (this.table.length > rows) {
      this.table.length = rows;
    } else if (this.table.length < rows) {
      diff = rows - this.table.length;
      for (let i = 0; i < diff; i++) {
        this.table.push(Array(this.table[i].length));
      }
    }

    if (this.table[0].length > cols) {
      diff = this.table.length;
      for (let i = 0; i < diff; i++) {
        this.table[i].length = cols;
      }
    } else if (this.table[0].length < cols) {
      for (let i = 0; i < this.table.length; i++) {
        diff = cols - this.table.length + 2;
        for (let j = 0; j < diff; j++) {
          this.table[i].push("");
        }
      }
    }
  }
}
