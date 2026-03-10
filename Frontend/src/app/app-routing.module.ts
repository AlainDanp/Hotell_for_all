import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {LayoutComponent} from "./component/layout/layout.component";
import {HomeComponent} from "./component/home/home.component";
import {CarouselComponent} from "./component/carousel/carousel.component";
import {HeaderComponent} from "./component/header/header.component";
import {ChamberComponent} from "./component/chamber/chamber.component";
import {ReservationComponent} from "./component/reservation/reservation.component";

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'Homepage', component:HomeComponent },
      {path: 'Chamber', component:ChamberComponent},
      {path: 'Reservation', component:ReservationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
