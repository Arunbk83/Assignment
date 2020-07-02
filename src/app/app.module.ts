import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductHomePageComponent } from './product-home-page/product-home-page.component';
import {ApiServiceService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductHomePageComponent
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpModule,HttpClientModule,
    routing
  ],
  providers: [HttpClientModule,ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
