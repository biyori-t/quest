const questTitle = document.getElementById('questTitle');
const questDiscription = document.getElementById('questDiscription');

// クエストを初期化する
questTitle.textContent = window.quest.title;
questDiscription.textContent = window.quest.discription;
