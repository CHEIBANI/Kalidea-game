import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
