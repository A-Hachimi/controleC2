import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsDetailsComponent } from './cars-details.component';

const routes: Routes = [{ path: '', component: CarsDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsDetailsRoutingModule { }
