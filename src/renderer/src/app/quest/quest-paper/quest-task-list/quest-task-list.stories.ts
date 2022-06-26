import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { QuestModule } from '../../quest.module';
import { QuestTaskListComponent } from './quest-task-list.component';

export default {
  title: 'Quest/QuestTaskList',
  component: QuestTaskListComponent,
  decorators: [
    moduleMetadata({
      imports: [QuestModule],
    }),
  ],
} as Meta;

export const Default: StoryObj<QuestTaskListComponent> = {
  args: {
    tasks: [{ title: 'Todo 1' }, { title: 'Todo 2' }, { title: 'Todo 3' }],
  },
};
