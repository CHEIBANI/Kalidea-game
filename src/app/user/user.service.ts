import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { delay, skip, tap } from "rxjs/operators";
import { Credentials } from "./models/credentials";
import { User } from "./models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private static readonly storageKey = "user";
  private static readonly delay = 800;
  private userSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    const storedUser = JSON.parse(
      localStorage.getItem(UserService.storageKey) || "null"
    );
    this.userSubject = new BehaviorSubject<User | null>(storedUser);
    this.userSubject
      .pipe(
        skip(1), // skip first emission
        tap((user) =>
          localStorage.setItem(UserService.storageKey, JSON.stringify(user))
        )
      )
      .subscribe();
  }

  get user(): User | null {
    return this.userSubject.value;
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  login({ password, email }: Credentials): Observable<User> {
    let obs: Observable<User>;
    let user;
    return new Observable((subscriber) => {
      this.http
        .get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
        .subscribe((data: unknown[]) => {
          if (data && data.length > 0 && password === "abcde") {
            user = {
              id: "5fc62fdb5eb04def08ac913a",
              username: "JohnDoe",
            };
            this.userSubject.next(user);
          } else {
            subscriber.error(new Error("invalid credential"));
          }
          subscriber.next(user);
        });
    });
  }

  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(UserService.delay),
      tap(() => this.userSubject.next(null))
    );
  }
}
