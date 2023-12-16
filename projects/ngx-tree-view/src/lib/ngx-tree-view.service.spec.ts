import { TestBed } from '@angular/core/testing';

import { NgxTreeViewService } from './ngx-tree-view.service';

describe('NgxTreeViewService', () => {
  let service: NgxTreeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTreeViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
