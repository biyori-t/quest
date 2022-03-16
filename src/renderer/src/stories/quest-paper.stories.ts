import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {QuestPaperComponent} from 'src/app/quest-paper/quest-paper.component';

export default {
  component: QuestPaperComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuestPaperComponent],
      imports: [CommonModule, FlexLayoutModule],
      providers: [],
    }),
  ],
  title: 'QuestPaper',
} as Meta

const Template: Story<QuestPaperComponent> = (args) => ({
  props: {
    ...args
  },
})

export const Default = Template.bind({});
Default.args = {
  title: "クエスト名",
  reward: 10000,
  tasks: [
    "Todo 1",
    "Todo 2",
    "Todo 3",
  ]
};
