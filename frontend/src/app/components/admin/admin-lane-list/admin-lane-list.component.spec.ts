import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLaneListComponent } from './admin-lane-list.component';

describe('AdminLaneListComponent', () => {
  let component: AdminLaneListComponent;
  let fixture: ComponentFixture<AdminLaneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLaneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
