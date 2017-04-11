import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';

import { RandomUsersGeneratorComponent } from './components/random-users-generator/random-users-generator.component';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';

import { RandomUsersService } from './services/random-users.service';

@NgModule({
  declarations: [
    RandomUsersGeneratorComponent,
    ModalMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule
  ],
  providers: [
    RandomUsersService
  ],
  bootstrap: [RandomUsersGeneratorComponent]
})
export class AppModule { }
