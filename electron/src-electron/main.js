const { app, BrowserWindow } = require("electron");

process.env.NODE_ENV = "production";
const server = require(__dirname + "/../src-backend/server.js");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });
  win.loadFile(__dirname + "/../dist/index.html");
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
