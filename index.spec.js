const { JSDOM } = require('jsdom');
const { queryByTestId } = require('@testing-library/dom');

describe('クエストの一覧', () => {
  let jsdom;

  beforeAll(async () => {
    jsdom = await JSDOM.fromFile(__dirname + '/index.html');
    Object.defineProperty(window, 'document', {
      writable: true,
      value: jsdom.window.document,
    });
  }),
    it('クエストの一覧が表示される', () => {
      const questBoard = queryByTestId(jsdom, 'custom-element');
      expect(questBoard).toBeTruthy();
    });
});
