import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupScanComponent } from './lookup-scan.component';

describe('LookupScanComponent', () => {
  let component: LookupScanComponent;
  let fixture: ComponentFixture<LookupScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupScanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
