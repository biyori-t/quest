import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { QuestSymbolComponent } from './quest-symbol.component';

export default {
  component: QuestSymbolComponent,
  decorators: [
    moduleMetadata({
      declarations: [QuestSymbolComponent],
      imports: [CommonModule],
      providers: [],
    }),
  ],
  title: 'QuestSymbol',
} as Meta;

const Template: Story<QuestSymbolComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  symbol: '🍤',
};

export const Empty = Template.bind({});
