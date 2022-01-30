import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { of, Subscription } from "rxjs";
import { catchError, filter, take } from "rxjs/operators";
import { User } from "../models/user";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string;
  public currentUser: User;
  public loading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("Sincere@april.biz", [
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
    this.loading = true;
    this.userService
      .login(this.loginForm.value)
      .pipe(
        take(1),
        catchError((val) => {
          this.errorMessage = `Error: ${val.message}`;
          this.loading = false;
          return of(null);
        }),
        filter((user) => user !== null)
      )
      .subscribe((user: User) => {
        if (user) {
          this.loading = false;
          this.router.navigate([""]);
        }
      });
  }
}
