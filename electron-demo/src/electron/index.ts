import { app, BrowserWindow } from "electron";
import path from "path";

const createWindow = () => {
  const defaultWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  // defaultWindow.loadURL(path.join(app.getAppPath(), "../dist/index.html"));
  defaultWindow.loadURL("http://localhost:5173/");
};

app.whenReady().then(() => {
  createWindow();
});
