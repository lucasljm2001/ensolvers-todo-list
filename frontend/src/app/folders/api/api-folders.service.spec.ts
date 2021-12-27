import { TestBed } from '@angular/core/testing';

import { ApiFoldersService } from './api-folders.service';

describe('ApiFoldersService', () => {
  let service: ApiFoldersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFoldersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
