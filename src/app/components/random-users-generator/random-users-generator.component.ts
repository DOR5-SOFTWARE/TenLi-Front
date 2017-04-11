import { RandomUser } from '../../models/random-user/random-user.model';
import { Gender } from '../../models/random-user/properties/gender.model';

import { Component, Input, OnInit, NgZone } from '@angular/core';

import { RandomUsersService } from 'app/services/random-users.service';

@Component({
  selector: 'random-users-generator',
  templateUrl: 'random-users-generator.component.html',
  styleUrls: ['random-users-generator.component.css']
})

export class RandomUsersGeneratorComponent implements OnInit {

  @Input()

  gender = Gender;
  showModalMessage = false;
  randomUser: RandomUser;
  selectedGender: Gender;
  clipboardText = "";

  constructor(
    private randomUsersService: RandomUsersService,
    private zone: NgZone
  ) {
    window['randomUsersGenerator'] = {
      zone: this.zone,
      toggleCredits: () => this.toggleCredits(),
      component: this
    }
  };

  ngOnInit(): void {
    this.selectedGender = Gender.Any;
    this.getRandomUser();
  };

  getRandomUser(): void {
    this.randomUsersService.getRandomUser(this.selectedGender)
      .then(randomUser => {
        this.randomUser = randomUser;
      });
  }

  selectGender(gender: Gender): void {
    this.selectedGender = gender;
  }

  getUserFullname(): string {
    return this.randomUser.firstname.hebValue + ' ' + this.randomUser.lastname.hebValue;
  }

  getUserUsername(): string {
    return this.randomUser.firstname.engValue + '.' + this.randomUser.lastname.engValue
  }

  getUserDetailsText(): string {
    var userDetailsText = "";

    if (!this.randomUser)
      return userDetailsText;

    userDetailsText += this.getUserFullname() + "\n";
    userDetailsText += this.randomUser.email + "\n";
    userDetailsText += this.getUserUsername() + "\n";
    userDetailsText += this.randomUser.phoneNumber + "\n";
    userDetailsText += this.randomUser.address.addressString + "\n";

    return userDetailsText;
  }

  showCopiedToClipboardModal(text: string): void {
    this.clipboardText = text;
    this.showModalMessage = true;
    setTimeout(() => { this.showModalMessage = false }, 500);
  }

  toggleCredits(): void {
    console.info("Toggle Credit was called!");
    this.randomUser = null;
  }
};