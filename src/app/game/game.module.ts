import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CaseComponent } from "./case/case.component";
import { GameRoutingModule } from "./game-routing.module";
import { NewComponent } from "./new/new.component";

@NgModule({
  declarations: [NewComponent, CaseComponent],
  imports: [SharedModule, GameRoutingModule, FormsModule, ReactiveFormsModule],
})
export class GameModule {}
