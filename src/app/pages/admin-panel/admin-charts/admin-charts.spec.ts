import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCharts } from './admin-charts';

describe('AdminCharts', () => {
  let component: AdminCharts;
  let fixture: ComponentFixture<AdminCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCharts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
