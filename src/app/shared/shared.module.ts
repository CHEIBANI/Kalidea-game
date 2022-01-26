import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormFieldComponent } from "./form-field/form-field.component";
import { LoadingComponent } from "./loading/loading.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const COMPONENTS = [FormFieldComponent, LoadingComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: COMPONENTS,
})
export class SharedModule {}
