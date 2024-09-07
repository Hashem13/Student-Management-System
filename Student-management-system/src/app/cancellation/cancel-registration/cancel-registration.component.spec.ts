import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRegistrationComponent } from './cancel-registration.component';

describe('CancelRegistrationComponent', () => {
  let component: CancelRegistrationComponent;
  let fixture: ComponentFixture<CancelRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelRegistrationComponent]
    });
    fixture = TestBed.createComponent(CancelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
