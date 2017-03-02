/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasicService } from './basic.service';

describe('Service: Basic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicService]
    });
  });

  it('should ...', inject([BasicService], (service: BasicService) => {
    expect(service).toBeTruthy();
  }));
});
