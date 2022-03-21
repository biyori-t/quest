export interface QuestPaper {
  title: string;
  symbol: string;
  reward: number;
  todos: string[];
  details: string;
}

export function initQuestPaper() {
  return {
    title: '',
    symbol: '',
    reward: 0,
    todos: new Array<string>(),
    details: '',
  };
}
