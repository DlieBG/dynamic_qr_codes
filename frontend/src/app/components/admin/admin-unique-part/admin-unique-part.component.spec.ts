import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniquePartComponent } from './admin-unique-part.component';

describe('AdminUniquePartComponent', () => {
  let component: AdminUniquePartComponent;
  let fixture: ComponentFixture<AdminUniquePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniquePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUniquePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
