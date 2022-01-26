import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { UserService } from "../user.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.scss"],
})
export class LogoutComponent implements OnInit {
  public subscription: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.userService
      .logout()
      .pipe(take(1))
      .subscribe(() => this.router.navigate([""]));
  }
}
