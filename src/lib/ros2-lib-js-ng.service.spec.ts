import { TestBed } from '@angular/core/testing';

import { Ros2LibJsNgService } from './ros2-lib-js-ng.service';

describe('Ros2LibJsNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ros2LibJsNgService = TestBed.get(Ros2LibJsNgService);
    expect(service).toBeTruthy();
  });
});
