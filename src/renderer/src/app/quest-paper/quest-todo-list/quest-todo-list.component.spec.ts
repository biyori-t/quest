import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTodoListComponent } from './quest-todo-list.component';

describe('QuestTodoListComponent', () => {
  let component: QuestTodoListComponent;
  let fixture: ComponentFixture<QuestTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
