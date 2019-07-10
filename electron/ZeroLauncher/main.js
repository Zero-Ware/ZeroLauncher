const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
  let mainWindow = new BrowserWindow({
    backgroundColor: '#383838',
    width: 200,
    height: 250,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // mainWindow.maximize()
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function() {
    mainWindow = null

  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function() {
  if (mainWindow === null) createWindow()
})
