import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLaneCreateComponent } from './admin-lane-create.component';

describe('AdminLaneCreateComponent', () => {
  let component: AdminLaneCreateComponent;
  let fixture: ComponentFixture<AdminLaneCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLaneCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLaneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
