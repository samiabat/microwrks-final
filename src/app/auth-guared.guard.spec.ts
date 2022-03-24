import { TestBed } from '@angular/core/testing';

import { AuthGuaredGuard } from './auth-guared.guard';

describe('AuthGuaredGuard', () => {
  let guard: AuthGuaredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuaredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
