const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('questApi', {
  ping: async message =>
    ipcRenderer.invoke('ping', { ping: `Ping: ${message}`, message }),
  post: async quest => ipcRenderer.invoke('post', quest),
  achieve: async achieved => ipcRenderer.invoke('achieve', achieved),
});
