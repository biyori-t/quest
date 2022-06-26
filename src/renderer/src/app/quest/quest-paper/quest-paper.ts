import { QuestTask } from './quest-task';

export interface QuestPaper {
  title: string;
  symbol: string;
  reward: number;
  tasks: QuestTask[];
  details: string;
}

export function initQuestPaper(option?: Partial<QuestPaper>): QuestPaper {
  return {
    title: option?.title == null ? '' : option.title,
    symbol: option?.symbol == null ? '' : option.symbol,
    reward: option?.reward == null ? 0 : option.reward,
    tasks: option?.tasks == null ? [] : option.tasks,
    details: option?.details == null ? '' : option.details,
  };
}
