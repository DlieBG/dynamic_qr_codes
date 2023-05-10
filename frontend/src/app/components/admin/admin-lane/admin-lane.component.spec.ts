import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLaneComponent } from './admin-lane.component';

describe('AdminLaneComponent', () => {
  let component: AdminLaneComponent;
  let fixture: ComponentFixture<AdminLaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
