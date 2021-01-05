const {app,BrowserWindow} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });


    // Load the HTML  when we're loaded
    win.loadFile('index.html');
}

app.on('ready', createWindow);