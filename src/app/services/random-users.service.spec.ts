/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomUsersService } from './random-users.service';

describe('RandomUsersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomUsersService]
    });
  });

  it('should ...', inject([RandomUsersService], (service: RandomUsersService) => {
    expect(service).toBeTruthy();
  }));
});
