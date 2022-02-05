const pingButton = document.getElementById('pingButton');
pingButton.addEventListener('click', async () => {
  const sendMessage = 'Test Message';
  const result = await window.questApi.ping(sendMessage);
  console.log(result.pong);

  if (result.message === sendMessage) {
    console.log('Successed');
  }
});

const questBoard = document.getElementById('questBoard');

let count = 1;
const addQuestButton = document.getElementById('addQuestButton');
addQuestButton.addEventListener('click', async () => {
  // クエストを追加する処理
  const t = document.getElementById('questTemplate');
  t.content.querySelector('div#questTitle').textContent = `Quest ${count}`;
  t.content.querySelector(
    'div#questDiscription'
  ).textContent = `Discription about quest ${count}`;

  const questPaper = document.importNode(t.content, true);
  questBoard.appendChild(questPaper);

  count += 1;
});
