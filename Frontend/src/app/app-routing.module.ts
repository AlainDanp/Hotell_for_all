import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {HomeComponent} from "./component/home/home.component";
import {ChamberComponent} from "./component/chamber/chamber.component";
import {ReservationComponent} from "./component/reservation/reservation.component";
import {ContactComponent} from "./component/contact/contact.component";
import {AboutComponent} from "./component/about/about.component";
import {ServicePageComponent} from "./component/service-page/service-page.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {ProfileComponent} from "./component/profile/profile.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
  {
    path:'',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {path:'Homepage', component:HomeComponent },
      {path: 'Chamber', component:ChamberComponent},
      {path: 'Reservation', component:ReservationComponent},
      {path: 'Contact', component:ContactComponent},
      {path: 'About', component:AboutComponent},
      {path: 'Services', component:ServicePageComponent},
      {path: 'Profile', component:ProfileComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
