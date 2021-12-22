import { cmd } from "../providers";

export const http = {
  async mount(uri: string) {
    // open it in chrome
    if (/updater|okta|datadog|terraform|shortcut.com/i.test(uri)) {
      await cmd.open.chrome(uri);
    }
    // open it in firefox
    else if (/github|npm|prezto|ycombinator|stackoverflow/i.test(uri)) {
      await cmd.open.firefox(uri);
    }
    // open it regsies
    else if (uri) {
      await cmd.open.safari(uri);
    }
  },
};
