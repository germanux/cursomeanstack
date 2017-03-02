/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermisoAccesoService } from './permiso-acceso.service';

describe('Service: PermisoAcceso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermisoAccesoService]
    });
  });

  it('should ...', inject([PermisoAccesoService], (service: PermisoAccesoService) => {
    expect(service).toBeTruthy();
  }));
});
