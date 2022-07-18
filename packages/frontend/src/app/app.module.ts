import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthWithJwtPageComponent } from './auth-with-jwt-page/auth-with-jwt-page.component';
import { GeneratorComponent } from './generator/generator.component';
import { NotAuthenticatedAlertComponent } 