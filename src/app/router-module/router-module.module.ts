import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WellcomeComponent } from '../wellcome/wellcome.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path : "wellcome" , component : WellcomeComponent },
      { path : "pathnotfound" , component : PathNotFoundComponent },
      { path : "" , redirectTo : "wellcome" , pathMatch : "full"},
      { path : "**" , component :  PathNotFoundComponent }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class RouterModuleModule { }
