import { QuestTodo } from './todo';

export interface QuestPaper {
  title: string;
  symbol: string;
  reward: number;
  todos: QuestTodo[];
  details: string;
}

export function initQuestPaper(option?: Partial<QuestPaper>): QuestPaper {
  return {
    title: option?.title == null ? '' : option.title,
    symbol: option?.symbol == null ? '' : option.symbol,
    reward: option?.reward == null ? 0 : option.reward,
    todos: option?.todos == null ? [] : option.todos,
    details: option?.details == null ? '' : option.details,
  };
}
