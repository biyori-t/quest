import { componentWrapperDecorator } from '@storybook/angular';

const QuestPaperWidth = 'width: 424px';
const BackgroundColor = 'background-color: #f6f5ea';

export namespace StoryUtils {
  export function wrapOnQuestPaper() {
    return componentWrapperDecorator(
      (story) =>
        `<div style="${QuestPaperWidth}; ${BackgroundColor};">${story}</div>`
    );
  }
}
