let questId = 1; // クエストのID
let questCount = 1; // クエストの数

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

const postQuest = async quest => {
  const postedQuest = { id: questId, ...quest };
  console.log(`Posted: `, postedQuest);
  const result = await window.questApi.post(postedQuest);
  const questWindow = window.open('quest.html', '', 'width=300, height=120');
  questWindow.quest = postedQuest;
  questId += 1;
};

const addQuestButton = document.getElementById('addQuestButton');
// クエストを追加する処理
addQuestButton.addEventListener('click', async () => {
  const id = questCount;
  const title = `Quest ${questCount}`;
  const discription = `Discription about quest ${questCount}`;

  const t = document.getElementById('questTemplate');
  t.content.querySelector('div#questTitle').textContent = title;
  t.content.querySelector('div#questDiscription').textContent = discription;

  const questPaper = document.importNode(t.content, true);
  // 実体化するまえに設定しても undefined になるので、
  // 実体化してからイベント登録する必要がある
  const postQuestButton = questPaper.getElementById('postQuestButton');
  postQuestButton.addEventListener('click', () => {
    postQuest({ title, discription });
  });
  questBoard.appendChild(questPaper);

  questCount += 1;
});
