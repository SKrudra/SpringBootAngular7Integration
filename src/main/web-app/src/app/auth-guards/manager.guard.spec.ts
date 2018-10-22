import { TestBed, async, inject } from '@angular/core/testing';

import { ManagerGuard } from './manager.guard';

describe('ManagerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerGuard]
    });
  });

  it('should ...', inject([ManagerGuard], (guard: ManagerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
