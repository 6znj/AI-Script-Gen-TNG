import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthWithJwtPageComponent } from './auth-with-jwt-page/auth-with-jwt-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { NotAuthenticatedAlertComponent } from './not-authenticated-alert/not-authenticated-alert.component';
import { NgxStripeModule } from 'ngx-stripe';
import { CheckoutWithStripeComponent } from './checkout-with-stripe/checkout-with-stripe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 