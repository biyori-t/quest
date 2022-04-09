import { Component } from '@angular/core';
import { initQuestPaper, QuestPaper } from './quest-paper/quest-paper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'renderer';

  questPapers: QuestPaper[] = [
    initQuestPaper({
      title: 'Quest 1',
      todos: [{ title: 'A-1' }, { title: 'A-2' }],
      reward: 10000,
      symbol: '🍳',
    }),
    initQuestPaper({
      title: 'Quest 2',
      todos: [{ title: 'B-1' }],
      reward: 88888,
      symbol: '🥐',
    }),
    initQuestPaper({
      title: 'Quest 3',
      todos: [{ title: 'C-1' }, { title: 'C-2' }, { title: 'C-3' }],
      reward: 900,
      symbol: '🌓',
    }),
  ];

  async ping() {
    const sendMessage = 'Test Message';
    const result = await window.questApi.ping(sendMessage);
    console.log(result.pong);

    if (result.message === sendMessage) {
      console.log('Successed');
    }
  }
}
