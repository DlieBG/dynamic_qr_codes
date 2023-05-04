import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupInformationComponent } from './lookup-information.component';

describe('LookupInformationComponent', () => {
  let component: LookupInformationComponent;
  let fixture: ComponentFixture<LookupInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
