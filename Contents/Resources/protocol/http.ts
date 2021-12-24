import { app } from "../providers";

const protocol = /https?:\/\//;

export const http = {
  async mount(uri: string) {
    if (!protocol.test(uri)) return;

    // open it in chrome
    if (/updater|okta|datadog|terraform|shortcut.com/i.test(uri)) {
      await app.chrome.open(uri);
    }
    // open it in firefox
    else if (/github|npm|prezto|ycombinator|stackoverflow/i.test(uri)) {
      await app.firefox.open(uri);
    }
    // open it regsies
    else if (uri) {
      await app.safari.open(uri);
    }
  },
};
