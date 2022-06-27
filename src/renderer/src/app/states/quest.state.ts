import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { initQuestPaper, QuestPaper } from '../quest/models/quest-paper';

const MOCK_STATE = [
  initQuestPaper({
    title: 'Quest 1',
    tasks: [{ title: 'A-1' }, { title: 'A-2' }],
    reward: 10000,
    symbol: '🍳',
  }),
  initQuestPaper({
    title: 'Quest 2',
    tasks: [{ title: 'B-1' }],
    reward: 88888,
    symbol: '🥐',
  }),
  initQuestPaper({
    title: 'Quest 3',
    tasks: [{ title: 'C-1' }, { title: 'C-2' }, { title: 'C-3' }],
    reward: 900,
    symbol: '🌓',
  }),
];

@State<QuestPaper[]>({
  name: 'quest',
  defaults: MOCK_STATE,
})
@Injectable()
export class QuestState {}
