import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServantListComponent } from './pages/servant-list/servant-list.component';
import { ServantDetailComponent } from './pages/servant-detail/servant-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './interceptors/http.interceptor';
import { RegisComponent } from './pages/login/regis/regis.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SaberComponent } from './pages/class/saber/saber.component';
import { ArcherComponent } from './pages/class/archer/archer.component';
import { LancerComponent } from './pages/class/lancer/lancer.component';
import { RiderComponent } from './pages/class/rider/rider.component';
import { CasterComponent } from './pages/class/caster/caster.component';
import { AssasinComponent } from './pages/class/assasin/assasin.component';
import { BerserkerComponent } from './pages/class/berserker/berserker.component';
import { RulerComponent } from './pages/class/ruler/ruler.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServantListComponent,
    ServantDetailComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    RegisComponent,
    LoginComponent,
    SaberComponent,
    ArcherComponent,
    LancerComponent,
    RiderComponent,
    CasterComponent,
    AssasinComponent,
    BerserkerComponent,
    RulerComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
