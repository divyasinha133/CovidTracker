import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidscreenComponent } from './covidscreen/covidscreen.component';
import { DetailsscreenComponent } from './detailsscreen/detailsscreen.component';

const routes: Routes = [
  {
    path:"",component:CovidscreenComponent
  },
  {
    path:"details/:id",component:DetailsscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
