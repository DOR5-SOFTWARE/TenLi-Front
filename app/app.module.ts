import { RandomUsersGeneratorComponent } from './components/random-users-generator/random-users-generator.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './components/app/app.component';


import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";

import { RandomUsersService } from './services/random-users.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RandomUsersGeneratorComponent,
    MnFullpageDirective
  ],
  providers: [
    RandomUsersService,
    MnFullpageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }