import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { QuestPaperComponent } from 'src/app/quest-paper/quest-paper.component';
import { QuestRewardComponent } from 'src/app/quest-paper/quest-reward/quest-reward.component';
import { QuestSymbolComponent } from 'src/app/quest-paper/quest-symbol/quest-symbol.component';
import { QuestTaskListComponent } from 'src/app/quest-paper/quest-task-list/quest-task-list.component';

export default {
  component: QuestPaperComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        QuestPaperComponent,
        QuestSymbolComponent,
        QuestRewardComponent,
        QuestTaskListComponent,
      ],
      imports: [CommonModule, FlexLayoutModule],
      providers: [],
    }),
  ],
  title: 'QuestPaper',
} as Meta;

const Template: Story<QuestPaperComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  questPaper: {
    title: 'クエスト名',
    symbol: '✔',
    reward: 10000,
    tasks: [{ title: 'Todo 1' }, { title: 'Todo 2' }, { title: 'Todo 3' }],
    details: 'ここに長文を入れる',
  },
};
