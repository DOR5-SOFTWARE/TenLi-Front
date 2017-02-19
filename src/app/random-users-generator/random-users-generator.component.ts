import { RandomUser } from '../models/random-user/random-user.model';
import { Gender } from '../models/random-user/properties/gender.model';

import { Component, Input, OnInit } from '@angular/core';

import { RandomUsersService } from '../services/random-users.service';

@Component({
  selector: 'random-users-generator',
  templateUrl: 'random-users-generator.component.html',
  styleUrls: ['../styles/random-users-generator/random-users-generator.css']
})

export class RandomUsersGeneratorComponent implements OnInit {

  @Input()

  randomUser: RandomUser;
  selectedGender: Gender;

  constructor(
    private randomUsersService: RandomUsersService
  ) { };

  public gender = Gender;

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
};