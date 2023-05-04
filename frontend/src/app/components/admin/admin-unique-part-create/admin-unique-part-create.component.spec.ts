import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniquePartCreateComponent } from './admin-unique-part-create.component';

describe('AdminUniquePartCreateComponent', () => {
  let component: AdminUniquePartCreateComponent;
  let fixture: ComponentFixture<AdminUniquePartCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniquePartCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUniquePartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
