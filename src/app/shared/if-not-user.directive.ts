import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { User } from "../user/models/user";
import { UserService } from "../user/user.service";
import { IfUserDirective } from "./if-user.directive";

@Directive({
  selector: "[appIfNotUser]",
})
export class IfNotUserDirective extends IfUserDirective {
  update(user: User | null) {
    if (!user) {
      this.rendrer.removeClass(this.elementRef.nativeElement, "d-none");
    } else {
      this.rendrer.addClass(this.elementRef.nativeElement, "d-none");
    }
  }
}
