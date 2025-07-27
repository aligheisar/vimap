import { app, BrowserWindow } from "electron";
import path from "path";
import started from "electron-squirrel-startup";
import { initDB } from "@/data";
import { getSession } from "@/data/session";

let mainWindow: BrowserWindow;

if (started) {
  app.quit();
}

const makeWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    title: "vimap",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }
};

const startApp = () => {
  makeWindow();

  initDB();

  const getSessionStatus = async () => {
    const result = await getSession();
    mainWindow.webContents.on("did-finish-load", () => {
      if (result.newUser || !result) {
        mainWindow.webContents.send("vimap:no-user");
      }
    });
  };

  getSessionStatus();
};

app.on("ready", startApp);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    startApp();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
