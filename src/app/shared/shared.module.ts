import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormFieldComponent } from "./form-field/form-field.component";
import { LoadingComponent } from "./loading/loading.component";

const COMPONENTS = [FormFieldComponent, LoadingComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class SharedModule {}
