const questId = document.getElementById('questId');
const questTitle = document.getElementById('questTitle');
const questDiscription = document.getElementById('questDiscription');
const questScore = document.getElementById('questScore');

// クエストを初期化する
questId.textContent = `ID ${window.quest.id}`;
questTitle.textContent = window.quest.title;
questDiscription.textContent = window.quest.discription;

const achieveButton = document.getElementById('achieveQuestButton');
achieveButton.addEventListener('click', async () => {
  const score = questScore.value;
  window.opener.postMessage({
    key: 'Achieve',
    achieved: { id: window.quest.id, done: true, score },
  });
  questTitle.textContent = `✔${window.quest.title}`;
});
