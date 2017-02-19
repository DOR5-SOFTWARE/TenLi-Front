import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RandomUsersGeneratorComponent } from './random-users-generator/random-users-generator.component';
import { RandomUsersService } from './services/random-users.service';

@NgModule({
  declarations: [
    RandomUsersGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RandomUsersService
  ],
  bootstrap: [RandomUsersGeneratorComponent]
})
export class AppModule { }
