const { app, BrowserWindow } = require("electron");
process.env.NODE_ENV = "production";
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 1000,
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