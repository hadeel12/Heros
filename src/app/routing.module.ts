import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {HerosComponent} from './heros/heros.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'heroes', component: HerosComponent },
  { path: 'details/:id', component: HeroDetailsComponent }
];

@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ],
  ],
  exports: [RouterModule],
})


export class RoutingModule {
}
