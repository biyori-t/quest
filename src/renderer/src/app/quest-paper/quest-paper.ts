import { QuestTodo } from './todo';

export interface QuestPaper {
  title: string;
  symbol: string;
  reward: number;
  todos: QuestTodo[];
  details: string;
}

export function initQuestPaper(): QuestPaper {
  return {
    title: '',
    symbol: '',
    reward: 0,
    todos: [],
    details: '',
  };
}
