let questId = 1; // クエストのID
let questCount = 1; // クエストの数
const childrenWindow = []; // 開いている子ウィンドウの配列

const pingButton = document.getElementById('pingButton');
pingButton.addEventListener('click', async () => {
  const sendMessage = 'Test Message';
  const result = await window.questApi.ping(sendMessage);
  console.log(result.pong);

  if (result.message === sendMessage) {
    console.log('Successed');
  }
});

// 完了したクエストを報告するボタン
const reportButton = document.getElementById('reportButton');
const totalScoreText = document.getElementById('totalScore');
reportButton.addEventListener('click', async () => {
  const result = await window.questApi.report();
  totalScoreText.textContent = result.totalScore;

  // 報告したクエストのウィンドウは閉じる
  result.achievedIds.forEach(id => {
    const foundIndex = childrenWindow.findIndex(window => window.quest.id === id);
    if (foundIndex < 0) {
      return;
    }
    childrenWindow[foundIndex].close();
    childrenWindow.splice(foundIndex, 1);
  });
});

// クエストの一覧を表示する場所
const questBoard = document.getElementById('questBoard');

// クエストを受注する
const postQuest = async quest => {
  const postedQuest = { id: questId, ...quest };
  console.log(`Posted: `, postedQuest);
  const result = await window.questApi.post(postedQuest);
  const questWindow = window.open('quest.html', '', 'width=300, height=160');
  questWindow.quest = postedQuest;
  questId += 1;

  childrenWindow.push(questWindow);
};

// クエストを追加するボタン
const addQuestButton = document.getElementById('addQuestButton');
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

// 子ウィンドウのメッセージを受け取る
window.addEventListener('message', async event => {
  console.log(event.data);
  if (event.data.key === 'Achieve') {
    const result = await window.questApi.achieve(event.data.achieved);
  } else {
    console.warn('Invalid message: ', event.data.key);
  }
});
