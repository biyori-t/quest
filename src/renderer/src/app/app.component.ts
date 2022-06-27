import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuestPaper } from './quest/models/quest-paper';
import { QuestState } from './states/quest.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'renderer';

  @Select(QuestState)
  questPapers$!: Observable<QuestPaper[]>;

  constructor() {}

  async ping() {
    const sendMessage = 'Test Message';
    const result = await window.questApi.ping(sendMessage);
    console.log(result.pong);

    if (result.message === sendMessage) {
      console.log('Successed');
    }
  }
}
