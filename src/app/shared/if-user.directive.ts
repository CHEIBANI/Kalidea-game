import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { User } from "../user/models/user";
import { UserService } from "../user/user.service";

@Directive({
  selector: "[appIfUser]",
})
export class IfUserDirective {
  constructor(
    protected elementRef: ElementRef,
    protected rendrer: Renderer2,
    protected userService: UserService
  ) {
    this.userService.user$.subscribe((user) => {
      this.update(user);
    });
  }

  protected update(user: User | null) {
    if (user) {
      this.rendrer.removeClass(this.elementRef.nativeElement, "d-none");
    } else {
      this.rendrer.addClass(this.elementRef.nativeElement, "d-none");
    }
  }
}
