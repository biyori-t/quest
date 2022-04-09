import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestBoardComponent } from './quest-board/quest-board.component';
import { QuestPaperComponent } from './quest-paper/quest-paper.component';
import { QuestSymbolComponent } from './quest-paper/quest-symbol/quest-symbol.component';
import { QuestRewardComponent } from './quest-paper/quest-reward/quest-reward.component';
import { QuestTodoListComponent } from './quest-paper/quest-todo-list/quest-todo-list.component';

@NgModule({
  declarations: [AppComponent, QuestBoardComponent, QuestPaperComponent, QuestSymbolComponent, QuestRewardComponent, QuestTodoListComponent],
  imports: [BrowserModule, FlexLayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
