import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeaderboard } from './manage-leaderboard';

describe('ManageLeaderboard', () => {
  let component: ManageLeaderboard;
  let fixture: ComponentFixture<ManageLeaderboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageLeaderboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageLeaderboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
