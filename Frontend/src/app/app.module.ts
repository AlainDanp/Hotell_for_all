import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayModule} from "@angular/cdk/overlay";
import {CdkMenuModule} from "@angular/cdk/menu";
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HeaderComponent } from './header/header.component';
import { ChamberComponent } from './chamber/chamber.component';
import { LoaderComponent } from './loader/loader.component';
import { CarouselChamberComponent } from './carousel-chamber/carousel-chamber.component';
import { ChamberGaleryComponent } from './chamber-galery/chamber-galery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent,
    LayoutComponent,
    CarouselComponent,
    ServicesComponent,
    TestimonialsComponent,
    BackToTopComponent,
    HeaderComponent,
    ChamberComponent,
    LoaderComponent,
    CarouselChamberComponent,
    ChamberGaleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    OverlayModule,
    CdkMenuModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
