import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { QuestModule } from '../quest.module';
import { QuestPaperComponent } from './quest-paper.component';

export default {
  title: 'Quest/QuestPaper',
  component: QuestPaperComponent,
  decorators: [
    moduleMetadata({
      imports: [QuestModule],
    }),
  ],
} as Meta;

export const Default: StoryObj<QuestPaperComponent> = {
  args: {
    questPaper: {
      title: 'クエスト名',
      symbol: '✔',
      reward: 10000,
      tasks: [{ title: 'Todo 1' }, { title: 'Todo 2' }, { title: 'Todo 3' }],
      details: 'ここに長文を入れる',
    },
  },
};
