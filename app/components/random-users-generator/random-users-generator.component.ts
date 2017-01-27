import { RandomUser } from './../../models/random-user/random-user.model';
import { Gender } from './../../models/random-user/properties/gender.model';

import { Component, Input, OnInit } from '@angular/core';

import { RandomUsersService } from '../../services/random-users.service';

@Component({
  selector: 'random-users-generator',
  templateUrl: 'app/components/random-users-generator/random-users-generator.component.html',
  styleUrls: ['app/styles/random-users-generator/random-users-generator.css']
})

export class RandomUsersGeneratorComponent implements OnInit {
  
  @Input()
  
  randomUser: RandomUser;
  selectedGender : Gender;

  constructor(
    private randomUsersService: RandomUsersService
  ) { };

  ngOnInit(): void {
    this.selectedGender = Gender.Any;

    console.clear();
    console.log(this.selectedGender);
    console.log(Gender[this.selectedGender]);

    this.getRandomUser();
  };

  getRandomUser(): void {
    this.randomUsersService.getRandomUser(this.selectedGender)
      .then(randomUser => {
        this.randomUser = randomUser;
        console.log(this.randomUser);
      });
  }
};