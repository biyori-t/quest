import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestBoardComponent } from './quest-board/quest-board.component';
import { QuestPaperComponent } from './quest-paper/quest-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestBoardComponent,
    QuestPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
