import { render, screen, fireEvent } from '@testing-library/angular';
import { QuestBoardComponent } from './quest-board.component';
describe('QuestBoardComponent', () => {
  test('should render counter', async () => {
    await render(QuestBoardComponent, {
      componentProperties: { counter: 5 },
    });

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
  });

  test('should increment the counter on click', async () => {
    await render(QuestBoardComponent, {
      componentProperties: { counter: 5 },
    });

    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText('Current Count: 6')).toBeInTheDocument();
  });
});
