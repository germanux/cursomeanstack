/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibliotecaService } from './biblioteca.service';

describe('Service: Biblioteca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliotecaService]
    });
  });

  it('should ...', inject([BibliotecaService], (service: BibliotecaService) => {
    expect(service).toBeTruthy();
  }));
});
