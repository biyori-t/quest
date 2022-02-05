const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

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

  // デバッグ用
  mainWindow.webContents.openDevTools({ mode: 'detach' });

  // 画面読み込み開始
  mainWindow.loadFile('index.html');
};

app.once('ready', () => {
  createWindow();
});

app.once('window-all-closed', () => app.quit());
