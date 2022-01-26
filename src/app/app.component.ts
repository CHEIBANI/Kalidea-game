import { Component, OnInit } from "@angular/core";
import { User } from "./user/models/user";
import { UserService } from "./user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public currentUser = this.userService.user$;

  constructor(private userService: UserService) {}
}
