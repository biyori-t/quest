import { BrowserWindow, App, ipcMain } from 'electron';
import path from 'path';

const postedQuests: any[] = [];

function evaluate(quest: any) {
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

export class SampleApp {
  private mainWindow: BrowserWindow | null = null;
  private app: App;
  private mainURL: string = `file://${__dirname}/index.html`;

  constructor(app: App) {
    this.app = app;
    this.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
    this.app.on('ready', this.create.bind(this));
    this.app.on('activate', this.onActivated.bind(this));
  }

  private onWindowAllClosed() {
    this.app.quit();
  }

  private create() {
    this.mainWindow = new BrowserWindow({
      width: 600,
      height: 400,
      minWidth: 600,
      minHeight: 400,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });

    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });

    // レンダラーとの通信処理
    // 通信ができていることを確認するAPI
    ipcMain.handle('ping', async (event, args: any) => {
      console.log(args.ping);
      return { pong: `Pong: ${args.message}`, message: args.message };
    });

    // クエストを登録する
    ipcMain.handle('post', async (event, args: any) => {
      if (args.id == null) {
        return;
      }
      postedQuests.push({ ...args, done: false });
      console.log(postedQuests);
    });

    // クエストを達成する
    ipcMain.handle('achieve', async (event, achieved: any) => {
      const found = postedQuests.find(quest => quest.id === achieved.id);
      found.done = achieved.done;
      found.score = achieved.score;
      console.log(postedQuests);
    });

    // 達成したクエストを報告する
    ipcMain.handle('report', async event => {
      const achievedList = postedQuests.filter(quest => quest.done);
      const totalScore = achievedList.reduce(
        (sum, current) => sum + evaluate(current),
        0
      );

      return { totalScore, achievedIds: achievedList.map(achieved => achieved.id) };
    });

    // デバッグ用
    this.mainWindow.webContents.openDevTools({ mode: 'detach' });
    this.mainWindow.loadURL(`file://${__dirname}/index.html`);
  }

  private onReady() {
    this.create();
  }

  private onActivated() {
    if (this.mainWindow === null) {
      this.create();
    }
  }
}
