import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyenceComponent } from './keyence.component';

describe('KeyenceComponent', () => {
  let component: KeyenceComponent;
  let fixture: ComponentFixture<KeyenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
