import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateForm } from './certificate-form';

describe('CertificateForm', () => {
  let component: CertificateForm;
  let fixture: ComponentFixture<CertificateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
