import { TestBed } from '@angular/core/testing';

import { AuthorizeDashboardGuard } from './authorize-dashboard.guard';

describe('AuthorizeDashboardGuard', () => {
  let guard: AuthorizeDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizeDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
