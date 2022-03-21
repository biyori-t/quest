import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardComponent } from './quest-reward.component';

describe('QuestRewardComponent', () => {
  let component: QuestRewardComponent;
  let fixture: ComponentFixture<QuestRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
