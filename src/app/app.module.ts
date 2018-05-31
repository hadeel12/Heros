import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService} from './hero.service';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
