import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTaskListComponent } from './quest-task-list.component';

describe('QuestTaskListComponent', () => {
  let component: QuestTaskListComponent;
  let fixture: ComponentFixture<QuestTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestTaskListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
