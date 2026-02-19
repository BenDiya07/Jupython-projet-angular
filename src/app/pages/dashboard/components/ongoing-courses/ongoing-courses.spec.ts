import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingCourses } from './ongoing-courses';

describe('OngoingCourses', () => {
  let component: OngoingCourses;
  let fixture: ComponentFixture<OngoingCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
