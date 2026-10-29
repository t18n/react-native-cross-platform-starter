const path = require('path');
const { app, BrowserWindow, session, shell } = require('electron');

// Set WEB_URL to load the webpack dev server instead of the bundled web build.
const devUrl = process.env.WEB_URL;
const isSmokeTest = process.env.SMOKE_TEST === '1';

if (!app.requestSingleInstanceLock()) {
  app.quit();
}

function isAllowedUrl(url) {
  if (devUrl && url.startsWith(devUrl)) {
    return true;
  }
  return url.startsWith('file://');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  win.once('ready-to-show', () => win.show());

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//.test(url)) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    if (!isAllowedUrl(url)) {
      event.preventDefault();
    }
  });

  if (isSmokeTest) {
    win.webContents.once('did-finish-load', () => app.exit(0));
    win.webContents.once('did-fail-load', () => app.exit(1));
  }

  if (devUrl) {
    win.loadURL(devUrl);
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    win.loadFile(path.join(__dirname, 'app', 'index.html'));
  }
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_wc, _permission, callback) => callback(false));
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('second-instance', () => {
  const [win] = BrowserWindow.getAllWindows();
  if (win) {
    if (win.isMinimized()) {
      win.restore();
    }
    win.focus();
  }
});

app.on('window-all-closed', () => app.quit());
