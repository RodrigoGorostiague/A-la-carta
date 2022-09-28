import { TestBed } from '@angular/core/testing';

import { MenuCartServiceTsService } from './menu-cart.service.ts.service';

describe('MenuCartServiceTsService', () => {
  let service: MenuCartServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCartServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
