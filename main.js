const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const QRCode = require('qrcode');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('generate-qr', async (event, text) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text, {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 0.9,
        margin: 1,
        color: {
            dark:"#000000",
            light:"#FFFFFF"
        }
    });
    return qrCodeDataUrl;
  } catch (err) {
    console.error(err);
    return null;
  }
});
