const questId = document.getElementById('questId');
const questTitle = document.getElementById('questTitle');
const questDiscription = document.getElementById('questDiscription');

// クエストを初期化する
questId.textContent = `ID ${window.quest.id}`;
questTitle.textContent = window.quest.title;
questDiscription.textContent = window.quest.discription;
