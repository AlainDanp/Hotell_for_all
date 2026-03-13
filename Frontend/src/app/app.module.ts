import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { LayoutComponent } from './component/layout/layout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayModule} from "@angular/cdk/overlay";
import {CdkMenuModule} from "@angular/cdk/menu";
import { CarouselComponent } from './component/carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BackToTopComponent } from './component/back-to-top/back-to-top.component';
import { HeaderComponent } from './component/header/header.component';
import { ChamberComponent } from './component/chamber/chamber.component';
import { LoaderComponent } from './component/loader/loader.component';
import { CarouselChamberComponent } from './component/carousel-chamber/carousel-chamber.component';
import { ChamberGaleryComponent } from './component/chamber-galery/chamber-galery.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { ServicePageComponent } from './component/service-page/service-page.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PaymentComponent } from './component/payment/payment.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RouterModule } from '@angular/router';

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
    ChamberGaleryComponent,
    ReservationComponent,
    ContactComponent,
    AboutComponent,
    ServicePageComponent,
    NotFoundComponent,
    ProfileComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    OverlayModule,
    CdkMenuModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
