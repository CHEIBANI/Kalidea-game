import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { of, Subscription } from "rxjs";
import { catchError, filter } from "rxjs/operators";
import { User } from "../models/user";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public errorMessage: string;
  public currentUser: User;
  public subscription: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("john@doe", [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl("abcde", [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  public async onSubmit() {
    this.subscription = this.userService
      .login(this.loginForm.value)
      .pipe(
        catchError((val) => {
          this.errorMessage = `Error: ${val.message}`;
          return of(null);
        }),
        filter((user) => user !== null)
      )
      .subscribe((user: User) => {
        if (user) {
          this.router.navigate([""]);
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
