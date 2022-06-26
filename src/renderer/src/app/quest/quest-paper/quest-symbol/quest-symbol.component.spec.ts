import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestSymbolComponent } from './quest-symbol.component';

describe('QuestSymbolComponent', () => {
  let component: QuestSymbolComponent;
  let fixture: ComponentFixture<QuestSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestSymbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
