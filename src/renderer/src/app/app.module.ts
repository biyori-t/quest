import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestModule } from './quest/quest.module';
import { AppState } from './states/app.state';
import { QuestState } from './states/quest.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestModule,
    NgxsModule.forRoot([AppState, QuestState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
