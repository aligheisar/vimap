import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("vimap", {
  onNoUser: (callback: () => void) => ipcRenderer.on("vimap:no-user", callback),
});
