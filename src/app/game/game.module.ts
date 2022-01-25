import { NgModule } from "@angular/core";
import { NewComponent } from "./new/new.component";
import { CaseComponent } from "./case/case.component";
import { GameRoutingModule } from "./game-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [NewComponent, CaseComponent],
  imports: [SharedModule, GameRoutingModule],
})
export class GameModule {}
