#! /Applications/Ready.app/Contents/Resources/node_modules/.bin/ts-node

/**
 * https://updater.com
 */
import { $, argv, glob, path, cd } from "zx";

console.log(argv)

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

  if (/updater/i.test(uri)) {
    await cmd.open.chrome(uri);
  }
  // open it in firefox
  else if (/github|npm/i.test(uri)) {
    await cmd.open.firefox(uri);
  }
  // open it regsies
  else if (uri) {
    await cmd.open.safari(uri);
  }
}

// let's run this hot tamale 🏎💨…
require.main === module && main();
