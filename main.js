const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

const postedQuests = [];

function evaluate(quest) {
  switch (quest.score) {
    case 'S':
      return 1.2;
    case 'A':
      return 1.0;
    case 'B':
      return 0.8;
    case 'C':
      return 0.6;
    case 'D':
      return 0.5;
    default:
      return 0;
  }
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: 'Quest',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // レンダラーとの通信処理
  // 通信ができていることを確認するAPI
  ipcMain.handle('ping', async (event, args) => {
    console.log(args.ping);
    return { pong: `Pong: ${args.message}`, message: args.message };
  });

  // クエストを登録する
  ipcMain.handle('post', async (event, args) => {
    if (args.id == null) {
      return;
    }
    postedQuests.push({ ...args, done: false });
    console.log(postedQuests);
  });

  // クエストを達成する
  ipcMain.handle('achieve', async (event, achieved) => {
    const found = postedQuests.find(quest => quest.id === achieved.id);
    found.done = achieved.done;
    found.score = achieved.score;
    console.log(postedQuests);
  });

  // 達成したクエストを報告する
  ipcMain.handle('report', async event => {
    const totalScore = postedQuests
      .filter(quest => quest.done)
      .reduce((sum, current) => sum + evaluate(current), 0);
    return { totalScore };
  });

  // デバッグ用
  mainWindow.webContents.openDevTools({ mode: 'detach' });

  // 画面読み込み開始
  mainWindow.loadFile('index.html');
};

app.once('ready', () => {
  createWindow();
});

app.once('window-all-closed', () => app.quit());
