import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormFieldComponent } from "./form-field/form-field.component";
import { LoadingComponent } from "./loading/loading.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IfUserDirective } from "./if-user.directive";
import { IfNotUserDirective } from "./if-not-user.directive";

@NgModule({
  declarations: [
    FormFieldComponent,
    LoadingComponent,
    IfUserDirective,
    IfNotUserDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormFieldComponent,
    LoadingComponent,
    IfUserDirective,
    IfNotUserDirective,
    CommonModule,
  ],
})
export class SharedModule {}
