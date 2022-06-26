import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { QuestRewardComponent } from 'src/app/quest-paper/quest-reward/quest-reward.component';
import { StoryUtils } from '../../../stories/utils';

export default {
  component: QuestRewardComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuestRewardComponent],
      imports: [CommonModule, FlexLayoutModule],
      providers: [],
    }),
    StoryUtils.wrapOnQuestPaper(),
  ],
  title: 'QuestReward',
} as Meta;

const Template: Story<QuestRewardComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  reward: 88888,
};

export const MaxReward = Template.bind({});
MaxReward.args = {
  reward: 999999,
};

export const MinReward = Template.bind({});
MinReward.args = {
  reward: 0,
};
