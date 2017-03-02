/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PassportService } from './passport.service';

describe('Service: Passport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassportService]
    });
  });

  it('should ...', inject([PassportService], (service: PassportService) => {
    expect(service).toBeTruthy();
  }));
});
