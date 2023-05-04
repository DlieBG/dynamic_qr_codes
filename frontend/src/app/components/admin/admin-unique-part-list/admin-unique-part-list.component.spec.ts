import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniquePartListComponent } from './admin-unique-part-list.component';

describe('AdminUniquePartListComponent', () => {
  let component: AdminUniquePartListComponent;
  let fixture: ComponentFixture<AdminUniquePartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniquePartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUniquePartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
