import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { QuestTaskListComponent } from './quest-task-list.component';

export default {
  component: QuestTaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuestTaskListComponent],
      imports: [CommonModule],
      providers: [],
    }),
  ],
  title: 'QuestTodoList',
} as Meta;

const Template: Story<QuestTaskListComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [{ title: 'Todo 1' }, { title: 'Todo 2' }, { title: 'Todo 3' }],
};

export const Empty = Template.bind({});
