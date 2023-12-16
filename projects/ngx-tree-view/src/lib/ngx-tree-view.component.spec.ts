import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTreeViewComponent } from './ngx-tree-view.component';

describe('NgxTreeViewComponent', () => {
  let component: NgxTreeViewComponent;
  let fixture: ComponentFixture<NgxTreeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTreeViewComponent]
    });
    fixture = TestBed.createComponent(NgxTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
