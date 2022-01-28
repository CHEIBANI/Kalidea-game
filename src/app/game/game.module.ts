import { NgModule } from "@angular/core";
import { NewComponent } from "./new/new.component";
import { CaseComponent } from "./case/case.component";
import { GameRoutingModule } from "./game-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NewComponent, CaseComponent],
  imports: [
    SharedModule,
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class GameModule {}
