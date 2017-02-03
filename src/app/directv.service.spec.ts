/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectvService } from './directv.service';

describe('DirectvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectvService]
    });
  });

  it('should ...', inject([DirectvService], (service: DirectvService) => {
    expect(service).toBeTruthy();
  }));
});
