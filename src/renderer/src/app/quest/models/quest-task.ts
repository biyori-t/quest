export interface QuestTask {
  title: string;
}

export function initQuestTask(): QuestTask {
  return { title: '' };
}
