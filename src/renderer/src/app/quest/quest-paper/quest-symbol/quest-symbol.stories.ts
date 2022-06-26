import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { QuestModule } from '../../quest.module';
import { QuestSymbolComponent } from './quest-symbol.component';

export default {
  title: 'Quest/QuestSymbol',
  component: QuestSymbolComponent,
  decorators: [
    moduleMetadata({
      imports: [QuestModule],
    }),
  ],
} as Meta;

export const Default: StoryObj<QuestSymbolComponent> = {
  args: {
    symbol: '🍤',
  },
};
