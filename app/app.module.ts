import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import './rxjs-extensions';

import { AppComponent } from './app.component';

import { RandomUsersService } from './services/random-users.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    RandomUsersService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }