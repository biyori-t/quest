import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { QuestBoardComponent } from './quest-board/quest-board.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(AppComponent, {
      declarations: [QuestBoardComponent],
    });

    expect(screen.getByText('renderer app is running!')).toBeInTheDocument();
  });
});
