const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('questApi', {
  ping: async message =>
    ipcRenderer.invoke('ping', { ping: `Ping: ${message}`, message }),
});
