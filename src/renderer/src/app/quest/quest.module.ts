import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestBoardComponent } from './quest-board/quest-board.component';
import { QuestPaperComponent } from './quest-paper/quest-paper.component';
import { QuestRewardComponent } from './quest-paper/quest-reward/quest-reward.component';
import { QuestSymbolComponent } from './quest-paper/quest-symbol/quest-symbol.component';
import { QuestTaskListComponent } from './quest-paper/quest-task-list/quest-task-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    QuestBoardComponent,
    QuestPaperComponent,
    QuestSymbolComponent,
    QuestRewardComponent,
    QuestTaskListComponent,
  ],
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    QuestBoardComponent,
    QuestPaperComponent,
    QuestSymbolComponent,
    QuestRewardComponent,
    QuestTaskListComponent,
  ],
})
export class QuestModule {}
