import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [SharedModule, UserRoutingModule, ReactiveFormsModule, CommonModule],
})
export class UserModule {}
