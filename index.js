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

const postQuest = quest => {
  console.log(`Posted: ${quest.name}`);
  const questWindow = window.open('quest.html', '', 'width=300, height=120');
  questWindow.quest = quest;
};

let count = 1;
const addQuestButton = document.getElementById('addQuestButton');
addQuestButton.addEventListener('click', async () => {
  const title = `Quest ${count}`;
  const discription = `Discription about quest ${count}`;

  // クエストを追加する処理
  const t = document.getElementById('questTemplate');
  t.content.querySelector('div#questTitle').textContent = title;
  t.content.querySelector('div#questDiscription').textContent = discription;

  const questPaper = document.importNode(t.content, true);
  // 実体化してからイベント登録する必要がある
  const postQuestButton = questPaper.getElementById('postQuestButton');
  postQuestButton.addEventListener('click', () => {
    postQuest({ title, discription });
  });

  questBoard.appendChild(questPaper);

  count += 1;
});
