const { app, BrowserWindow } = require('electron');

let wss = null;
const clients = new Set();

function startRelayServer() {
  try {
    const WebSocket = require('ws');
    wss = new WebSocket.Server({ port: 8080 }, () => {
      console.log('MartinMesh Relay listening on port 8080');
    });

    wss.on('connection', (ws) => {
      clients.add(ws);

      ws.on('message', (message) => {
        for (const client of clients) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message.toString());
          }
        }
      });

      ws.on('close', () => clients.delete(ws));
      ws.on('error', () => clients.delete(ws));
    });
  } catch (err) {
    console.error('Relay server startup warning:', err);
  }
}

function createWindow() {
  startRelayServer();

  const win = new BrowserWindow({
    width: 1050,
    height: 750,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#0b141a',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
