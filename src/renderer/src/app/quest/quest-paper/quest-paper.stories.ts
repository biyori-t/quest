import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { QuestModule } from '../quest.module';
import { QuestPaperComponent } from './quest-paper.component';

export default {
  component: QuestPaperComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuestPaperComponent],
      imports: [CommonModule, FlexLayoutModule, QuestModule],
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
