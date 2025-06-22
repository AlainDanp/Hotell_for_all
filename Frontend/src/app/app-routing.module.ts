import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./home/home.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {HeaderComponent} from "./header/header.component";
import {ChamberComponent} from "./chamber/chamber.component";

const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component:LoginComponent},
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'Homepage', component:HomeComponent },
      {path: 'Chamber', component:ChamberComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
