import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NewComponent } from "./new/new.component";
import { CaseComponent } from "./case/case.component";

const gameRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "new",
        component: NewComponent,
      },
      {
        path: "case",
        component: CaseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(gameRoutes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
