import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSettings } from './manage-settings';

describe('ManageSettings', () => {
  let component: ManageSettings;
  let fixture: ComponentFixture<ManageSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
