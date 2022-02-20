export interface IElectronAPI {
  ping: (message: string) => Promise<{ pong: string; message: string }>;
}

declare global {
  interface Window {
    questApi: IElectronAPI;
  }
}
