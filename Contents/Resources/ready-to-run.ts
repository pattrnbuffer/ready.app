#! ./node_modules/.bin/ts-node

import { $, argv } from "zx";

const cmd = {
  open: {
    chrome: (uri: string) =>
      $`open -a "Google Chrome" ${uri} --args --profile-directory="Profile 3"`,
    firefox: (uri: string) => $`open -a "Firefox Developer Edition" ${uri}`,
    safari: (uri: string) => $`open -a "Safari" ${uri}`,
  },
};

async function main() {
  const [uri] = argv._;

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
}

// let's run this hot tamale 🏎💨…
require.main === module && main();
