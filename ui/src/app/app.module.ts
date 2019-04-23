import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTokenComponent } from './get-token/get-token.component';
import { CallResourcesComponent } from './call-resources/call-resources.component';
import { AppService } from './services/service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './services/authservice';

@NgModule({
  declarations: [
    AppComponent,
    GetTokenComponent,
    CallResourcesComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService, CookieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
