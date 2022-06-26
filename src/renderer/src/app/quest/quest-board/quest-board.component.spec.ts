import { render, screen, within } from '@testing-library/angular';
import { QuestPaperComponent } from '../quest-paper/quest-paper.component';
import { QuestBoardComponent } from './quest-board.component';
describe('QuestBoardComponent', () => {
  test('クエストボードには、タイトルが表示される', async () => {
    await render(QuestBoardComponent, {
      componentProperties: {
        quests: [],
      },
      declarations: [QuestPaperComponent],
    });

    expect(screen.getByText('クエストボード')).toBeInTheDocument();
  });

  test('クエストボードには、クエストの一覧が表示される', async () => {
    await render(QuestBoardComponent, {
      componentProperties: {
        quests: [{ title: 'Quest1' }],
      },
      declarations: [QuestPaperComponent],
    });

    const { getAllByRole } = within(screen.getByTestId('quest-list'));
    const quests = getAllByRole('listitem');

    expect(quests).toHaveLength(1);
  });
});
