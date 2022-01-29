import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [SharedModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
})
export class UserModule {}
