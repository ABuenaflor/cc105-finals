import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DataComponent } from './data/data.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DataComponent,
    DataEditComponent,
    DatatableComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC-xAGD6Gp4sRfhC00j9CUbrCsHrkHrWhM",
      authDomain: "angular-auth-2c467.firebaseapp.com",
      projectId: "angular-auth-2c467",
      storageBucket: "angular-auth-2c467.appspot.com",
      messagingSenderId: "260805271056",
      appId: "1:260805271056:web:54eb4655fe478a930c7495"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
