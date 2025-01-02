import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServantDetailComponent } from './pages/servant-detail/servant-detail.component';
import { ServantListComponent } from './pages/servant-list/servant-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisComponent } from './pages/login/regis/regis.component';
import { AuthGuard } from './auth.guard';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SaberComponent } from './pages/class/saber/saber.component';
import { ArcherComponent } from './pages/class/archer/archer.component';
import { LancerComponent } from './pages/class/lancer/lancer.component';
import { RiderComponent } from './pages/class/rider/rider.component';
import { CasterComponent } from './pages/class/caster/caster.component';
import { AssasinComponent } from './pages/class/assasin/assasin.component';
import { BerserkerComponent } from './pages/class/berserker/berserker.component';
import { RulerComponent } from './pages/class/ruler/ruler.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servants', component: ServantListComponent },
  { path: 'servants/:servantId', component: ServantDetailComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisComponent },
  { path: 'class/saber', component: SaberComponent },
  { path: 'class/archer', component: ArcherComponent },
  { path: 'class/lancer', component: LancerComponent },
  { path: 'class/rider', component: RiderComponent },
  { path: 'class/caster', component: CasterComponent },
  { path: 'class/assassin', component: AssasinComponent },
  { path: 'class/berserker', component: BerserkerComponent },
  { path: 'class/ruler', component: RulerComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
