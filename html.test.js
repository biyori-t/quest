const { JSDOM } = require('jsdom');
const { fromFile } = JSDOM;

test('From File', async () => {
  const jsdom = await fromFile(__dirname + '/quest.html');

  const options = jsdom.window.document.getElementsByTagName('option');
  expect(options).toHaveLength(5);
});
