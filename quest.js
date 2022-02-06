const questId = document.getElementById('questId');
const questTitle = document.getElementById('questTitle');
const questDiscription = document.getElementById('questDiscription');

// クエストを初期化する
questId.textContent = `ID ${window.quest.id}`;
questTitle.textContent = window.quest.title;
questDiscription.textContent = window.quest.discription;

const achieveButton = document.getElementById('achieveQuestButton');
achieveButton.addEventListener('click', async () => {
  window.opener.postMessage({
    key: 'Achieve',
    achieved: { id: window.quest.id, done: true },
  });
  questTitle.textContent = `✔${window.quest.title}`;
});
