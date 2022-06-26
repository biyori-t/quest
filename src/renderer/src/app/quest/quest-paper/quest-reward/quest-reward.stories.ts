import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { QuestRewardComponent } from './quest-reward.component';
import { StoryUtils } from '../../../../stories/utils';
import { QuestModule } from '../../quest.module';

export default {
  title: 'Quest/QuestReward',
  component: QuestRewardComponent,
  decorators: [
    moduleMetadata({
      imports: [QuestModule],
    }),
    StoryUtils.wrapOnQuestPaper(),
  ],
} as Meta;

export const Default: StoryObj<QuestRewardComponent> = {
  args: {
    reward: 88888,
  },
};

export const MaxReward: StoryObj<QuestRewardComponent> = {
  args: {
    reward: 999999,
  },
};

export const MinReward: StoryObj<QuestRewardComponent> = {
  args: {
    reward: 0,
  },
};
