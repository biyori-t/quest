import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPaperComponent } from './quest-paper.component';

describe('QuestPaperComponent', () => {
  let component: QuestPaperComponent;
  let fixture: ComponentFixture<QuestPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
