const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  generateQR: (text) => ipcRenderer.invoke('generate-qr', text)
});