import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {HerosComponent} from './heros/heros.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'heroes', component: HerosComponent }
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],
  ],
  declarations: [],
  exports: [RouterModule],
})


export class RoutingModule {
}
