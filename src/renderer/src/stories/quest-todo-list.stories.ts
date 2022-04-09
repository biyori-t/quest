import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { QuestTodoListComponent } from 'src/app/quest-paper/quest-todo-list/quest-todo-list.component';

export default {
  component: QuestTodoListComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuestTodoListComponent],
      imports: [CommonModule],
      providers: [],
    }),
  ],
  title: 'QuestTodoList',
} as Meta;

const Template: Story<QuestTodoListComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  todos: [{ title: 'Todo 1' }, { title: 'Todo 2' }, { title: 'Todo 3' }],
};

export const Empty = Template.bind({});
