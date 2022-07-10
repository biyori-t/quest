const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('questApi', {
  ping: async (message: any) =>
    ipcRenderer.invoke('ping', { ping: `Ping: ${message}`, message }),
  post: async (quest: any) => ipcRenderer.invoke('post', quest),
  achieve: async (achieved: any) => ipcRenderer.invoke('achieve', achieved),
  report: async () => ipcRenderer.invoke('report'),
});
